/* ===== Reading Timeline Data =====
 * Add new books at the TOP of the array (newest first).
 * The render function auto-computes:
 *   - left/right alternating layout
 *   - collapsed state (beyond first 3)
 *   - year label (earliest book per year)
 *   - currently reading badge + dynamic date
 *
 * Fields:
 *   title            - Book title (plain text)
 *   author           - Author name (plain text)
 *   cover            - Cover image path
 *   date             - "YYYY-MM-DD" (null for currently reading)
 *   currentlyReading - true for the book you're reading now
 */
const readingPosts = [
  {
    title: '小镇喧嚣',
    author: '吴毅',
    cover: 'imgs/cover/xzxx.jpg',
    date: null,
    currentlyReading: true
  },
  {
    title: '基层中国的运行逻辑',
    author: '聂辉华',
    cover: 'imgs/cover/jczgdyxlj.png',
    date: '2026-04-22'
  },
  {
    title: '乡土中国',
    author: '费孝通',
    cover: 'imgs/cover/xtzg.jpg',
    date: '2026-03-12'
  },
  {
    title: '置身事内',
    author: '兰小欢',
    cover: 'imgs/cover/zssn.jpg',
    date: '2026-01-21'
  },
  {
    title: '叫魂',
    author: '孔飞力 / 陈兼, 刘昶 译',
    cover: 'imgs/cover/jh.jpg',
    date: '2026-01-05'
  },
  {
    title: '被讨厌的勇气',
    author: '岸见一郎, 古贺史健 / 渠海霞 译',
    cover: 'imgs/cover/btydyq.jpg',
    date: '2025-12-18'
  },
  {
    title: '雪国',
    author: '川端康成 / 叶渭渠, 唐月梅 译',
    cover: 'imgs/cover/xg.jpg',
    date: '2025-09-22'
  },
  {
    title: '中国历代政治得失',
    author: '钱穆',
    cover: 'imgs/cover/zgldzzds.jpg',
    date: '2025-08-15'
  },
  {
    title: '悉达多',
    author: '赫尔曼·黑塞 / 姜乙 译',
    cover: 'imgs/cover/xdd.jpg',
    date: '2025-08-05'
  },
  {
    title: '围城',
    author: '钱锺书',
    cover: 'imgs/cover/wc.jpg',
    date: '2025-06-14'
  },
  {
    title: '暮日耀光',
    author: '韦庆远',
    cover: 'imgs/cover/mryg.jpg',
    date: '2025-05-20'
  },
  {
    title: '三体',
    author: '刘慈欣',
    cover: 'imgs/cover/st.jpg',
    date: '2025-04-20'
  },
  {
    title: '沧浪之水',
    author: '阎真',
    cover: 'imgs/cover/clzs.jpg',
    date: '2024-11-18'
  },
  {
    title: '我与地坛',
    author: '史铁生',
    cover: 'imgs/cover/wydt.jpg',
    date: '2023-12-08'
  },
  {
    title: '牧羊少年奇幻之旅',
    author: '保罗·柯艾略 / 丁文林 译',
    cover: 'imgs/cover/mysnqhzl.jpg',
    date: '2023-09-15'
  },
  {
    title: '平凡的世界',
    author: '路遥',
    cover: 'imgs/cover/pfdsj.jpg',
    date: '2023-07-20'
  },
  {
    title: '人生',
    author: '路遥',
    cover: 'imgs/cover/rs.jpg',
    date: '2023-05-10'
  },
  {
    title: '霍乱时期的爱情',
    author: '加西亚·马尔克斯 / 杨玲 译',
    cover: 'imgs/cover/hlsqdaq.jpg',
    date: '2023-03-14'
  },
  {
    title: '解忧杂货店',
    author: '东野圭吾 / 李盈春 译',
    cover: 'imgs/cover/jyzhd.jpg',
    date: '2022-10-30'
  },
  {
    title: '追风筝的人',
    author: '卡勒德·胡赛尼 / 李继宏 译',
    cover: 'imgs/cover/zfzdr.jpg',
    date: '2022-07-12'
  },
  {
    title: '上帝掷骰子吗',
    author: '曹天元',
    cover: 'imgs/cover/sdztzm.jpg',
    date: '2022-03-25'
  }
];
