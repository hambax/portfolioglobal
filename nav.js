// ═══════════════════════════════════════════════════════
// NAV.JS — Navigation, Pages, Digital, AI Frontier, Tools
// ═══════════════════════════════════════════════════════

// These are defined here until we move them into data.js
var aiProjects = [
    {
        id: 'surf',
        title: 'Surf Conditions App',
        sub: 'Real-time swell and forecast',
        status: 'live',
        description: 'A progressive web app that pulls live buoy and forecast data to give surfers a simple, readable conditions summary for their local break. Built with Claude and deployed via Vercel. Combines weather APIs, AI summarisation and a clean mobile-first UI.',
        tags: ['Claude', 'Vercel', 'Weather API', 'PWA'],
        link: null
    },
    {
        id: 'stars',
        title: 'Star Tracker',
        sub: 'Device-orientation sky map',
        status: 'live',
        description: 'A browser-based star tracking app that uses device orientation and GPS to render a real-time sky map. Point your phone at the sky and identify constellations, planets and satellites. Built entirely with AI assistance using Three.js and astronomy calculation libraries.',
        tags: ['Claude', 'Three.js', 'GPS API', 'Device Orientation'],
        link: null
    },
    {
        id: 'palette',
        title: 'AI Colour Palette Generator',
        sub: 'Mood-to-palette in seconds',
        status: 'concept',
        description: 'Describe a feeling, a place, or a material and get back a curated colour palette with hex codes, usage notes and accessibility ratings. An experiment in using language models to bridge the gap between a design brief and a visual starting point.',
        tags: ['Claude API', 'React', 'Design Tools'],
        link: null
    },
    {
        id: 'tide',
        title: 'Tide Clock',
        sub: 'Ambient tidal awareness',
        status: 'concept',
        description: 'A minimal ambient display that shows current tide state, next high and low, and a gentle animation reflecting the rhythm of the ocean. Designed for coastal people who live by the water. An exercise in restraint and meaningful data visualisation.',
        tags: ['Claude', 'NOAA API', 'Canvas API'],
        link: null
    },
    {
        id: 'retail',
        title: 'Retail Brief Generator',
        sub: 'AI-assisted design briefs',
        status: 'concept',
        description: 'A tool that takes a few inputs about a brand, location, and customer type and generates a structured retail design brief with spatial recommendations, material directions and reference imagery prompts. Built from years of writing briefs the hard way.',
        tags: ['Claude API', 'Next.js', 'Retail Design'],
        link: null
    },
    {
        id: 'wayfind',
        title: 'Wayfinding Simulator',
        sub: 'Test navigation before you build',
        status: 'concept',
        description: 'An interactive tool that lets you sketch a floor plan and then simulate how different types of visitors would navigate through the space. Uses AI to evaluate sightlines, decision points and egress routes. Born from years of masterplanning airport retail.',
        tags: ['Claude', 'Canvas API', 'Spatial Design'],
        link: null
    },
    {
        id: 'watch',
        title: 'Watch Finder',
        sub: 'Natural language watch discovery',
        status: 'concept',
        description: 'Describe a watch in plain language and get matched to real timepieces that fit. An experiment in semantic search and product discovery, inspired by the Timebox Zurich project and the idea that people express themselves through what they wear on their wrist.',
        tags: ['Claude API', 'Semantic Search', 'Product Design'],
        link: null
    }
];

