// ═══════════════════════════════════════════════════════
// GLOBE.JS — Three.js Scene, Globe, Markers, Animation
// ═══════════════════════════════════════════════════════

var scene, camera, renderer, controls, globeGroup;
var markers = [], clusters = [], starSystems = [], lineUniforms;
var hoveredSprite = null, isAnimatingCamera = false, isPageOpen = false;
var globeMeshRef = null;
var GLOBE_RADIUS = 1;
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

function latLngToVec3(lat, lon, r) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
    );
}

function makeMarkerTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 128;
    var ctx = c.getContext('2d');
    ctx.beginPath(); ctx.arc(64, 64, 36, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff'; ctx.fill();
    ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.stroke();
    return new THREE.CanvasTexture(c);
}

function makeClusterTexture(count) {
    var c = document.createElement('canvas');
    c.width = c.height = 128;
    var ctx = c.getContext('2d');
    ctx.beginPath(); ctx.arc(64, 64, 44, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff'; ctx.fill();
    ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.stroke();
    ctx.fillStyle = '#050505';
    ctx.font = 'bold 44px Inter, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(count, 64, 67);
    return new THREE.CanvasTexture(c);
}

function buildMarkers() {
    var markerMat = new THREE.SpriteMaterial({
        map: makeMarkerTexture(), sizeAttenuation: true, depthWrite: false
    });
    var clusterData = [];

    globeProjects.forEach(function(project) {
        var pos = latLngToVec3(project.lat, project.lon, GLOBE_RADIUS + 0.05);
        var added = false;
        for (var ci = 0; ci < clusterData.length; ci++) {
            if (clusterData[ci].center.distanceTo(pos) < 0.25) {
                clusterData[ci].projects.push(project);
                added = true; break;
            }
        }
        if (!added) clusterData.push({
            center: pos, centerLat: project.lat,
            centerLon: project.lon, projects: [project]
        });
    });

    clusterData.forEach(function(cluster) {
        if (cluster.projects.length === 1) {
            var sprite = new THREE.Sprite(markerMat);
            sprite.position.copy(cluster.center);
            sprite.scale.set(0.04, 0.04, 0.04);
            sprite.userData = { isCluster: false, data: cluster.projects[0] };
            globeGroup.add(sprite); markers.push(sprite);
            cluster.projects[0].scenePosition = cluster.center.clone();
        } else {
            var clSprite = new THREE.Sprite(new THREE.SpriteMaterial({
                map: makeClusterTexture(cluster.projects.length),
                sizeAttenuation: true, depthWrite: false
            }));
            clSprite.position.copy(cluster.center);
            clSprite.scale.set(0.05, 0.05, 0.05);
            clSprite.userData = { isCluster: true, count: cluster.projects.length };
            globeGroup.add(clSprite); markers.push(clSprite);
            cluster.clusterSprite = clSprite;
            cluster.individualSprites = [];

            var spreadAngle = (Math.PI * 2) / cluster.projects.length;
            var radiusOffset = 1.0 + (cluster.projects.length * 0.15);
            var lonScale = 1 / Math.cos(cluster.centerLat * (Math.PI / 180));

            cluster.projects.forEach(function(proj, index) {
                var angle = index * spreadAngle;
                var spreadPos = latLngToVec3(
                    cluster.centerLat + Math.cos(angle) * radiusOffset,
                    cluster.centerLon + Math.sin(angle) * radiusOffset * lonScale,
                    GLOBE_RADIUS + 0.05
                );
                var sp = new THREE.Sprite(markerMat);
                sp.position.copy(spreadPos);
                sp.scale.set(0.035, 0.035, 0.035);
                sp.userData = { isCluster: false, data: proj };
                sp.visible = false;
                globeGroup.add(sp); markers.push(sp);
                proj.scenePosition = spreadPos.clone();
                cluster.individualSprites.push(sp);
            });
            clusters.push(cluster);
        }
    });
}

function flyTo(targetVector, callback, targetZoom) {
    if (typeof targetZoom === 'undefined') targetZoom = 2.2;
    isAnimatingCamera = true;
    controls.autoRotate = false;
    controls.enabled = false;

    var worldTarget = targetVector.clone().applyMatrix4(globeGroup.matrixWorld);
    var targetSpherical = new THREE.Spherical().setFromVector3(
        worldTarget.clone().normalize().multiplyScalar(targetZoom)
    );
    var thetaOffset = window.innerWidth <= 768 ? 0 : Math.PI / 7.5;
    targetSpherical.theta += thetaOffset;

    var currentSpherical = new THREE.Spherical().setFromVector3(camera.position);
    var diff = targetSpherical.theta - currentSpherical.theta;
    if (diff > Math.PI) targetSpherical.theta -= 2 * Math.PI;
    if (diff < -Math.PI) targetSpherical.theta += 2 * Math.PI;

    new TWEEN.Tween(currentSpherical)
        .to({ radius: targetSpherical.radius, phi: targetSpherical.phi, theta: targetSpherical.theta }, 650)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(function() { camera.position.setFromSpherical(currentSpherical); camera.lookAt(0, 0, 0); })
        .onComplete(function() { controls.enabled = true; isAnimatingCamera = false; if (callback) callback(); })
        .start();
}

function initThreeJSEngine() {
    lineUniforms = {
        uMousePos: { value: new THREE.Vector3(0, 0, 0) },
        uHoverRadius: { value: 0.35 },
        uGlowColor: { value: new THREE.Color(0x4facfe) }
    };

    var container = document.getElementById('canvas-container');
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 4.5);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.05;
    controls.enablePan = false; controls.minDistance = 1.5;
    controls.maxDistance = 6.0; controls.autoRotate = false;
    controls.autoRotateSpeed = 0.4;

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    var sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 3, 5); scene.add(sun);
    var rim = new THREE.DirectionalLight(0x88aaff, 0.8);
    rim.position.set(-5, 0, -5); scene.add(rim);

    globeGroup = new THREE.Group();
    globeGroup.rotation.y = -Math.PI / 2;
    scene.add(globeGroup);

    var baseGlobe = new THREE.Mesh(
        new THREE.SphereGeometry(GLOBE_RADIUS * 0.99, 64, 64),
        new THREE.MeshBasicMaterial({ color: 0x050505 })
    );
    globeGroup.add(baseGlobe);
    globeMeshRef = baseGlobe;

    // Atmosphere
    scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(GLOBE_RADIUS * 1.15, 64, 64),
        new THREE.ShaderMaterial({
            vertexShader: 'varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
            fragmentShader: 'varying vec3 vN;void main(){float i=pow(0.55-dot(vN,vec3(0,0,1)),3.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*i*1.2;}',
            blending: THREE.AdditiveBlending, side: THREE.BackSide,
            transparent: true, depthWrite: false
        })
    ));

    // Country outlines
    var baseMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 });
    var glowMat = new THREE.ShaderMaterial({
        uniforms: lineUniforms,
        vertexShader: 'varying vec3 vWP;void main(){vec4 wp=modelMatrix*vec4(position,1.0);vWP=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}',
        fragmentShader: 'uniform vec3 uMousePos;uniform float uHoverRadius;uniform vec3 uGlowColor;varying vec3 vWP;void main(){float d=distance(vWP,uMousePos);float i=pow(max(0.0,1.0-(d/uHoverRadius)),2.0);gl_FragColor=vec4(uGlowColor*i*1.5,i*0.9);}',
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    });

    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            data.features.forEach(function(f) {
                var process = function(rings) {
                    rings.forEach(function(ring) {
                        var pts = ring.map(function(c) { return latLngToVec3(c[1], c[0], GLOBE_RADIUS); });
                        var g1 = new THREE.BufferGeometry().setFromPoints(pts);
                        globeGroup.add(new THREE.Line(g1, baseMat));
                        var pts2 = ring.map(function(c) { return latLngToVec3(c[1], c[0], GLOBE_RADIUS * 1.002); });
                        var g2 = new THREE.BufferGeometry().setFromPoints(pts2);
                        globeGroup.add(new THREE.Line(g2, glowMat));
                    });
                };
                if (f.geometry.type === 'Polygon') process(f.geometry.coordinates);
                else if (f.geometry.type === 'MultiPolygon')
                    f.geometry.coordinates.forEach(function(p) { process(p); });
            });
        })
        .catch(function(err) { console.warn('GeoJSON failed:', err); });

    // Stars
    for (var j = 0; j < 3; j++) {
        var geo = new THREE.BufferGeometry();
        var pos = new Float32Array(1000 * 3);
        for (var i = 0; i < 1000; i++) {
            var r = 150 + Math.random() * 150;
            var th = Math.random() * 2 * Math.PI;
            var ph = Math.acos(2 * Math.random() - 1);
            pos[i*3] = r*Math.sin(ph)*Math.cos(th);
            pos[i*3+1] = r*Math.cos(ph);
            pos[i*3+2] = r*Math.sin(ph)*Math.sin(th);
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        var sys = new THREE.Points(geo, new THREE.PointsMaterial({
            size: 1 + Math.random(), color: 0xffffff,
            transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
        }));
        scene.add(sys);
        starSystems.push({ mesh: sys, speed: 0.001 + Math.random() * 0.002, baseOpacity: 0.4 + Math.random() * 0.3 });
    }

    buildMarkers();
    requestAnimationFrame(animate);

    setTimeout(function() { container.classList.remove('blurry-start'); controls.autoRotate = true; }, 500);
    setTimeout(function() { document.getElementById('intro-overlay').style.opacity = '0'; }, 1500);
}

