// ═══════════════════════════════════════════════════════
// RENDERER.JS — Content Block Builders
// ═══════════════════════════════════════════════════════

function buildGlanceCard(block, scrollId) {
    if (!block) return '';
    const items = (block.items || []).map(item => {
        if (typeof item === 'object' && item.anchor) {
            return '<li><a class="glance-link" data-anchor="' + item.anchor + '" data-scroll="' + scrollId + '" href="#">' + item.label + '</a></li>';
        }
        return '<li><a href="#">' + (typeof item === 'string' ? item : item.label) + '</a></li>';
    }).join('');
    return '<div class="glance-card"><p class="glance-card-heading">At a Glance</p><ul>' + items + '</ul></div>';
}

function buildGallery(block) {
    var idAttr  = block.id      ? ' id="' + block.id + '"'               : '';
    var heading = block.heading ? '<p class="block-section-heading">' + block.heading + '</p>' : '';
    var imgs = (block.images || []).slice(0, 6).map(function(src, i) {
        return '<div class="gallery-item' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + src + '\')" onclick="selectGalleryItem(this)"></div>';
    }).join('');
    return '<div class="block-gallery"' + idAttr + '>' + heading + '<div class="gallery-container">' + imgs + '</div></div>';
}

function buildHeroImage(src) {
    return '<div class="block-hero"><img src="' + src + '" alt="" loading="lazy" onclick="openLightbox(\'' + src + '\')" /></div>';
}

function buildTextBlock(block) {
    var idAttr  = block.id      ? ' id="' + block.id + '"'               : '';
    var heading = block.heading ? '<p class="block-section-heading">' + block.heading + '</p>' : '';
    return '<div class="block-text-wrap"' + idAttr + '>' + heading + '<p class="block-text">' + block.body + '</p></div>';
}

function buildImageBlock(block) {
    var cap = block.caption ? '<p class="block-image-caption">' + block.caption + '</p>' : '';
    return '<div class="block-image"><img src="' + block.src + '" alt="' + (block.caption || '') + '" loading="lazy" onclick="openLightbox(\'' + block.src + '\')" />' + cap + '</div>';
}

function buildBulletsBlock(block) {
    var items = (block.items || []).map(function(item) {
        var label = typeof item === 'string' ? item : item.label;
        return '<li>' + label + '</li>';
    }).join('');
    var heading = block.heading ? '<p class="block-bullets-heading">' + block.heading + '</p>' : '';
    return '<div class="block-bullets">' + heading + '<ul>' + items + '</ul></div>';
}

function buildProjectHTML(data, badgeClass, badgeText, scrollContainerId) {
    var blocks = data.content || [];

    // ── HEADER
    var subtitle = data.subtitle
        ? '<p class="modal-subtitle">' + data.subtitle + '</p>' : '';
    var location = data.airport
        ? '<div class="modal-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"></circle><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg> ' + data.airport + '</div>' : '';

    var html = '<div class="project-header">' +
        '<h1 class="modal-title">' + (data.title || '') + '</h1>' +
        subtitle +
        '<div class="modal-header-meta">' +
            '<div class="status-badge ' + badgeClass + '">' + badgeText + '</div>' +
            location +
        '</div>' +
        '<hr class="project-divider">' +
    '</div>';

    // ── AT A GLANCE (pull out first)
    var glanceBlock = blocks.find(function(b) {
        return b.type === 'bullets' && b.heading === 'At a Glance';
    });
    html += buildGlanceCard(glanceBlock, scrollContainerId);

    // ── HERO IMAGE (first gallery or image block)
    var heroBlock = blocks.find(function(b) {
        return b.type === 'gallery' || b.type === 'image';
    });
    if (heroBlock) {
        if (heroBlock.type === 'gallery' && heroBlock.images && heroBlock.images[0]) {
            html += buildHeroImage(heroBlock.images[0]);
        } else if (heroBlock.type === 'image') {
            html += buildHeroImage(heroBlock.src);
        }
    }

    // ── REMAINING BLOCKS (skip glance, skip hero once)
    var heroUsed = false;
    blocks.forEach(function(block) {
        // Skip the at-a-glance card — already rendered above
        if (block.type === 'bullets' && block.heading === 'At a Glance') return;

        // First gallery/image was used as hero — skip it once
        if (!heroUsed && (block.type === 'gallery' || block.type === 'image')) {
            heroUsed = true;
            return;
        }

        switch (block.type) {
            case 'text':    html += buildTextBlock(block);    break;
            case 'image':   html += buildImageBlock(block);   break;
            case 'gallery': html += buildGallery(block);      break;
            case 'bullets': html += buildBulletsBlock(block); break;
            case 'divider': html += '<hr class="block-divider">'; break;
        }
    });

    return html;
}

// Wire up glance-card anchor clicks after innerHTML is set
function bindGlanceLinks(zone, scrollEl) {
    zone.querySelectorAll('.glance-link').forEach(function(a) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            var anchor = a.dataset.anchor;
            var target = zone.querySelector('#' + anchor);
            if (scrollEl && target) {
                scrollEl.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
            }
        });
    });
}

// Lightbox
function openLightbox(src) {
    var lightboxImg = document.getElementById('lightbox-image');
    lightboxImg.style.backgroundImage = "url('" + src + "')";
    lightboxImg.style.backgroundSize = 'contain';
    lightboxImg.style.backgroundPosition = 'center';
    lightboxImg.style.backgroundRepeat = 'no-repeat';
    document.getElementById('lightbox-overlay').classList.add('active');
}

// Gallery accordion click
window.selectGalleryItem = function(element) {
    if (element.classList.contains('active')) {
        var src = element.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        openLightbox(src);
        return;
    }
    Array.from(element.parentNode.children).forEach(function(el) {
        el.classList.remove('active');
    });
    element.classList.add('active');
};

// Simple block renderer for pages (about, ai) — now uses full block renderers
function renderSimpleBlocks(blocks, el) {
    if (!blocks || !el) return;
    el.innerHTML = (blocks || []).map(function(b) {
        switch (b.type) {
            case 'text':    return buildTextBlock(b);
            case 'bullets': return buildBulletsBlock(b);
            case 'image':   return buildImageBlock(b);
            case 'gallery': return buildGallery(b);
            default:        return '';
        }
    }).join('');
}
