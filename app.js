// ═══════════════════════════════════════════════════════
// APP.JS — Initialisation, Interactivity, Modal Logic
// ═══════════════════════════════════════════════════════

var currentProjectIndex = -1;

// ═══════════════════════════════════════════════════════
// ARCHITECTURE MODAL
// ═══════════════════════════════════════════════════════
function openModal(data) {
    currentProjectIndex = globeProjects.findIndex(function(p) { return p.id === data.id; });
    var modal = document.getElementById('project-modal');
    var scrollEl = document.getElementById('modal-scroll-area');

    modal.classList.remove('hidden-state');
    modal.classList.add('active');

    var zone = document.getElementById('modal-content-zone');
    zone.innerHTML =
        '<div class="skeleton skel-title"></div>' +
        '<div class="skeleton skel-loc"></div>' +
        '<div class="skeleton skel-gallery"></div>' +
        '<div class="skeleton skel-text"></div>' +
        '<div class="skeleton skel-text"></div>' +
        '<div class="skeleton skel-text short"></div>';
    scrollEl.scrollTop = 0;

    setTimeout(function() {
        var liveZone = document.getElementById('modal-content-zone');
        var liveScroll = document.getElementById('modal-scroll-area');
        var badgeClass = data.status === 'built' ? 'badge-built' : 'badge-concept';
        var badgeText = data.status === 'built' ? 'Built' : 'Concept';
        liveZone.innerHTML = buildProjectHTML(data, badgeClass, badgeText, 'modal-scroll-area');
        bindGlanceLinks(liveZone, liveScroll);
        liveScroll.scrollTop = 0;
    }, 250);
}

function navigateToProject(index) {
    if (!globeProjects.length) return;
    currentProjectIndex = (index + globeProjects.length) % globeProjects.length;
    var p = globeProjects[currentProjectIndex];
    var pos = p.scenePosition || latLngToVec3(p.lat, p.lon, GLOBE_RADIUS + 0.05);
    flyTo(pos, function() { openModal(p); }, 2.2);
}

