/* ===== Blog Post Renderer ===== */
function renderPosts(posts, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    posts.forEach((post, index) => {
        const article = document.createElement('article');
        article.className = options.isTravel ? 'travel-post' : 'article-card';

        /* Date */
        const dateEl = document.createElement('span');
        dateEl.className = options.isTravel ? 'travel-date' : 'article-date';
        dateEl.textContent = post.date;
        article.appendChild(dateEl);

        /* Title */
        if (options.isTravel) {
            const titleEl = document.createElement('h2');
            titleEl.className = 'travel-location';
            titleEl.innerHTML = `<span>${post.icon || '📍'}</span> ${post.title}`;
            article.appendChild(titleEl);
        } else {
            const titleEl = document.createElement('h3');
            titleEl.className = 'article-title';
            titleEl.textContent = post.title;
            article.appendChild(titleEl);
        }

        /* Media: gallery */
        if (post.hasGallery && post.galleryHtml) {
            const gallery = document.createElement('div');
            gallery.className = 'media-gallery';
            gallery.innerHTML = post.galleryHtml;
            article.appendChild(gallery);
        }

        /* Body (markdown rendered) */
        const body = document.createElement('div');
        body.className = 'article-body markdown-body';
        body.innerHTML = marked.parse(post.content);

        /* Expand/collapse for long content */
        const textLength = body.textContent.length;
        const COLLAPSE_THRESHOLD = 300;

        if (textLength > COLLAPSE_THRESHOLD) {
            body.classList.add('collapsed');

            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'read-more-btn';
            toggleBtn.setAttribute('data-i18n', 'post.read-more');
            toggleBtn.textContent = I18N['post.read-more']?.[getCurrentLang()] || 'Read More';
            toggleBtn.setAttribute('aria-expanded', 'false');

            toggleBtn.addEventListener('click', () => {
                const isCollapsed = body.classList.toggle('collapsed');
                toggleBtn.setAttribute('aria-expanded', String(!isCollapsed));
                const lang = getCurrentLang();
                toggleBtn.textContent = I18N[isCollapsed ? 'post.read-more' : 'post.read-less']?.[lang];
            });

            article.appendChild(body);
            article.appendChild(toggleBtn);
        } else {
            article.appendChild(body);
        }

        /* Media: video */
        if (post.hasVideo && post.videoHtml) {
            const videoWrap = document.createElement('div');
            videoWrap.className = 'media-video';
            videoWrap.innerHTML = post.videoHtml;
            article.appendChild(videoWrap);
        }

        /* Media: audio */
        if (post.hasAudio && post.audioHtml) {
            const audioWrap = document.createElement('div');
            audioWrap.className = 'media-audio';
            audioWrap.innerHTML = post.audioHtml;
            article.appendChild(audioWrap);
        }

        /* Travel note (if separate from body) */
        if (post.note) {
            const noteEl = document.createElement('p');
            noteEl.className = 'travel-note';
            noteEl.textContent = post.note;
            article.appendChild(noteEl);
        }

        /* Tags */
        if (post.tags && post.tags.length > 0) {
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'article-tags';
            post.tags.forEach(tagKey => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'article-tag';
                tagSpan.setAttribute('data-i18n', tagKey);
                tagSpan.textContent = I18N[tagKey]?.[getCurrentLang()] || tagKey;
                tagsDiv.appendChild(tagSpan);
            });
            article.appendChild(tagsDiv);
        }

        container.appendChild(article);
    });

    /* Apply i18n to newly created elements */
    applyLanguage(getCurrentLang());
}

/* Re-render on language change */
document.addEventListener('languageChanged', () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = I18N[key]?.[getCurrentLang()];
        if (text !== undefined) {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                el.textContent = text;
            }
        }
    });
});