// ═══════════════════════════════════════════════════════
// ANIMATION LOOP
// ═══════════════════════════════════════════════════════
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    controls.update();

    var now = Date.now();
    starSystems.forEach(function(s) {
        s.mesh.material.opacity = s.baseOpacity + Math.sin(now * s.speed) * 0.2;
    });

    var isZoomedIn = camera.position.length() < 2.8;
    clusters.forEach(function(c) {
        if (c.clusterSprite.visible === isZoomedIn) {
            c.clusterSprite.visible = !isZoomedIn;
            c.individualSprites.forEach(function(s) { s.visible = isZoomedIn; });
        }
    });

    if (!isPageOpen && !isAnimatingCamera) {
        raycaster.setFromCamera(mouse, camera);
        if (globeMeshRef) {
            var gHits = raycaster.intersectObject(globeMeshRef);
            if (gHits.length) lineUniforms.uMousePos.value.copy(gHits[0].point);
            else lineUniforms.uMousePos.value.set(0, 0, 0);
        }
        var visible = markers.filter(function(m) { return m.visible; });
        var hits = raycaster.intersectObjects(visible);
        if (hits.length) {
            if (hoveredSprite !== hits[0].object) {
                if (hoveredSprite) {
                    var ds = hoveredSprite.userData.isCluster ? 0.05 : 0.04;
                    hoveredSprite.scale.set(ds, ds, ds);
                }
                hoveredSprite = hits[0].object;
                hoveredSprite.scale.set(0.08, 0.08, 0.08);
                document.body.style.cursor = 'pointer';
                controls.autoRotateSpeed = 0.05;
                var tip = document.getElementById('tooltip');
                tip.textContent = hoveredSprite.userData.isCluster
                    ? hoveredSprite.userData.count + ' Projects'
                    : (hoveredSprite.userData.data ? hoveredSprite.userData.data.airport : '');
                tip.style.left = Math.min(window.innerWidth - 200, window.innerWidth/2 + mouse.x*window.innerWidth/2 + 15) + 'px';
                tip.style.top = (window.innerHeight/2 - mouse.y*window.innerHeight/2 + 15) + 'px';
                tip.style.opacity = 1;
            }
        } else if (hoveredSprite) {
            var rs = hoveredSprite.userData.isCluster ? 0.05 : 0.04;
            hoveredSprite.scale.set(rs, rs, rs);
            document.body.style.cursor = 'default';
            controls.autoRotateSpeed = 0.4;
            document.getElementById('tooltip').style.opacity = 0;
            hoveredSprite = null;
        }
    } else {
        document.getElementById('tooltip').style.opacity = 0;
        lineUniforms.uMousePos.value.set(0, 0, 0);
    }

    renderer.render(scene, camera);
}