// ═══════════════════════════════════════════════════════
// INTERACTIVITY SETUP
// ═══════════════════════════════════════════════════════
function setupInteractivity() {
    var modal = document.getElementById('project-modal');
    var resizer = document.getElementById('modal-resizer');
    var navItems = document.querySelectorAll('.nav-item');
    var pageOverlay = document.getElementById('page-overlay');
    var pages = document.querySelectorAll('.page-content');
    var lightbox = document.getElementById('lightbox-overlay');
    var searchInput = document.getElementById('project-search');
    var searchResults = document.getElementById('search-results');
    var isResizing = false;

    // ── Nav items
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var target = item.getAttribute('data-target');
            navItems.forEach(function(n) { n.classList.remove('active'); });
            item.classList.add('active');
            if (target === 'home') {
                pageOverlay.classList.remove('active');
                pages.forEach(function(p) { p.classList.remove('active'); });
                isPageOpen = false;
                controls.enabled = true;
                controls.autoRotate = true;
            } else {
                modal.classList.remove('active');
                modal.classList.add('hidden-state');
                pageOverlay.classList.add('active');
                pages.forEach(function(p) { p.classList.remove('active'); });
                document.getElementById('page-' + target).classList.add('active');
                isPageOpen = true;
                controls.enabled = false;
                controls.autoRotate = true;
            }
        });
    });

    // ── Modal resizer
    resizer.addEventListener('mousedown', function() {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
        resizer.classList.add('dragging');
    });
    window.addEventListener('mousemove', function(e) {
        if (!isResizing) {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            return;
        }
        e.preventDefault();
        document.documentElement.style.setProperty('--modal-width', (window.innerWidth - e.clientX) + 'px');
    });
    window.addEventListener('mouseup', function() {
        isResizing = false;
        document.body.style.cursor = 'default';
        resizer.classList.remove('dragging');
    });

    // ── Close modal button
    document.getElementById('close-modal').addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.remove('active');
        modal.classList.add('hidden-state');
        controls.autoRotate = true;
    });
    modal.addEventListener('click', function(e) { e.stopPropagation(); });

    // ── Lightbox
    lightbox.addEventListener('click', function(e) {
        e.stopPropagation();
        lightbox.classList.remove('active');
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    // ── Prev / Next
    document.getElementById('btn-prev').addEventListener('click', function() {
        navigateToProject(currentProjectIndex - 1);
    });
    document.getElementById('btn-next').addEventListener('click', function() {
        navigateToProject(currentProjectIndex + 1);
    });

    // ── Search
    searchInput.addEventListener('input', function(e) {
        var q = e.target.value.toLowerCase();
        if (!q) { searchResults.classList.remove('active'); return; }
        var matches = globeProjects.filter(function(p) {
            return p.title.toLowerCase().includes(q) || p.airport.toLowerCase().includes(q);
        });
        searchResults.innerHTML = matches.map(function(m) {
            var idx = globeProjects.findIndex(function(p) { return p.id === m.id; });
            return '<div class="search-result-item" onclick="selectSearchResult(' + idx + ')">' +
                '<strong>' + m.title + '</strong><br>' +
                '<span style="font-size:0.75rem;color:var(--text-muted)">' + m.airport + '</span>' +
            '</div>';
        }).join('');
        searchResults.classList.toggle('active', matches.length > 0);
    });
    window.selectSearchResult = function(index) {
        searchResults.classList.remove('active');
        searchInput.value = '';
        navigateToProject(index);
    };
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) searchResults.classList.remove('active');
    });

    // ── Globe click
    window.addEventListener('click', function() {
        if (isAnimatingCamera || isResizing || isPageOpen) return;
        if (hoveredSprite && hoveredSprite.userData) {
            if (hoveredSprite.userData.isCluster) {
                flyTo(hoveredSprite.position, null, 1.6);
            } else if (hoveredSprite.userData.data) {
                flyTo(hoveredSprite.position, function() {
                    openModal(hoveredSprite.userData.data);
                }, 2.2);
            }
        } else {
            modal.classList.remove('active');
            modal.classList.add('hidden-state');
            controls.autoRotate = true;
        }
    });

    // ── Touch
    window.addEventListener('touchstart', function(e) {
        if (e.touches.length > 0 && !modal.contains(e.target)) {
            mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        }
    }, { passive: false });

    // ── Window resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Close overlay on backdrop click
    pageOverlay.addEventListener('click', function(e) {
        if (e.target === pageOverlay) {
            pageOverlay.classList.remove('active');
            pages.forEach(function(p) { p.classList.remove('active'); });
            isPageOpen = false;
            controls.enabled = true;
            controls.autoRotate = true;
            navItems.forEach(function(n) {
                n.classList.toggle('active', n.getAttribute('data-target') === 'home');
            });
        }
    });

    // ── Escape key closes everything
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            modal.classList.remove('active');
            modal.classList.add('hidden-state');
            pageOverlay.classList.remove('active');
            pages.forEach(function(p) { p.classList.remove('active'); });
            isPageOpen = false;
            controls.enabled = true;
            controls.autoRotate = true;
            navItems.forEach(function(n) {
                n.classList.toggle('active', n.getAttribute('data-target') === 'home');
            });
        }
    });
}

// ═══════════════════════════════════════════════════════
// APP INIT
// ═══════════════════════════════════════════════════════
function initApp() {
    // Populate About page
    var aboutData = pageData.find(function(p) { return p.id === 'about'; });
    if (aboutData) {
        document.getElementById('about-title').textContent = aboutData.title;
        document.getElementById('about-subtitle').textContent = aboutData.subtitle;
        renderSimpleBlocks(aboutData.content, document.getElementById('about-body'));
    }

    // Populate AI page
    var aiData = pageData.find(function(p) { return p.id === 'ai'; });
    if (aiData) {
        document.getElementById('ai-title').textContent = aiData.title;
        document.getElementById('ai-subtitle').textContent = aiData.subtitle;
        renderSimpleBlocks(aiData.content, document.getElementById('ai-body'));
    }

    // Populate Digital list
    var digitalList = document.getElementById('digital-project-list');
    digitalList.innerHTML = digitalProjects.map(function(p, i) {
        return '<div class="digital-list-item" onclick="loadDigitalProject(' + i + ')">' +
            '<div class="digital-item-title">' + p.title + '</div>' +
            '<div class="digital-item-sub">' + p.airport + '</div>' +
        '</div>';
    }).join('');
    if (digitalProjects.length > 0) loadDigitalProject(0);

    document.getElementById('project-count').textContent =
        (globeProjects.length + digitalProjects.length) + ' Projects Indexed';

    initAIFrontier();
    initToolStack();

    // Hide loader, start globe
    document.getElementById('cms-loader').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('cms-loader').style.display = 'none';
        initThreeJSEngine();
        setupInteractivity();
    }, 800);
}

window.onload = initApp;
