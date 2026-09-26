/* ============================================================
 * data.js —— 全站模拟数据（纯前端，无后端）
 * 包含：个人信息 / 技能 / 项目经历 / 博客文章 / 作品商品
 * ============================================================ */

/* 图片生成助手：统一走文生图接口，避免使用占位图 */
function imgUrl(prompt, size) {
  size = size || 'landscape_16_9';
  return 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
    encodeURIComponent(prompt) + '&image_size=' + size;
}

/* ---------- 个人信息 ---------- */
var PROFILE = {
  name: '林泽',
  avatarText: '林',
  job: '前端开发工程师',
  email: 'linze.dev@example.com',
  phone: '138-021-6688',
  location: '中国 · 上海',
  github: 'https://github.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: '掘金', url: 'https://juejin.cn' },
    { name: '知乎', url: 'https://www.zhihu.com' },
    { name: '微博', url: 'https://weibo.com' }
  ],
  intro: [
    '你好，我是林泽，一名拥有 3 年经验的前端开发工程师。专注于 Web 界面开发与用户交互优化，热衷于用 HTML5、CSS3 与 JavaScript 把设计稿变成流畅、可触摸的页面。',
    '平时喜欢沉淀学习笔记、造一些小工具与 UI 组件，也会把设计作品整理到作品商城中分享。相信「好的界面是写出来的，更是打磨出来的」。'
  ],
  education: [
    { title: '华东师范大学 · 软件工程（本科）', time: '2019.09 - 2023.06', desc: '主修数据结构、Web 开发、人机交互等课程，获校级优秀毕业生。' },
    { title: '前端工程师 · 某互联网公司', time: '2023.07 - 至今', desc: '负责企业中后台、营销活动页与组件库建设，主导多个响应式项目落地。' }
  ]
};

/* ---------- 技能数据（按类别分组，percent 供进度条使用） ---------- */
var SKILLS = [
  {
    group: '前端基础',
    items: [
      { name: 'HTML5 语义化', percent: 90, desc: '熟练使用 header / nav / main / article 等语义化标签搭建结构' },
      { name: 'CSS3 / Flex 布局', percent: 88, desc: '精通 Flex 弹性布局、媒体查询与常见 CSS3 动效' },
      { name: 'JavaScript (ES6+)', percent: 85, desc: '熟悉 ES6+ 语法、DOM/BOM、事件循环与常用设计模式' }
    ]
  },
  {
    group: '框架与工具',
    items: [
      { name: 'jQuery', percent: 88, desc: '熟练使用 jQuery 完成事件绑定、动画、表单校验与动态渲染' },
      { name: 'Vue.js', percent: 75, desc: '了解 Vue 组件化、指令、响应式原理，能独立开发中型项目' },
      { name: 'Git / Webpack', percent: 70, desc: '掌握 Git 协作流程，能使用 Webpack 进行基础构建配置' }
    ]
  },
  {
    group: '设计相关',
    items: [
      { name: 'Figma / Photoshop', percent: 72, desc: '能独立完成界面切图、标注与简单视觉设计' },
      { name: '响应式 UI 设计', percent: 82, desc: '熟悉移动优先与多端适配策略，关注细节与交互反馈' }
    ]
  }
];

/* ---------- 项目经历（时间轴） ---------- */
var PROJECTS = [
  {
    name: '项目 A：电商平台前端',
    time: '2025.06 - 2025.12',
    role: '前端开发',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    detail: [
      '项目背景：为某零售客户搭建多端电商站点，涵盖商品展示、购物车、订单等核心流程。',
      '主要职责：负责商品列表与购物车模块，使用 Flex 完成响应式布局，用原生 JS + jQuery 实现数量加减、总价计算与表单校验。',
      '项目成果：首屏加载时间缩短 30%，购物车转化率提升 12%，代码通过课题验收全部检查项。'
    ]
  },
  {
    name: '项目 B：个人博客系统',
    time: '2025.01 - 2025.05',
    role: '全栈开发',
    tags: ['Vue.js', 'Node.js', 'MySQL'],
    detail: [
      '项目背景：独立完成一个支持文章发布、标签管理与评论的个人博客系统。',
      '主要职责：前端使用 Vue.js 组件化开发，后端基于 Node.js 提供 RESTful 接口。',
      '项目成果：沉淀技术文章 40+ 篇，支持暗色模式与服务端渲染，月访问量稳定增长。'
    ]
  },
  {
    name: '项目 C：数据可视化看板',
    time: '2024.06 - 2024.12',
    role: '前端开发',
    tags: ['ECharts', 'Vue.js', 'WebSocket'],
    detail: [
      '项目背景：为运营团队开发实时数据看板，展示订单、流量与用户留存等核心指标。',
      '主要职责：基于 ECharts 封装通用图表组件，通过 WebSocket 实现数据秒级刷新。',
      '项目成果：覆盖 6 类业务图表、20+ 指标，看板平均渲染耗时控制在 300ms 以内。'
    ]
  }
];

