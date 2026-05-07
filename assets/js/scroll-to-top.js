/* ===== Scroll-to-top Button ===== */
(function () {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';

    function updateLabel() {
        btn.setAttribute('aria-label', I18N['scroll.top']?.[getCurrentLang()] || 'Back to top');
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(btn);
        updateLabel();

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        /* Throttled scroll handler */
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    btn.classList.toggle('visible', window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        });
    });

    document.addEventListener('languageChanged', updateLabel);
})();