var toolSections = [
    {
        heading: 'AI Models',
        tools: [
            { name: 'Claude', icon: 'Cl', color: '#D97706', desc: 'Primary AI partner for writing, coding, design thinking and this portfolio.', category: 'AI Model' },
            { name: 'ChatGPT', icon: 'Gp', color: '#10A37F', desc: 'Secondary model used for comparison, image generation via DALL-E and broad research.', category: 'AI Model' },
            { name: 'Gemini', icon: 'Gm', color: '#4285F4', desc: 'Google Gemini used for multimodal tasks and integration with Google Workspace.', category: 'AI Model' },
            { name: 'Midjourney', icon: 'Mj', color: '#7B68EE', desc: 'Image generation for concept art, mood boards and visual exploration.', category: 'AI Model' },
            { name: 'Runway', icon: 'Rw', color: '#FF4D6D', desc: 'AI video generation for motion concepts and design storytelling.', category: 'AI Model' }
        ]
    },
    {
        heading: 'Design Tools',
        tools: [
            { name: 'Figma', icon: 'Fi', color: '#F24E1E', desc: 'Primary UI and UX design tool for all digital product work.', category: 'Design' },
            { name: 'Photoshop', icon: 'Ps', color: '#31A8FF', desc: 'Used since my Wanda Creative days for compositing, rendering and image manipulation.', category: 'Design' },
            { name: 'Illustrator', icon: 'Ai', color: '#FF9A00', desc: 'Vector work, brand assets, floor plan graphics and technical illustration.', category: 'Design' },
            { name: 'Cinema 4D', icon: 'C4', color: '#011A6A', desc: '3D modelling for architectural visualisation and retail renders.', category: '3D' },
            { name: 'After Effects', icon: 'Ae', color: '#9999FF', desc: 'Motion graphics and presentation animation.', category: 'Motion' }
        ]
    },
    {
        heading: 'Development',
        tools: [
            { name: 'VS Code', icon: '{}', color: '#007ACC', desc: 'Primary code editor for all web and scripting work.', category: 'Development' },
            { name: 'GitHub', icon: 'Gh', color: '#6E40C9', desc: 'Version control and project hosting including this portfolio.', category: 'Development' },
            { name: 'Vercel', icon: 'Vc', color: '#ffffff', desc: 'Deployment platform for web apps and AI experiments.', category: 'Development' },
            { name: 'Cursor', icon: 'Cu', color: '#6C6C6C', desc: 'AI-assisted code editor used for rapid prototyping with Claude integration.', category: 'Development' },
            { name: 'Claude.ai', icon: 'Cl', color: '#D97706', desc: 'Used daily for code generation, debugging, copywriting and design problem solving.', category: 'Development' }
        ]
    },
    {
        heading: 'Research and Thinking',
        tools: [
            { name: 'Notion', icon: 'No', color: '#ffffff', desc: 'Project documentation, research notes and knowledge management.', category: 'Productivity' },
            { name: 'Perplexity', icon: 'Px', color: '#20B2AA', desc: 'AI-powered research tool for fast, cited answers to complex questions.', category: 'Research' },
            { name: 'Are.na', icon: 'Ar', color: '#333333', desc: 'Visual bookmarking and mood boarding for design research and inspiration.', category: 'Research' },
            { name: 'Readwise', icon: 'Rw', color: '#FF6B35', desc: 'Spaced repetition for design and technology reading highlights.', category: 'Research' }
        ]
    }
];

// ═══════════════════════════════════════════════════════
// DIGITAL PROJECT RENDERER
// ═══════════════════════════════════════════════════════
window.loadDigitalProject = function(index) {
    document.querySelectorAll('#digital-project-list .digital-list-item').forEach(function(el, i) {
        el.classList.toggle('active', i === index);
    });
    var data = digitalProjects[index];
    if (!data) return;

    var zone     = document.getElementById('digital-content-zone');
    var scrollEl = document.getElementById('digital-main-content');
    var badgeClass = data.status === 'built' ? 'badge-digital' : 'badge-concept';
    var badgeText  = data.status === 'built' ? 'Live Product' : 'UX Concept';

    zone.innerHTML = buildProjectHTML(data, badgeClass, badgeText, 'digital-main-content');
    bindGlanceLinks(zone, scrollEl);
    scrollEl.scrollTop = 0;
};

// ═══════════════════════════════════════════════════════
// AI FRONTIER
// ═══════════════════════════════════════════════════════
function initAIFrontier() {
    var list = document.getElementById('ai-project-list');
    list.innerHTML = aiProjects.map(function(p, i) {
        return '<div class="digital-list-item" onclick="loadAIProject(' + i + ')">' +
            '<div class="digital-item-title">' + p.title + '</div>' +
            '<div class="digital-item-sub">' + p.sub + '</div>' +
        '</div>';
    }).join('');
    if (aiProjects.length > 0) loadAIProject(0);
}

