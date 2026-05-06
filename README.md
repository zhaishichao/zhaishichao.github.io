# Academic Homepage

Personal academic homepage for Shichao Zhai (翟士超), graduate student in Artificial Intelligence at Soochow University.

## Structure

```
/
├── index.html              # Main academic homepage (single-page with anchor navigation)
├── assets/
│   ├── css/                # 13 CSS files (variables, base, layout, components, responsive)
│   └── js/                 # 5 JS files (i18n, theme, navbar, pageviews, main)
├── imgs/                   # Images (profile photo, logos, publication covers)
├── blog/
│   ├── index.html          # Blog landing page
│   ├── reading.html        # 读万卷书 - Reading notes
│   ├── travel.html         # 行万里路 - Travel diaries
│   ├── daily.html          # 日常 - Daily life
│   ├── assets/css/         # Blog-specific styles
│   ├── imgs/               # Blog images
│   └── videos/             # Travel videos/audio
└── README.md
```

## Features

- **Sections**: Home, Education, Honors, Publications, Projects, Reading
- **Internationalization**: English / Chinese toggle, persisted via localStorage
- **Dark/Light mode**: Moon icon toggle with smooth transitions
- **Responsive navbar**: Auto-collapses items into "More" dropdown, hamburger menu on mobile
- **Google Scholar link**: Styled with Google's brand colors
- **Education timeline**: Vertical alternating layout
- **Honors**: Card grid with tier-based color accents (gold/silver/blue)
- **Blog**: Three-section blog with reading notes, travel diaries (image/video/audio support), and daily musings
- **Page view counter**: Via countapi.xyz with localStorage fallback
- **No frameworks, no build tools** — pure HTML/CSS/JS

## Usage

1. Open `index.html` in a browser, or serve with any static file server:
   ```bash
   python -m http.server 8000
   ```
2. Navigate to `http://localhost:8000`
3. Click "Blog" button to visit the blog section

## Customization

- **Profile photo**: Replace `imgs/profile.jpg`
- **Colors**: Edit CSS custom properties in `assets/css/variables.css`
- **Content**: Edit text and links in `index.html`
- **Translations**: Add/edit entries in `assets/js/i18n.js`
- **Blog images/videos**: Place files in `blog/imgs/` and `blog/videos/`

## Credits

Built with Inter & Source Serif 4 fonts (Google Fonts), Font Awesome 6 icons.
Design inspired by the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template.