/* ---------- 博客文章 ---------- */
var ARTICLES = [
  {
    id: 1,
    title: '深入理解 Flex 布局：从容器到项目的完整指南',
    date: '2026-09-18',
    author: '林泽',
    views: 1234,
    tag: 'CSS',
    cover: imgUrl('CSS flexbox layout concept illustration, aligned boxes and arrows, deep indigo blue and warm amber color scheme, modern flat design'),
    excerpt: 'Flex 布局是 CSS3 中最重要的布局方案之一，本文从容器属性与项目属性两个维度，带你彻底搞懂 Flex。',
    body: [
      { type: 'p', text: 'Flex 布局（Flexible Box）是 CSS3 提供的一种一维布局模型，特别适合一维方向上的排列、对齐与空间分配。一个元素设置 display: flex 后便成为弹性容器，其直接子元素成为弹性项目。' },
      { type: 'h3', text: '一、容器的六个属性' },
      { type: 'ul', items: ['flex-direction：决定主轴方向（row / column）', 'flex-wrap：空间不足时是否换行', 'justify-content：主轴对齐方式', 'align-items：交叉轴对齐方式'] },
      { type: 'p', text: '最常见的水平垂直居中，只需要三行声明即可完成：' },
      { type: 'code', text: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}' },
      { type: 'h3', text: '二、项目的三个常用属性' },
      { type: 'p', text: '弹性项目通过 flex-grow、flex-shrink、flex-basis 三个属性（可简写为 flex）控制如何分配剩余空间。例如希望两列布局中主内容自适应、侧栏固定宽度：' },
      { type: 'code', text: '.sidebar { flex: 0 0 200px; }\n.main    { flex: 1; }' },
      { type: 'quote', text: '经验：Flex 是一维布局，行列同时控制时应考虑 Grid；日常页面排版用 Flex 基本足够。' },
      { type: 'p', text: '结合媒体查询，我们可以轻松实现桌面三列、平板两列、手机单列的响应式网格，这也是本站作品展示页采用的方案。' }
    ]
  },
  {
    id: 2,
    title: 'JS 表单校验最佳实践：从正则到行内提示',
    date: '2026-09-15',
    author: '林泽',
    views: 986,
    tag: 'JavaScript',
    cover: imgUrl('web form validation concept, checklist and input fields with check marks, deep indigo and amber flat illustration'),
    excerpt: '表单校验是前端最常见的需求之一。本文总结昵称长度、邮箱正则、密码一致性等校验模式与行内错误提示方案。',
    body: [
      { type: 'p', text: '表单校验的核心原则是：尽早提示、就近提示、明确提示。用户输入后立刻反馈，错误信息紧跟在字段下方，而不是用笼统的弹窗。' },
      { type: 'h3', text: '一、常用校验规则' },
      { type: 'ul', items: ['必填：去除首尾空格后长度大于 0', '昵称：2-20 个字符', '邮箱：/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/', '密码：6-20 位，建议包含字母与数字'] },
      { type: 'p', text: '邮箱校验的标准正则写法：' },
      { type: 'code', text: 'var emailReg = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nif (!emailReg.test(email)) {\n  showError(input, "邮箱格式不正确");\n}' },
      { type: 'h3', text: '二、行内错误提示' },
      { type: 'p', text: '使用 jQuery 在输入框后面插入错误节点，并为输入框追加 error 类名，配合红色边框形成双重反馈：' },
      { type: 'code', text: 'function showError($input, msg) {\n  $input.addClass("error");\n  $input.siblings(".field-error").text(msg).addClass("show");\n}' },
      { type: 'quote', text: '注意：前端校验只负责体验，真正的安全校验必须在服务端再做一次。本站为纯前端项目，数据仅保存在 localStorage 中。' },
      { type: 'p', text: '提交时统一遍历所有规则，全部通过后才执行提交逻辑，可以避免「第一个错误修复后又冒出第二个」的糟糕体验。' }
    ]
  },
  {
    id: 3,
    title: 'HTML5 语义化标签实战指南',
    date: '2026-09-10',
    author: '林泽',
    views: 845,
    tag: '前端基础',
    cover: imgUrl('HTML5 semantic document structure diagram, header nav main article aside footer blocks, blue amber flat design'),
    excerpt: '为什么要用语义化标签？除了让代码更易读，它还关乎 SEO、无障碍与团队协作。本文结合本站结构逐一讲解。',
    body: [
      { type: 'p', text: '语义化标签的本质是「让标签自己表达含义」。看到 header 就知道是页头，看到 article 就知道是一段独立内容，机器和人都能理解页面结构。' },
      { type: 'h3', text: '常用语义化标签' },
      { type: 'ul', items: ['header：页面或区块的头部', 'nav：导航链接区域', 'main：页面主体内容（唯一）', 'article：可独立分发的内容，如一篇文章', 'section：按主题划分的区块', 'aside：与主体相关的侧栏内容', 'footer：页脚或区块尾部'] },
      { type: 'p', text: '一个典型的博客页面骨架如下：' },
      { type: 'code', text: '<body>\n  <header><nav>...</nav></header>\n  <main>\n    <article>...</article>\n    <aside>...</aside>\n  </main>\n  <footer>...</footer>\n</body>' },
      { type: 'quote', text: '口诀：每个页面只有一个 main；article 强调「可独立」，section 强调「成组」。' },
      { type: 'p', text: '语义化不是玄学：搜索引擎更容易识别正文，屏幕阅读器可以按地标跳转，新人接手项目时也能快速定位模块。' }
    ]
  },
  {
    id: 4,
    title: 'CSS3 动画与过渡的性能优化笔记',
    date: '2026-09-05',
    author: '林泽',
    views: 762,
    tag: 'CSS',
    cover: imgUrl('CSS animation performance concept, moving cards with motion trails, speedometer, indigo and amber colors flat illustration'),
    excerpt: '同样是动画，为什么有的流畅有的卡顿？关键在于触发了哪个渲染阶段。本文聊聊 transform、opacity 与合成层。',
    body: [
      { type: 'p', text: '浏览器渲染一帧要经历样式计算、布局（重排）、绘制（重绘）与合成四个阶段。动画属性不同，成本天差地别。' },
      { type: 'h3', text: '优先使用 transform 与 opacity' },
      { type: 'p', text: 'transform 和 opacity 的动画可以直接在合成层完成，不会触发重排与重绘，因此卡片悬停放大推荐这样写：' },
      { type: 'code', text: '.card {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-4px) scale(1.02);\n}' },
      { type: 'ul', items: ['避免动画 width / height / top / left（会触发重排）', '频繁滚动回调使用 requestAnimationFrame 或节流', '合理使用 will-change，但不要滥用'] },
      { type: 'quote', text: '本站的技能进度条通过 jQuery 设置 width 触发过渡——这类低频动画成本可控，无需过度优化。' }
    ]
  },
  {
    id: 5,
    title: 'jQuery 常用 DOM 操作与事件绑定总结',
    date: '2026-08-28',
    author: '林泽',
    views: 1024,
    tag: 'JavaScript',
    cover: imgUrl('jQuery DOM manipulation concept, tree of element nodes being selected and modified, indigo blue amber flat illustration'),
    excerpt: '在原生 API 已经很强大的今天，jQuery 依然是最简洁的 DOM 操作库之一。本文总结本站用到的全部 jQuery 模式。',
    body: [
      { type: 'p', text: 'jQuery 3.7.1 兼容主流浏览器，链式调用、事件委托与丰富的遍历方法让交互代码非常精炼。本站所有 DOM 操作均基于 jQuery。' },
      { type: 'h3', text: '一、事件绑定' },
      { type: 'code', text: '// 直接绑定\n$("#add-cart-btn").on("click", addToCart);\n// 事件委托（动态生成的元素也能响应）\n$("#cart-list").on("click", ".qty-btn", changeQty);' },
      { type: 'h3', text: '二、动态渲染' },
      { type: 'code', text: '$.each(ARTICLES, function (i, item) {\n  $("#article-grid").append(buildCard(item));\n});' },
      { type: 'ul', items: ['$(".x").addClass / removeClass / toggleClass：状态切换', '$(".x").text() / .html() / .val()：内容读写', '$(".x").slideToggle()：展开收起动画', '$("html,body").animate({ scrollTop: 0 }, 500)：平滑滚动'] },
      { type: 'quote', text: '建议：多次使用的选择器缓存成变量，如 var $list = $("#cart-list")，避免重复查询。' }
    ]
  },
  {
    id: 6,
    title: 'Git 版本控制入门：提交、分支与冲突处理',
    date: '2026-08-20',
    author: '林泽',
    views: 658,
    tag: '工具',
    cover: imgUrl('Git version control branching graph, commit nodes and branches diagram, indigo and amber flat design'),
    excerpt: 'Git 是前端协作的必修课。本文用最小心智模型讲清楚工作区、暂存区、提交与分支，并演示一次冲突解决。',
    body: [
      { type: 'p', text: '理解 Git 的关键是记住四个区域：工作区、暂存区、本地仓库、远程仓库。日常操作本质上都是在区域之间搬运改动。' },
      { type: 'h3', text: '日常三板斧' },
      { type: 'code', text: 'git status              # 看状态\ngit add .               # 加入暂存区\ngit commit -m "message" # 提交到本地仓库\ngit push                # 推送到远程' },
      { type: 'p', text: '新功能开发建议新建分支，完成后通过合并回到主干：' },
      { type: 'code', text: 'git checkout -b feature/cart\ngit checkout main\ngit merge feature/cart' },
      { type: 'quote', text: '冲突并不可怕：打开冲突文件，搜索 <<<<<<< 标记，与同事确认保留内容后重新 add、commit 即可。' }
    ]
  },
  {
    id: 7,
    title: '响应式设计的断点策略与移动优先实践',
    date: '2026-08-12',
    author: '林泽',
    views: 731,
    tag: '前端基础',
    cover: imgUrl('responsive web design across desktop tablet and phone devices, indigo amber color scheme flat illustration'),
    excerpt: '一套页面适配三端，断点该怎么选？本文分享本站采用的 1024 / 768 双断点方案与移动优先的书写顺序。',
    body: [
      { type: 'p', text: '响应式设计的核心是「流式布局 + 媒体查询」。容器不写死宽度，配合 Flex/Grid 与百分比，再在关键宽度调整列数与组件形态。' },
      { type: 'h3', text: '本站断点方案' },
      { type: 'ul', items: ['桌面 ≥1024px：三列网格、左右分栏、侧栏可见', '平板 768-1023px：两列网格、侧栏折叠为下拉', '手机 ≤767px：单列堆叠、汉堡菜单'] },
      { type: 'code', text: '@media (max-width: 767px) {\n  .card-grid > * { flex: 0 0 100%; }\n  .profile-layout { flex-direction: column; }\n}' },
      { type: 'quote', text: '移动优先（min-width 从小到大写）能让基础样式更克制；维护旧站时用 max-width 渐进降级更稳妥。' },
      { type: 'p', text: '别忘了 viewport 声明与触控区域大小——手机端可点元素建议不小于 44×44px。' }
    ]
  },
  {
    id: 8,
    title: 'Webpack 构建工具速查：从入口到打包',
    date: '2026-08-03',
    author: '林泽',
    views: 540,
    tag: '工具',
    cover: imgUrl('webpack module bundler concept, boxes and modules connected into one bundle, indigo and amber flat illustration'),
    excerpt: 'Webpack 把一切资源视为模块。本文用一个最小配置讲清 entry、output、loader 与 plugin 四个核心概念。',
    body: [
      { type: 'p', text: 'Webpack 的本职工作是「依赖收集 + 打包」：从入口出发，顺着 import/require 找到所有依赖，经过 loader 转换后合并成静态资源。' },
      { type: 'h3', text: '最小可用配置' },
      { type: 'code', text: 'module.exports = {\n  entry: "./src/index.js",\n  output: {\n    filename: "bundle.js",\n    path: __dirname + "/dist"\n  }\n};' },
      { type: 'ul', items: ['entry：打包入口', 'output：产物位置与命名', 'loader：让 webpack 能处理 CSS、图片等非 JS 文件', 'plugin：执行更广的任务，如压缩、生成 HTML'] },
      { type: 'quote', text: '初学建议：先用脚手架（如 Vue CLI / Vite）建立直觉，再回头手写配置，事半功倍。' }
    ]
  }
];

