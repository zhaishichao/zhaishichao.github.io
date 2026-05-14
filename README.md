# Academic Homepage

Personal academic homepage for **Shichao Zhai (翟士超)**, graduate student in Artificial Intelligence at Soochow University.

[中文版本](README-zh.md)

## Structure

```
/
├── index.html                    # Main academic homepage
├── assets/
│   ├── css/
│   │   ├── main.css              # CSS entry point (@import all others)
│   │   ├── variables.css         # CSS custom properties (colors, spacing, shadows)
│   │   ├── base.css              # Reset, typography, scroll-to-top button
│   │   ├── layout.css            # Container, section spacing
│   │   ├── navbar.css            # Top navigation bar + mobile menu
│   │   ├── hero.css              # Home / hero section
│   │   ├── timeline.css          # Education timeline (vertical alternating)
│   │   ├── cards.css             # Honors card grid (gold/silver/blue)
│   │   ├── publications.css      # Publication list items
│   │   ├── projects.css          # Project & internship list items
│   │   ├── reading.css           # Reading timeline (left-right alternating)
│   │   ├── buttons.css           # Button variants, icon links
│   │   ├── footer.css            # Site footer
│   │   └── responsive.css        # Responsive breakpoints
│   └── js/
│       ├── i18n.js               # Internationalization (EN/CN) — shared keys + applyLanguage()
│       ├── theme.js              # Light/dark mode toggle (localStorage persisted)
│       ├── navbar.js             # Responsive navbar, "More" dropdown, hamburger menu
│       ├── scroll-to-top.js      # Back-to-top button (IIFE, rAF throttled)
│       ├── sections-data.js      # Data arrays: education, honors, publications, projects
│       ├── sections-render.js    # Render functions for education, honors, publications, projects
│       ├── reading-data.js       # Data array: 21 books with cover, title, author, date
│       ├── reading-render.js     # Render reading timeline + expand/collapse + current-reading
│       └── main.js               # Entry point: init all modules, blog prefetch on window.load
├── imgs/
│   ├── profile.jpg               # Profile photo
│   ├── cover/                    # 21 book cover images
│   └── publication/              # Publication cover images
├── blog/
│   ├── index.html                # Blog landing page (tabs: Reading / Travel / Daily)
│   ├── reading.html              # 读万卷书 — reading notes
│   ├── travel.html               # 行万里路 — travel diaries
│   ├── daily.html                # 日常 — daily musings
│   └── assets/
│       ├── css/
│       │   ├── blog-base.css     # Blog shared styles
│       │   └── blog-section.css  # Blog section styles + expand/collapse
│       └── js/
│           ├── i18n-blog.js      # Blog-specific i18n keys (merged into shared I18N)
│           ├── posts.js          # Post data arrays (markdown strings) for all 3 sections
│           └── blog-render.js    # Markdown → HTML rendering (marked.js) + expand/collapse
├── README.md
└── README-zh.md
```

## Features

- **Sections**: Home, Education, Honors, Publications, Projects & Internships, Reading
- **Internationalization**: English / Chinese toggle, persisted via `localStorage`
- **Dark / Light mode**: Theme toggle with smooth CSS transitions
- **Responsive navbar**: Auto-collapses nav links into "More" dropdown, hamburger menu on mobile
- **Data-driven rendering**: All sections rendered from JS data arrays — add entries without touching HTML
- **Blog with Markdown**: Blog posts authored in Markdown strings, rendered via [marked.js](https://github.com/markedjs/marked); expand/collapse for long posts
- **Blog preloading**: `<link rel="prefetch">` on main page loads blog resources in background
- **Reading timeline**: 21 books with covers, expand/collapse (first 3 visible), "Now Reading" badge
- **Page view counter**: Via [Busuanzi (不蒜子)](http://busuanzi.ibruce.info/) — no configuration needed
- **Scroll-to-top button**: Appears on scroll, smooth scroll to top, i18n aria-label
- **No frameworks, no build tools** — pure HTML/CSS/JS

## Usage

1. Open `index.html` in a browser, or serve with any static file server:
   ```bash
   python -m http.server 8000
   ```
2. Navigate to `http://localhost:8000`
3. Click the **Blog** button in the navbar to visit the blog section
4. Click **EN/CN** to toggle language, click **🌙/☀️** to toggle theme

## Customization

### Adding content

- **Education / Honors / Publications / Projects**: Edit data arrays in `assets/js/sections-data.js`, add i18n keys in `assets/js/i18n.js`
- **Reading books**: Add entries to `readingTimelineData` in `assets/js/reading-data.js`, place cover image in `imgs/cover/`
- **Blog posts**: Add markdown strings to the appropriate array in `blog/assets/js/posts.js`
- **Translations**: Add/edit keys in `assets/js/i18n.js` (shared) or `blog/assets/js/i18n-blog.js` (blog-specific)

### Styling

- **Colors & spacing**: Edit CSS custom properties in `assets/css/variables.css`
- **Profile photo**: Replace `imgs/profile.jpg`

## Credits

Built with Inter, Source Serif 4 & JetBrains Mono fonts (Google Fonts), Font Awesome 6 icons.
Page views powered by [Busuanzi (不蒜子)](http://busuanzi.ibruce.info/).
Blog Markdown rendering via [marked.js](https://github.com/markedjs/marked).
