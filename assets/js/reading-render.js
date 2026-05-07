/* ===== Reading Timeline Renderer ===== */
const VISIBLE_COUNT = 3;

function updateCurrentReadingDate() {
    const mdEl = document.getElementById('reading-current-md');
    if (!mdEl) return;
    const now = new Date();
    const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const month = String(beijing.getMonth() + 1).padStart(2, '0');
    const day = String(beijing.getDate()).padStart(2, '0');
    mdEl.textContent = month + '.' + day;
}

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
                if (i >= VISIBLE_COUNT) e.classList.add('collapsed');
            });
        }
        updateBtnText();
    });

    document.addEventListener('languageChanged', updateBtnText);
}

function renderReadingTimeline() {
    const container = document.getElementById('reading-timeline');
    if (!container) return;

    /* Sort by date descending. currentlyReading always goes to top. */
    const sorted = [...readingPosts].sort((a, b) => {
        if (a.currentlyReading) return -1;
        if (b.currentlyReading) return 1;
        return b.date.localeCompare(a.date);
    });

    /* Determine which entries show year label:
       last (earliest) entry of each year gets the label. */
    const yearLastIndex = {};
    sorted.forEach((post, i) => {
        if (!post.currentlyReading && post.date) {
            yearLastIndex[post.date.substring(0, 4)] = i;
        }
    });
    const showYear = new Set(Object.values(yearLastIndex));

    let html = '<div class="reading-path"></div>';

    sorted.forEach((post, i) => {
        const side = i % 2 === 0 ? 'left' : 'right';
        const collapsed = i >= VISIBLE_COUNT ? ' collapsed' : '';
        const nodeId = post.currentlyReading ? ' id="reading-current-node"' : '';
        const yearSpan = showYear.has(i)
            ? `<span class="reading-year">${post.date.substring(0, 4)}</span>`
            : '';

        const mdDate = post.currentlyReading
            ? '<span class="reading-md" id="reading-current-md">--.--</span>'
            : `<span class="reading-md">${post.date.substring(5).replace('-', '.')}</span>`;

        const badge = post.currentlyReading
            ? '<span class="reading-badge" data-i18n="reading.current">Currently Reading</span>'
            : '';

        html += `
        <div class="reading-entry ${side}${collapsed}">
            <div class="reading-node"${nodeId}>
                ${yearSpan}
                ${mdDate}
            </div>
            <div class="reading-card">
                <div class="reading-cover">
                    <img src="${post.cover}" alt="${post.title}">
                </div>
                <div class="reading-meta">
                    ${badge}
                    <h4 class="reading-title">${post.title}</h4>
                    <p class="reading-author">${post.author}</p>
                </div>
            </div>
        </div>`;
    });

    html += `
        <div class="reading-toggle-wrap">
            <button class="reading-toggle-btn" id="reading-toggle" data-i18n="post.read-more">Read More</button>
        </div>`;

    container.innerHTML = html;

    /* Apply i18n to rendered elements */
    applyLanguage(getCurrentLang());
    initReadingToggle();
    updateCurrentReadingDate();
}

document.addEventListener('DOMContentLoaded', renderReadingTimeline);
