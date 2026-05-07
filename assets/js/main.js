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

function updateCurrentReadingDate() {
    const mdEl = document.getElementById('reading-current-md');
    if (!mdEl) return;

    const now = new Date();
    const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const month = String(beijing.getMonth() + 1).padStart(2, '0');
    const day = String(beijing.getDate()).padStart(2, '0');

    mdEl.textContent = month + '.' + day;
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initI18N();
    initNavbar();
    initPageViews();
    initReadingToggle();
    updateCurrentReadingDate();
});
