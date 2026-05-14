# 学术个人主页

**翟士超（Shichao Zhai）** 的个人学术主页，苏州大学人工智能专业硕士研究生。

[English Version](README.md)

## 项目结构

```
/
├── index.html                    # 学术主页
├── assets/
│   ├── css/
│   │   ├── main.css              # CSS 入口文件（@import 所有其他样式）
│   │   ├── variables.css         # CSS 自定义属性（颜色、间距、阴影等）
│   │   ├── base.css              # 基础重置、排版、回到顶部按钮样式
│   │   ├── layout.css            # 容器、区块间距
│   │   ├── navbar.css            # 顶部导航栏 + 移动端菜单
│   │   ├── hero.css              # 首页 / 个人信息区域
│   │   ├── timeline.css          # 教育经历时间线（垂直交替布局）
│   │   ├── cards.css             # 荣誉奖励卡片网格（金/银/蓝三色）
│   │   ├── publications.css      # 论文列表
│   │   ├── projects.css          # 项目与实习经历列表
│   │   ├── reading.css           # 阅读时间线（左右交替布局）
│   │   ├── buttons.css           # 按钮变体、图标链接
│   │   ├── footer.css            # 页脚样式
│   │   └── responsive.css        # 响应式断点
│   └── js/
│       ├── i18n.js               # 国际化（中/英文）— 共享翻译键 + applyLanguage()
│       ├── theme.js              # 浅色/深色模式切换（localStorage 持久化）
│       ├── navbar.js             # 响应式导航栏、"更多"下拉菜单、汉堡菜单
│       ├── scroll-to-top.js      # 回到顶部按钮（IIFE，rAF 节流）
│       ├── sections-data.js      # 数据数组：教育、荣誉、论文、项目
│       ├── sections-render.js    # 渲染函数：教育、荣誉、论文、项目
│       ├── reading-data.js       # 数据数组：21 本书（含封面、书名、作者、日期）
│       ├── reading-render.js     # 渲染阅读时间线 + 展开/收起 + 阅读中标记
│       └── main.js               # 入口：初始化所有模块，window.load 时预加载博客资源
├── imgs/
│   ├── profile.jpg               # 个人照片
│   ├── cover/                    # 21 本书籍封面图片
│   └── publication/              # 论文配图
├── blog/
│   ├── index.html                # 博客首页（标签页：阅读 / 旅行 / 日常）
│   ├── reading.html              # 读万卷书 — 阅读笔记
│   ├── travel.html               # 行万里路 — 旅行游记
│   ├── daily.html                # 日常 — 生活随笔
│   └── assets/
│       ├── css/
│       │   ├── blog-base.css     # 博客通用样式
│       │   └── blog-section.css  # 博客分区样式 + 展开/收起过渡效果
│       └── js/
│           ├── i18n-blog.js      # 博客专用国际化翻译键（合并至共享 I18N 对象）
│           ├── posts.js          # 三栏目的文章数据（Markdown 字符串格式）
│           └── blog-render.js    # Markdown → HTML 渲染（marked.js）+ 展开/收起
├── README.md
└── README-zh.md
```

## 功能特性

- **页面板块**：首页、教育经历、荣誉奖励、发表论文、项目与实习、阅读
- **国际化**：中/英文切换，通过 `localStorage` 持久化语言偏好
- **深色/浅色模式**：主题切换按钮，CSS 平滑过渡动画
- **响应式导航栏**：自动折叠多余链接至"更多"下拉菜单，移动端使用汉堡菜单
- **数据驱动渲染**：所有板块由 JS 数据数组动态渲染——添加内容无需修改 HTML
- **Markdown 博客**：博文使用 Markdown 格式编写，通过 [marked.js](https://github.com/markedjs/marked) 渲染；长文章支持展开/收起
- **博客预加载**：主页通过 `<link rel="prefetch">` 后台预加载博客资源
- **阅读时间线**：21 本书籍，带封面图片，支持展开/收起（默认展示前 3 本），"阅读中"标记
- **访问量统计**：基于 [不蒜子 (Busuanzi)](http://busuanzi.ibruce.info/) — 零配置即可使用
- **回到顶部按钮**：页面滚动后显示，平滑滚动至顶部，国际化 aria-label
- **零框架、零构建工具** — 纯 HTML/CSS/JS

## 使用方法

1. 直接在浏览器中打开 `index.html`，或使用任意静态文件服务器：
   ```bash
   python -m http.server 8000
   ```
2. 访问 `http://localhost:8000`
3. 点击导航栏的 **Blog** 按钮进入博客页面
4. 点击 **EN/CN** 切换语言，点击 **🌙/☀️** 切换主题

## 自定义修改

### 添加内容

- **教育/荣誉/论文/项目经历**：编辑 `assets/js/sections-data.js` 中的数据数组，在 `assets/js/i18n.js` 中添加对应的翻译键
- **阅读书单**：在 `assets/js/reading-data.js` 的 `readingTimelineData` 数组中添加条目，将封面图片放入 `imgs/cover/`
- **博客文章**：在 `blog/assets/js/posts.js` 对应栏目的数组中添加 Markdown 字符串
- **翻译文本**：在 `assets/js/i18n.js`（共享）或 `blog/assets/js/i18n-blog.js`（博客专用）中添加/编辑翻译键

### 修改样式

- **颜色与间距**：编辑 `assets/css/variables.css` 中的 CSS 自定义属性
- **个人照片**：替换 `imgs/profile.jpg`

## 致谢

使用 Inter、Source Serif 4 及 JetBrains Mono 字体（Google Fonts），Font Awesome 6 图标库。
访问量统计由 [不蒜子 (Busuanzi)](http://busuanzi.ibruce.info/) 提供。
博客 Markdown 渲染由 [marked.js](https://github.com/markedjs/marked) 提供。
