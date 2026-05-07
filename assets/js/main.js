/* ===== Main Entry Point ===== */
function initReadingToggle() {
    const btn = document.getElementById('reading-toggle');
    if (!btn) return;

    function updateBtnText() {
        const anyCollapsed = document.querySelector('.reading-entry.collapsed');
        const lang = getCurrentLang();
        btn.textContent = I18N[anyCollapsed ? 'post.read-more' : 'post.read-less']?.[lang];
    }

    btn.addEventListener('click', () => {
        const anyCollapsed = document.querySelector('.reading-entry.collapsed');
        const allEntries = document.querySelectorAll('.reading-entry');
        if (anyCollapsed) {
            allEntries.forEach(e => e.classList.remove('collapsed'));
        } else {
            allEntries.forEach((e, i) => {
                if (i >= 3) e.classList.add('collapsed');
            });
        }
        updateBtnText();
    });

    document.addEventListener('languageChanged', updateBtnText);
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initI18N();
    initNavbar();
    initPageViews();
    initReadingToggle();
});