/* ---------- 作品 / 商品 ---------- */
var WORKS = [
  {
    id: 1,
    title: '响应式企业官网模板',
    category: '网页模板',
    price: 29,
    tags: ['HTML5', 'CSS3', '响应式'],
    cover: imgUrl('corporate website template mockup on laptop screen, business landing page, indigo and amber ui design'),
    desc: '一套完整的响应式企业官网模板，包含首页、产品页、解决方案、关于我们等 6 个页面，Flex 布局，开箱即用。'
  },
  {
    id: 2,
    title: '后台管理 UI 组件包',
    category: 'UI 组件',
    price: 49,
    tags: ['jQuery', '组件库', 'Dashboard'],
    cover: imgUrl('admin dashboard ui kit, charts tables sidebar components, indigo dark theme with amber accents'),
    desc: '面向中后台场景的 UI 组件包，含表格、表单、弹窗、日期选择等 20+ 组件，jQuery 驱动，附完整使用文档。'
  },
  {
    id: 3,
    title: '线性图标素材合集',
    category: '图标素材',
    price: 0,
    tags: ['SVG', '图标', '免费'],
    cover: imgUrl('collection of minimal line icons for web apps, grid layout of outline symbols, amber strokes on white'),
    desc: '120 枚精心打磨的线性图标，覆盖导航、电商、办公三大场景，提供 SVG 源文件，可自由改色与商用。'
  },
  {
    id: 4,
    title: 'jQuery 轮播图插件',
    category: '插件工具',
    price: 19,
    tags: ['jQuery', '轮播', '插件'],
    cover: imgUrl('image carousel slider plugin concept, sliding picture cards with arrows and dots, indigo amber ui'),
    desc: '轻量级 jQuery 轮播插件，支持自动播放、循环、触摸滑动、淡入淡出切换，API 简洁，压缩后仅 6KB。'
  },
  {
    id: 5,
    title: '极简个人博客模板',
    category: '网页模板',
    price: 39,
    tags: ['博客', '极简', 'SEO'],
    cover: imgUrl('minimal personal blog template, article cards and clean typography, warm amber and indigo color design'),
    desc: '为写作者打造的极简博客模板，语义化 HTML 结构对 SEO 友好，含列表页、详情页与归档页，排版舒适。'
  },
  {
    id: 6,
    title: '移动端 H5 组件库',
    category: 'UI 组件',
    price: 59,
    tags: ['移动端', '组件库', 'H5'],
    cover: imgUrl('mobile h5 ui components kit shown on phone screens, buttons lists modals, indigo and amber interface'),
    desc: '面向移动端 H5 的组件库，包含 30+ 高频组件，触控区域符合人体工学，内置多种主题色变量。'
  },
  {
    id: 7,
    title: '节气主题插画图标',
    category: '图标素材',
    price: 9,
    tags: ['插画', '节气', '中国风'],
    cover: imgUrl('chinese twenty four solar terms illustration icon set, traditional style, warm amber and deep blue tones'),
    desc: '二十四节气主题插画图标，中国风配色，适合文化类、生活类产品，提供 PNG 与 SVG 两种格式。'
  },
  {
    id: 8,
    title: '图片懒加载插件',
    category: '插件工具',
    price: 0,
    tags: ['性能优化', '懒加载', '免费'],
    cover: imgUrl('lazy loading images concept, pictures loading progressively on scroll, indigo amber flat illustration'),
    desc: '基于 IntersectionObserver 的图片懒加载插件，向下滚动进入视口时才加载图片，显著提升长列表首屏速度。'
  }
];

/* ---------- 留言板初始数据（首次访问时写入 localStorage） ---------- */
var DEFAULT_MESSAGES = [
  { name: '张三', email: 'zhangsan@example.com', content: '站点做得很棒！布局和配色都很舒服，已经收藏学习了。', time: '2026-09-19 10:24' },
  { name: '李四', email: 'lisi@example.com', content: '期待更多关于 JavaScript 的文章分享，收货很多！', time: '2026-09-18 16:08' }
];
