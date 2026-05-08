/* ===== Sections Renderer ===== */

/* ---------- Education ---------- */
function renderEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    let html = '';
    educationData.forEach(entry => {
        const dateEndHtml = entry.dateEnd
            ? entry.dateEnd
            : `<span data-i18n="edu.present">Present</span>`;
        const dateStr = entry.dateStart + ' – ' + dateEndHtml;

        html += `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${dateStr}</span>
                <h3 class="timeline-school">
                    <a href="${entry.schoolUrl}" target="_blank" rel="noopener"><span data-i18n="${entry.schoolNameI18n}"></span></a>
                </h3>
                <p class="timeline-degree" data-i18n="${entry.degreeI18n}"></p>
                <p class="timeline-note" data-i18n="${entry.noteI18n}"></p>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

/* ---------- Honors ---------- */
function renderHonors() {
    const container = document.getElementById('honors-grid');
    if (!container) return;

    let html = '';
    honorsData.forEach(entry => {
        const badgeHtml = entry.badge
            ? `<span class="honor-badge">${entry.badge}</span>`
            : '';
        const dateEndHtml = entry.dateEndI18n
            ? `<span data-i18n="${entry.dateEndI18n}"></span>`
            : '';
        const dateHtml = entry.date + dateEndHtml;

        html += `
        <div class="honor-card ${entry.color}">
            ${badgeHtml}
            <div class="honor-icon"><i class="fas ${entry.icon}"></i></div>
            <div class="honor-date">${dateHtml}</div>
            <h4 class="honor-name" data-i18n="${entry.nameI18n}"></h4>
            <p class="honor-org" data-i18n="${entry.orgI18n}"></p>
        </div>`;
    });

    container.innerHTML = html;
}

/* ---------- Publications ---------- */
function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    let html = '';
    publicationsData.forEach(pub => {
        /* Build reference text with highlighted first-author and journal */
        let refHtml = pub.reference;
        if (pub.firstAuthor) {
            refHtml = refHtml.replace(
                pub.firstAuthor,
                '<span class="pub-first-author">' + pub.firstAuthor + '</span>'
            );
        }
        if (pub.journal) {
            refHtml = refHtml.replace(
                pub.journal,
                '<span class="pub-journal">' + pub.journal + '</span>'
            );
        }

        const noteHtml = pub.noteI18n
            ? `&nbsp;<span class="pub-note" data-i18n="${pub.noteI18n}"></span>`
            : '';

        let linksHtml = '';
        if (pub.links && pub.links.length > 0) {
            linksHtml = '<div class="pub-links">';
            pub.links.forEach(link => {
                linksHtml += `
                <a href="${link.href}" target="_blank" rel="noopener" class="btn-outline">
                    <i class="fas ${link.icon}"></i> <span data-i18n="${link.i18nKey}"></span>
                </a>`;
            });
            linksHtml += '</div>';
        }

        html += `
        <div class="pub-item">
            <div class="pub-cover">
                <img src="${pub.cover}" alt="${pub.coverAlt}">
            </div>
            <div class="pub-info">
                <p class="pub-paper">${refHtml}${noteHtml}</p>
                ${linksHtml}
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

/* ---------- Projects ---------- */
function renderProjects() {
    const container = document.getElementById('project-list');
    if (!container) return;

    let html = '';
    projectsData.forEach(proj => {
        const logoHtml = proj.logoType === 'img'
            ? `<img src="${proj.logo}" alt="" class="project-logo">`
            : `<div class="project-logo-text">${proj.logo}</div>`;

        const companyHtml = proj.companyI18n
            ? `<p class="project-company"><strong><span data-i18n="${proj.companyI18n}"></span><span data-i18n="${proj.companyValueI18n}"></span></strong></p>`
            : '';

        const timeLabel = proj.timeI18n
            ? `<span data-i18n="${proj.timeI18n}"></span>`
            : '';

        const descHtml = proj.descI18n
            ? `<p class="project-desc"><span data-i18n="${proj.descLabelI18n}"></span><span data-i18n="${proj.descI18n}"></span></p>`
            : '';

        const workHtml = proj.workI18n
            ? `<p class="project-work"><span data-i18n="${proj.workLabelI18n}"></span><span data-i18n="${proj.workI18n}"></span></p>`
            : '';

        html += `
        <div class="project-item">
            ${logoHtml}
            <div class="project-info">
                <h3 class="project-name" data-i18n="${proj.nameI18n}"></h3>
                ${companyHtml}
                <p class="project-time">${timeLabel}${proj.time}</p>
                ${descHtml}
                ${workHtml}
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

/* ---------- Init ---------- */
function renderAllSections() {
    renderEducation();
    renderHonors();
    renderPublications();
    renderProjects();
}

document.addEventListener('DOMContentLoaded', renderAllSections);
