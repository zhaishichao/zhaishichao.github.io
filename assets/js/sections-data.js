/* ===== Sections Data =====
 * Add new entries to the arrays below.
 * The render functions auto-compute layout, i18n, and styling.
 *
 * Education fields:
 *   dateStart, dateEnd  - "YYYY.MM" string (dateEnd: null = Present)
 *   schoolNameI18n      - i18n key for school name
 *   schoolUrl           - link URL
 *   degreeI18n          - i18n key for degree
 *   noteI18n            - i18n key for note
 *
 * Honor fields:
 *   icon      - Font Awesome class (e.g. "fa-trophy")
 *   color     - "gold" | "silver" | "blue" (top bar color)
 *   date        - display date prefix string
 *   dateEndI18n - i18n key for date suffix (e.g. "edu.present"), null for plain date
 *   nameI18n    - i18n key for award name
 *   orgI18n     - i18n key for organization
 *   badge       - optional badge text (e.g. "×3"), null to omit
 *
 * Publication fields:
 *   cover        - image path
 *   coverAlt     - alt text
 *   reference    - full citation text (plain string)
 *   firstAuthor  - text to bold-wrap as first author
 *   journal      - text to highlight as journal name
 *   noteI18n     - i18n key for note (e.g. "pub.mile-note"), null to omit
 *   links[]      - { href, icon, i18nKey }
 *
 * Project fields:
 *   logo          - text or image path for logo
 *   logoType      - "text" or "img"
 *   nameI18n      - i18n key for project name
 *   companyI18n   - i18n key for company label (null to omit)
 *   companyValueI18n - i18n key for company name (null to omit)
 *   timeI18n      - i18n key for time label (null to omit)
 *   time          - time range string (plain text)
 *   descLabelI18n - i18n key for description label (null to omit)
 *   descI18n      - i18n key for description text (null to omit)
 *   workLabelI18n - i18n key for work label (null to omit)
 *   workI18n      - i18n key for work details (null to omit)
 */

const educationData = [
  {
    dateStart: '2024.09',
    dateEnd: null,
    schoolNameI18n: 'home.university',
    schoolUrl: 'https://www.suda.edu.cn/',
    degreeI18n: 'edu.ms',
    noteI18n: 'edu.ms.note'
  },
  {
    dateStart: '2020.09',
    dateEnd: '2024.06',
    schoolNameI18n: 'home.university-haut',
    schoolUrl: 'https://www.haut.edu.cn/',
    degreeI18n: 'edu.bs',
    noteI18n: 'edu.bs.note'
  }
];

const honorsData = [
  {
    icon: 'fa-certificate',
    color: 'gold',
    date: '2024 – ',
    dateEndI18n: 'edu.present',
    nameI18n: 'honor.scholarship',
    orgI18n: 'org.suda',
    badge: null
  },
  {
    icon: 'fa-certificate',
    color: 'gold',
    date: '2024',
    nameI18n: 'honor.honors-degree',
    orgI18n: 'org.haut',
    badge: null
  },
  {
    icon: 'fa-graduation-cap',
    color: 'blue',
    date: '2024',
    nameI18n: 'honor.graduate',
    orgI18n: 'org.haut',
    badge: null
  },
  {
    icon: 'fa-trophy',
    color: 'gold',
    date: '2024',
    nameI18n: 'honor.national-first',
    orgI18n: 'org.lanqiao',
    badge: null
  },
  {
    icon: 'fa-medal',
    color: 'silver',
    date: '2023',
    nameI18n: 'honor.provincial-second',
    orgI18n: 'org.lanqiao',
    badge: null
  },
  {
    icon: 'fa-star',
    color: 'blue',
    date: '2021 – 2024',
    nameI18n: 'honor.merit-student',
    orgI18n: 'org.haut',
    badge: '×3'
  },
  {
    icon: 'fa-star',
    color: 'blue',
    date: '2021 – 2024',
    nameI18n: 'honor.cadre',
    orgI18n: 'org.haut',
    badge: '×3'
  },
  {
    icon: 'fa-award',
    color: 'blue',
    date: '2023',
    nameI18n: 'honor.league-cadre',
    orgI18n: 'org.haut',
    badge: '×1'
  }
];

const publicationsData = [
  {
    cover: 'imgs/publication/The overall framework of MILE.png',
    coverAlt: 'MILE Framework',
    reference: 'S. Zhai, R. Jiao, B. Xue, Y. Nojima and M. Zhang, "MILE: Multi-Expert Ensemble with Instance Selection for Multi-Class Imbalanced Learning," in IEEE Transactions on Evolutionary Computation, 2026, DOI: 10.1109/TEVC.2026.3682346',
    firstAuthor: 'S. Zhai',
    journal: 'IEEE Transactions on Evolutionary Computation',
    noteI18n: 'pub.mile-note',
    links: [
      { href: 'https://ieeexplore.ieee.org/document/11478499', icon: 'fa-file-pdf', i18nKey: 'pub.paper' },
      { href: 'https://github.com/FEATlab/MILE', icon: 'fa-code', i18nKey: 'pub.code' }
    ]
  }
];

const projectsData = [
  {
    logo: 'iFLY',
    logoType: 'text',
    nameI18n: 'proj.iflytek.name',
    companyI18n: 'proj.company',
    companyValueI18n: 'proj.iflytek.company',
    timeI18n: 'proj.time',
    time: '2024.04 – 2024.09',
    descLabelI18n: 'proj.desc-label',
    descI18n: 'proj.iflytek.desc',
    workLabelI18n: 'proj.work',
    workI18n: 'proj.iflytek.work'
  }
];
