/* ===== Internationalization (EN / CN) ===== */
const I18N = {
    /* Navigation */
    'nav.home':              { en: 'Home',              cn: '首页' },
    'nav.education':         { en: 'Education',         cn: '教育经历' },
    'nav.honors':            { en: 'Honors',            cn: '荣誉奖励' },
    'nav.publications':      { en: 'Publications',      cn: '发表论文' },
    'nav.projects':          { en: 'Projects',          cn: '项目经历' },
    'nav.reading':           { en: 'Reading',           cn: '阅读' },
    'nav.more':              { en: 'More',              cn: '更多' },

    /* Home */
    'home.greeting':         { en: "Hi, I'm",           cn: '你好，我是' },
    'home.role':             { en: 'M.S. in Artificial Intelligence', cn: '人工智能硕士' },
    'home.university':       { en: 'Soochow University', cn: '苏州大学' },
    'home.university-haut':  { en: 'Henan University of Technology', cn: '河南工业大学' },
    'home.location-label':   { en: 'Location:',         cn: '现居地：' },
    'home.location-value':   { en: 'Suzhou, Jiangsu, China', cn: '中国 江苏 苏州' },
    'home.email-label':      { en: 'Email:',            cn: '邮箱：' },
    'home.department-label': { en: 'Department:',       cn: '院部：' },
    'home.department-value': { en: 'School of Future Science and Engineering', cn: '未来科学与工程学院' },
    'home.advisor':          { en: 'Advisor:',          cn: '导师：' },
    'home.advisor-name':     { en: 'Prof. Ruwang Jiao', cn: '焦儒旺教授' },
    'home.research':         { en: 'Research Interests', cn: '研究方向' },
    'home.location':         { en: 'Suzhou, Jiangsu, China', cn: '中国 江苏 苏州' },
    'home.contact':          { en: 'Contact',           cn: '联系方式' },
    'home.views':            { en: 'visits',            cn: '次访问' },

    /* Research interests */
    'research.evolutionary':  { en: 'Evolutionary Computation', cn: '进化计算' },
    'research.mo':            { en: 'Multi-objective Optimization', cn: '多目标优化' },
    'research.imbalanced':    { en: 'Imbalanced Learning', cn: '不平衡学习' },

    /* Section titles */
    'section.education':     { en: 'Education',         cn: '教育经历' },
    'section.honors':        { en: 'Honors & Awards',   cn: '荣誉奖励' },
    'section.publications':  { en: 'Publications',      cn: '发表论文' },
    'section.projects':      { en: 'Projects & Internships', cn: '项目与实习' },
    'section.reading':       { en: 'Reading',           cn: '阅读' },

    /* Education */
    'edu.ms':                { en: 'M.S. in Artificial Intelligence', cn: '人工智能硕士' },
    'edu.bs':                { en: 'B.E. in Software Engineering', cn: '软件工程学士' },
    'edu.ms.note':           { en: 'Recommended for Graduate Admission', cn: '推免研究生' },
    'edu.bs.note':           { en: 'Honors Bachelor\'s Degree (Top 3%)', cn: '荣誉学士学位（前3%）' },
    'edu.present':           { en: 'Present',           cn: '至今' },

    /* Honors */
    'honor.national-first': {
        en: 'National First Prize, 14th Lanqiao Cup Software Testing Competition',
        cn: '十四届蓝桥杯软件测试大赛国赛一等奖'
    },
    'honor.provincial-second': {
        en: 'Provincial Second Prize, 13th Lanqiao Cup C/C++ Programming Competition',
        cn: '十三届蓝桥杯C/C++程序设计大赛省赛二等奖'
    },
    'honor.merit-student': {
        en: 'Merit Student',
        cn: '三好学生'
    },
    'honor.cadre': {
        en: 'Outstanding Student Leader',
        cn: '优秀学生干部'
    },
    'honor.league-cadre': {
        en: 'Outstanding Communist Youth League Cadre',
        cn: '优秀共青团干部'
    },
    'honor.graduate': {
        en: 'Outstanding Graduate',
        cn: '优秀本科毕业生'
    },
    'honor.honors-degree': {
        en: 'Honors Bachelor\'s Degree (Top 3%)',
        cn: '荣誉学士学位（前3%）'
    },
    'honor.scholarship': {
        en: 'First-Class Graduate Scholarship (Top 5%)',
        cn: '研究生一等学业奖学金（前5%）'
    },
    'honor.times': {
        en: '{n} times',
        cn: '{n}次'
    },

    /* Organizations */
    'org.lanqiao':           { en: 'Lanqiao Cup Organizing Committee', cn: '蓝桥杯大赛组委会' },
    'org.haut':              { en: 'Henan University of Technology', cn: '河南工业大学' },
    'org.suda':              { en: 'Soochow University', cn: '苏州大学' },

    /* Publications */
    'pub.paper':             { en: 'Paper',             cn: '论文' },
    'pub.code':              { en: 'Code',              cn: '代码' },
    'pub.coming':            { en: 'Coming soon...',    cn: '敬请期待...' },
    'pub.mile-note':         { en: '(CAS Q1, Top Journal in Field, First Author)', cn: '（中科院一区Top，领域顶刊，第一作者）' },

    /* Projects */
    'proj.role':             { en: 'Role: ',            cn: '担任角色：' },
    'proj.time':             { en: 'Duration: ',        cn: '时间：' },

    /* Footer */
    'footer.name':           { en: 'Shichao Zhai',    cn: '翟士超' },
    'footer.motto':          { en: 'Stay hungry, stay foolish. — Steve Jobs', cn: '求知若饥，虚心若愚。 — 史蒂夫·乔布斯' },
    'footer.copyright':      { en: 'All rights reserved.', cn: '版权所有。' },
    'footer.powered':        { en: 'Built with dedication. Last updated: 2026.', cn: '用心构建。最近更新：2026年。' },

    /* Blog (shared key used in main navbar) */
    'blog.title':            { en: 'Personal Blog',     cn: '个人博客' },

    /* Reading */
    'reading.current':       { en: 'Now Reading',       cn: '阅读中' },

    /* Expand/collapse (shared between main & blog) */
    'post.read-more':        { en: 'Read More',          cn: '展开阅读' },
    'post.read-less':        { en: 'Show Less',          cn: '收起' },

    /* Theme */
    'theme.light':           { en: 'Light',             cn: '浅色' },
    'theme.dark':            { en: 'Dark',              cn: '深色' },
};

function applyLanguage(lang) {
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = I18N[key]?.[lang];
        if (text !== undefined) {
            const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
            if (textNode) {
                textNode.textContent = text;
            } else if (el.childNodes.length === 0) {
                el.textContent = text;
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = I18N[key]?.[lang];
        if (text !== undefined) el.placeholder = text;
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const text = I18N[key]?.[lang];
        if (text !== undefined) el.title = text;
    });

    /* Update language toggle button text */
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'cn' ? 'EN' : 'CN';

    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

function initI18N() {
    applyLanguage(getCurrentLang());
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = getCurrentLang() === 'cn' ? 'en' : 'cn';
            applyLanguage(newLang);
        });
    }
}
