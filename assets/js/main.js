/* ===== Main Entry Point ===== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initI18N();
    initNavbar();
});

/* Blog prefetch — run after main page fully loads */
window.addEventListener('load', () => {
    const prefetch = (url, as) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        if (as) link.setAttribute('as', as);
        document.head.appendChild(link);
    };

    /* Blog sub-pages */
    prefetch('blog/reading.html', 'document');
    prefetch('blog/travel.html', 'document');
    prefetch('blog/daily.html', 'document');

    /* marked.js CDN (used by blog for markdown rendering) */
    prefetch('https://cdn.jsdelivr.net/npm/marked/marked.min.js', 'script');
});