window.loadAIProject = function(index) {
    document.querySelectorAll('#ai-project-list .digital-list-item').forEach(function(el, i) {
        el.classList.toggle('active', i === index);
    });
    var p = aiProjects[index];
    if (!p) return;
    var zone = document.getElementById('ai-content-zone');
    zone.innerHTML = '';

    var badgeClass = p.status === 'live' ? 'badge-built' : 'badge-concept';
    var badgeText  = p.status === 'live' ? 'Live Demo' : 'Concept';

    var header = document.createElement('div');
    header.className = 'project-header';

    var titleEl = document.createElement('h1');
    titleEl.className = 'modal-title';
    titleEl.style.fontSize = '2.2rem';
    titleEl.textContent = p.title;
    header.appendChild(titleEl);

    var subEl = document.createElement('p');
    subEl.className = 'modal-subtitle';
    subEl.textContent = p.sub;
    header.appendChild(subEl);

    var meta = document.createElement('div');
    meta.className = 'modal-header-meta';
    meta.innerHTML = '<div class="status-badge ' + badgeClass + '">' + badgeText + '</div>';
    header.appendChild(meta);

    var hr = document.createElement('hr');
    hr.className = 'project-divider';
    header.appendChild(hr);
    zone.appendChild(header);

    var desc = document.createElement('p');
    desc.className = 'block-text';
    desc.textContent = p.description;
    zone.appendChild(desc);

    if (p.tags && p.tags.length) {
        var tagWrap = document.createElement('div');
        tagWrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:20px;';
        p.tags.forEach(function(tag) {
            var t = document.createElement('span');
            t.style.cssText = 'font-size:0.75rem;padding:4px 12px;border-radius:20px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);letter-spacing:0.5px;';
            t.textContent = tag;
            tagWrap.appendChild(t);
        });
        zone.appendChild(tagWrap);
    }

    if (p.link) {
        var btn = document.createElement('a');
        btn.href = p.link;
        btn.target = '_blank';
        btn.className = 'demo-link-btn';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Open Live Demo';
        zone.appendChild(btn);
    } else {
        var note = document.createElement('p');
        note.style.cssText = 'font-size:0.8rem;color:var(--text-muted);margin-top:24px;letter-spacing:0.5px;';
        note.textContent = 'Demo link coming soon.';
        zone.appendChild(note);
    }

    document.getElementById('ai-main-content').scrollTop = 0;
};

// ═══════════════════════════════════════════════════════
// TOOL STACK
// ═══════════════════════════════════════════════════════
function initToolStack() {
    var body = document.getElementById('tools-body');
    body.innerHTML = '';

    toolSections.forEach(function(section) {
        var sh = document.createElement('p');
        sh.className = 'tools-section-heading';
        sh.textContent = section.heading;
        body.appendChild(sh);

        var grid = document.createElement('div');
        grid.className = 'tools-grid';

        section.tools.forEach(function(tool) {
            var chip = document.createElement('div');
            chip.className = 'tool-chip';
            chip.id = 'tool-' + tool.name.replace(/\s/g, '-').toLowerCase();
            chip.innerHTML = '<div class="tool-chip-icon" style="background:' + tool.color + '22;color:' + tool.color + '">' + tool.icon + '</div><div class="tool-chip-name">' + tool.name + '</div>';
            chip.addEventListener('click', function() { selectTool(tool, chip); });
            grid.appendChild(chip);
        });
        body.appendChild(grid);
    });
}

function selectTool(tool, chipEl) {
    document.querySelectorAll('.tool-chip').forEach(function(c) { c.classList.remove('active'); });
    chipEl.classList.add('active');

    var panel = document.getElementById('tool-detail-panel');
    document.getElementById('tool-detail-name').textContent = tool.name;
    document.getElementById('tool-detail-category').textContent = tool.category;
    document.getElementById('tool-detail-body').textContent = tool.desc;
    panel.classList.add('active');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ═══════════════════════════════════════════════════════
// showPage — called by subtitle links in header
// ═══════════════════════════════════════════════════════
window.showPage = function(target) {
    var modal = document.getElementById('project-modal');
    var pageOverlay = document.getElementById('page-overlay');
    var pages = document.querySelectorAll('.page-content');
    var navItems = document.querySelectorAll('.nav-item');

    modal.classList.remove('active');
    modal.classList.add('hidden-state');

    pageOverlay.classList.add('active');
    pages.forEach(function(p) { p.classList.remove('active'); });
    document.getElementById('page-' + target).classList.add('active');

    navItems.forEach(function(n) {
        n.classList.toggle('active', n.getAttribute('data-target') === target);
    });

    isPageOpen = true;
    controls.enabled = false;
};
