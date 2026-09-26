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
  name: '尹晓晓',
  avatarText: '尹',
  job: '软件测试工程师（应届生）',
  email: 'yinxiaoxiao2005@163.com',
  phone: '198-3615-5530',
  location: '上海 · 实习中',
  github: 'https://github.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: '掘金', url: 'https://juejin.cn' },
    { name: '知乎', url: 'https://www.zhihu.com' },
    { name: '微博', url: 'https://weibo.com' }
  ],
  intro: [
    '你好，我是尹晓晓，中原科技学院数据科学与大数据技术专业 2027 届本科生，求职意向是软件测试工程师，可随时到岗。目前在上海威派格智慧水务股份有限公司担任软件测试实习生。',
    '熟悉软件测试全生命周期，精通黑盒用例设计；能用 Python + Selenium/Pytest、Appium 搭建自动化测试框架，熟练使用 Postman、JMeter、Charles、MySQL 与 Linux。喜欢把测试过程沉淀成文档、脚本和模板，分享到作品商城。'
  ],
  education: [
    { title: '上海威派格智慧水务股份有限公司 · 软件测试实习生', time: '2026.07 - 至今', desc: '参与天津市供水应急监管平台（智慧水务 B 端政务系统）测试，负责 PC 端与 H5 移动端功能、回归及数据一致性验证。' },
    { title: '中原科技学院 · 数据科学与大数据技术（本科）', time: '2023.09 - 2027.06', desc: '主修数据库原理与技术、Python 程序设计、软件工程、操作系统、计算机网络、数据结构等课程。' }
  ]
};

/* ---------- 技能数据（按类别分组，percent 供进度条使用） ---------- */
var SKILLS = [
  {
    group: '测试理论与方法',
    items: [
      { name: '黑盒测试与用例设计', percent: 90, desc: '精通等价类划分、边界值分析、场景法等用例设计方法，覆盖正向流程与异常中断场景' },
      { name: '测试流程与缺陷管理', percent: 85, desc: '熟悉软件测试全生命周期与 Bug 生命周期，熟练使用 Jira、禅道进行缺陷提交与回归跟踪' },
      { name: '功能 / 兼容 / 弱网测试', percent: 85, desc: '覆盖 PC、H5、App 多端功能验证、多机型兼容性与弱网、内外网双环境测试' },
      { name: '敏捷测试与协同', percent: 72, desc: '了解敏捷测试流程，参与需求 Showcase 与跨端、跨团队沟通，独立输出上百条用例与测试文档' }
    ]
  },
  {
    group: '自动化与编程',
    items: [
      { name: 'Python', percent: 88, desc: '熟练使用 Python 编写 UI 自动化测试脚本，完成脚本封装、参数化与批量执行' },
      { name: 'Selenium + Pytest', percent: 85, desc: '基于 Selenium + Pytest 搭建 Web 自动化框架，采用 PO 模式封装页面元素与操作' },
      { name: 'Appium', percent: 72, desc: '搭建 APP 自动化测试框架，熟悉元素定位、用例组织与批量回归执行' },
      { name: 'Java / C++ / Shell', percent: 70, desc: '熟悉 Java、C++ 编程基础，了解 Shell 脚本，能在 Linux 环境完成日常测试操作' }
    ]
  },
  {
    group: '专项测试与数据',
    items: [
      { name: 'MySQL / SQL', percent: 88, desc: '熟练复杂多表查询与数据清洗，擅长用 SQL 做前后台数据一致性校验与数据质量分析' },
      { name: 'Postman 接口测试', percent: 85, desc: '使用 Postman 完成接口功能验证、参数化断言与数据一致性校验' },
      { name: 'JMeter 性能测试', percent: 75, desc: '配合完成核心接口并发性能测试，设计压测场景并分析高负载下的系统稳定性' },
      { name: 'Charles / Linux', percent: 82, desc: '熟练使用 Charles 抓包分析请求与响应报文，结合 Linux 服务端日志快速定位缺陷' }
    ]
  }
];

/* ---------- 项目经历（时间轴） ---------- */
var PROJECTS = [
  {
    name: '实习：天津市供水应急监管平台测试',
    time: '2026.07 - 至今',
    role: '软件测试实习生（上海威派格智慧水务）',
    tags: ['功能测试', '回归测试', 'Jira', 'H5'],
    detail: [
      '项目背景：天津市供水应急监管平台是一套智慧水务 B 端政务系统，包含 PC 端、专题图与 H5 移动端，本人负责其功能测试、回归测试、用户体验验证以及数据报表计算逻辑与一致性验证。',
      '全模块功能验证：依据需求矩阵覆盖供水设施、供水行业统计、应急事件处置、报警管理、安全检查上报处理、数据报表等核心业务模块。',
      '深度专项测试：针对 AI 知识问答、水质监测（pH / 余氯 / 浊度 / 溶解氧等）、报表数据准确性、定时发布工单任务等模块，发现「水质异常标红但 AI 未触发报警」等逻辑缺陷以及报表计算错误、数据展示不一致等问题。',
      '缺陷管理：使用 Jira 进行 Bug 全生命周期管理，负责缺陷提交、复现定位与修复后回归；通过内网 / 外网（VPN）双环境对比，定位并上报内外网数据展示差异类问题。',
      '协作输出：独立编写上百条测试用例、输出多个测试文档，参与用户体验沟通会、测试任务沟通会与需求 Showcase，跨端、跨环境协同验证业务流程与工单流程。'
    ]
  },
  {
    name: '电商 App 全链路测试（线上实训项目）',
    time: '2026.05 - 2026.06',
    role: '功能测试 / 数据校验',
    tags: ['App 测试', 'Charles', 'SQL', '弱网测试'],
    detail: [
      '项目背景：对一款电商 App 开展全链路测试，覆盖首页推荐、商品详情、下单支付等核心交易链路。',
      '测试范围：负责核心链路的功能测试、多机型兼容性测试与弱网测试。',
      '用例设计：运用场景法与边界值分析法设计用例，覆盖正向流程与异常中断场景，确保核心交易链路稳定。',
      '缺陷定位：通过 Charles 抓包分析请求参数与响应报文，配合 Linux 查看服务端日志，协助开发快速定位 3 个底层数据同步延迟问题。',
      '数据校验：利用 SQL 核对订单状态与库存扣减的一致性，保障上线后零资损。'
    ]
  },
  {
    name: '金融理财 Web 平台测试（线上实训项目）',
    time: '2026.04 - 2026.05',
    role: '自动化 / 接口 / 安全测试',
    tags: ['Selenium', 'Pytest', 'Postman', 'JMeter'],
    detail: [
      '项目背景：B/S 架构的金融核心系统，涵盖投融资撮合、资金托管、放款审核等业务，涉及登录鉴权、借款申请、风控审核、材料上传、充值提现等高敏感资金链路。',
      '全链路用例设计：深入理解资金业务流程，运用场景法与边界值分析法设计用例，覆盖借款申请、审核流转、资金进出等核心功能，确保业务逻辑闭环。',
      '自动化框架：基于 Selenium + Pytest 搭建 Web 自动化测试框架，采用 PO 模式封装页面元素与操作，实现核心冒烟用例的自动化回归，提升回归效率。',
      '接口与性能：使用 Postman 进行接口功能验证与数据一致性校验；配合 JMeter 完成核心接口并发性能测试，验证高负载下的系统稳定性。',
      '安全与数据：针对资金交易模块实施越权测试，成功拦截并上报 2 个越权漏洞；利用 SQL 核对前台业务流水与后台账务数据一致性，确保上线后零资金差错。'
    ]
  }
];

/* ---------- 博客文章 ---------- */
var ARTICLES = [
  {
    id: 1,
    title: '黑盒测试用例设计实战：等价类、边界值与场景法',
    date: '2026-09-20',
    author: '尹晓晓',
    views: 1386,
    tag: '测试基础',
    cover: imgUrl('software testing concept, checklist clipboard with test cases and checkmarks, deep indigo blue and warm amber flat illustration'),
    excerpt: '用例设计是测试工程师的看家本领。本文结合电商下单场景，梳理等价类划分、边界值分析与场景法三种最常用方法的配合打法。',
    body: [
      { type: 'p', text: '在电商 App 全链路测试项目中，我负责首页推荐、商品详情、下单支付等核心链路。一条链路要拆出多少用例才算够？答案藏在用例设计方法里。' },
      { type: 'h3', text: '一、等价类划分：先分有效与无效' },
      { type: 'p', text: '把输入域划分为若干等价类，每个等价类中任意一个值都能代表整类。例如「商品购买数量」的有效等价类是 1 到库存上限，无效等价类包括 0、负数、非数字、超过库存。' },
      { type: 'h3', text: '二、边界值分析：缺陷最爱聚集在边界' },
      { type: 'ul', items: ['数量为 1：最小有效购买量', '数量为库存数：最大可购买量', '数量为库存数 + 1：应拦截并提示', '优惠券金额恰好等于订单金额：零元支付边界'] },
      { type: 'p', text: '一个简单的购买数量校验，用例可以这样组织：' },
      { type: 'code', text: '# 用例编号 / 输入 / 预期\nTC-001  qty=1          允许下单\nTC-002  qty=stock      允许下单\nTC-003  qty=stock+1    提示库存不足\nTC-004  qty=0          提示数量非法\nTC-005  qty=-1         提示数量非法' },
      { type: 'h3', text: '三、场景法：串起完整业务流' },
      { type: 'p', text: '等价类与边界值解决「点」的覆盖，场景法解决「线」的覆盖。基本流是「浏览 → 加购 → 下单 → 支付成功」，备选流要覆盖支付失败重试、库存被抢光、弱网重复提交等异常中断场景。' },
      { type: 'quote', text: '经验：先画业务流程图，再沿基本流逐条加入备选流，用例既不会漏主干，也不会在细枝末节上无限膨胀。' },
      { type: 'p', text: '三种方法配合使用，再配合需求矩阵逐条勾对，我在项目中独立输出的上百条用例，评审时几乎没有出现主干遗漏。' }
    ]
  },
  {
    id: 2,
    title: 'Selenium + Pytest 自动化框架搭建：PO 模式从 0 到 1',
    date: '2026-09-16',
    author: '尹晓晓',
    views: 1102,
    tag: '自动化测试',
    cover: imgUrl('test automation framework concept, browser window with gears and python code, deep indigo and warm amber flat illustration'),
    excerpt: '在金融理财 Web 平台项目中，我基于 Selenium + Pytest 搭建了自动化框架。本文记录目录结构、PO 封装与冒烟回归的落地过程。',
    body: [
      { type: 'p', text: '自动化不是「把手工步骤翻译成脚本」，而是用工程化方式组织脚本。框架的目标是：元素定位集中管理、用例与页面解耦、失败可重试、报告可追溯。' },
      { type: 'h3', text: '一、推荐目录结构' },
      { type: 'code', text: 'auto_web/\n├── base/          # 基础页面类：通用操作封装\n├── pages/         # 页面对象：登录页、借款页...\n├── testcases/     # 测试用例：test_*.py\n├── data/          # 测试数据\n├── reports/       # Allure 报告\n└── conftest.py    # fixture：浏览器启停' },
      { type: 'h3', text: '二、PO 模式：元素与操作收进页面类' },
      { type: 'code', text: 'class LoginPage:\n    def __init__(self, driver):\n        self.driver = driver\n        self.username = ("id", "username")\n        self.password = ("id", "password")\n        self.submit = ("id", "login-btn")\n\n    def login(self, user, pwd):\n        self.driver.find_element(*self.username).send_keys(user)\n        self.driver.find_element(*self.password).send_keys(pwd)\n        self.driver.find_element(*self.submit).click()' },
      { type: 'ul', items: ['显式等待替代 time.sleep，元素出现再操作', '定位器与用例分离，页面改版只改 pages 层', 'fixture 统一管理浏览器生命周期', 'pytest -k smoke 只跑核心冒烟用例'] },
      { type: 'quote', text: '踩坑：不要一上来就追求「全量自动化」。先把登录、下单这类高频回归的冒烟链路跑稳，再逐步扩大覆盖面。' },
      { type: 'p', text: '框架落地后，金融项目核心冒烟用例实现了一键自动回归，每次开发提测后先跑一遍，把回归时间从半天压缩到十几分钟。' }
    ]
  },
  {
    id: 3,
    title: 'Postman 接口测试实战：从断言到数据一致性校验',
    date: '2026-09-12',
    author: '尹晓晓',
    views: 874,
    tag: '测试工具',
    cover: imgUrl('api testing with postman concept, http request response json and assertion checkmarks, indigo amber flat design'),
    excerpt: '接口测试是功能测试的放大镜。本文总结 Postman 环境变量、参数化断言，以及如何配合 SQL 完成前后台数据一致性校验。',
    body: [
      { type: 'p', text: '在金融理财平台测试中，资金接口不能只看页面提示。页面显示「放款成功」，后台账务、流水、余额是否真的一致？这就要做接口断言加数据库校验。' },
      { type: 'h3', text: '一、接口断言三件套' },
      { type: 'code', text: 'pm.test("状态码 200", function () {\n  pm.response.to.have.status(200);\n});\npm.test("业务码成功", function () {\n  pm.expect(pm.response.json().code).to.eql(0);\n});\npm.test("返回金额一致", function () {\n  pm.expect(pm.response.json().data.amount)\n    .to.eql(pm.environment.get("expectAmount"));\n});' },
      { type: 'ul', items: ['环境变量区分测试 / 预发地址，token 自动透传', 'CSV 数据文件驱动多组参数批量跑', '接口之间用 pm.environment.set 传递订单号等依赖值'] },
      { type: 'h3', text: '二、接口 + SQL 双端对账' },
      { type: 'p', text: '资金类接口断言通过后，再用订单号查询后台账务表，核对前台流水金额、状态与后台记录完全一致，杜绝「前端成功、后台失败」的资损隐患。' },
      { type: 'quote', text: '经验：越敏感的链路越不能信单一信号。HTTP 200、业务码、响应字段、数据库记录，四层都一致才算通过。' }
    ]
  },
  {
    id: 4,
    title: 'JMeter 性能测试入门：并发场景设计与结果分析',
    date: '2026-09-08',
    author: '尹晓晓',
    views: 652,
    tag: '性能安全',
    cover: imgUrl('performance testing jmeter concept, rising request threads and response time graph, indigo and amber flat illustration'),
    excerpt: '配合开发完成金融核心接口并发测试后，我整理了 JMeter 的最小可用流程：线程组怎么配、阶梯加压怎么做、报告看哪几个指标。',
    body: [
      { type: 'p', text: '性能测试的目的不是「把接口压挂」，而是回答两个问题：系统在预期并发下是否稳定？瓶颈大概在哪个环节？' },
      { type: 'h3', text: '一、线程组的三个关键参数' },
      { type: 'ul', items: ['线程数：模拟的并发用户数', 'Ramp-Up 时间：多长时间内启动完全部线程', '循环次数：每个线程执行几轮'] },
      { type: 'p', text: '模拟 50 并发在 10 秒内逐步上线、每用户循环 5 次，配置如下：' },
      { type: 'code', text: '线程数: 50\nRamp-Up: 10 秒\n循环次数: 5\nHTTP 请求: POST /api/loan/apply\n同步断言: 响应码 200 且业务码 = 0' },
      { type: 'h3', text: '二、报告重点看什么' },
      { type: 'ul', items: ['吞吐量（TPS）：每秒处理请求数', '90% / 99% 响应时间：比平均值更能代表用户体感', '错误率：高并发下是否出现超时或业务失败', '阶梯加压：观察 TPS 拐点，定位系统容量水位'] },
      { type: 'quote', text: '提醒：压测前务必确认环境隔离，千万不要对着生产环境的资金接口发起并发。' },
      { type: 'p', text: '本次项目中我们对核心接口做了并发验证，确认高负载下系统稳定、无资金差错，性能结论作为上线评审依据之一。' }
    ]
  },
  {
    id: 5,
    title: 'Charles 抓包 + Linux 日志：30 分钟定位一个数据同步 Bug',
    date: '2026-09-03',
    author: '尹晓晓',
    views: 733,
    tag: '测试工具',
    cover: imgUrl('network packet capture and server logs debugging concept, magnifier over data packets and terminal, indigo amber flat design'),
    excerpt: '页面数据对不上，是前端问题还是后端问题？记录电商项目中一个数据同步延迟缺陷的完整定位过程：抓包、看日志、给证据。',
    body: [
      { type: 'p', text: '现象：订单已支付成功，订单列表偶尔仍显示「待支付」，几十秒后才刷新。这种「偶现 + 延迟」的问题，靠截图很难推动开发修复。' },
      { type: 'h3', text: '第一步：Charles 抓包固定证据' },
      { type: 'ul', items: ['过滤目标域名，复现一次完整支付流程', '核对支付回调接口的请求时间与响应内容', '确认客户端已收到成功报文，排除前端丢包'] },
      { type: 'h3', text: '第二步：Linux 日志反查服务端' },
      { type: 'code', text: '# 按订单号检索相关日志\ngrep "ORDER_20260601001" app.log\n# 观察消息队列消费时间点\ntail -f mq-consumer.log | grep ORDER_20260601001' },
      { type: 'p', text: '日志显示支付成功消息入队正常，但库存与订单状态消费者出现处理延迟，根因是高峰期消息积压导致的底层数据同步延迟。' },
      { type: 'h3', text: '第三步：带证据提缺陷' },
      { type: 'quote', text: '缺陷报告四件套：复现步骤、抓包截图、服务端日志片段、发生频率。开发拿到手不用二次排查，修复优先级也更容易争取。' },
      { type: 'p', text: '类似问题最终定位了 3 个，开发通过优化消费线程与告警策略完成修复，上线后该类反馈清零。' }
    ]
  },
  {
    id: 6,
    title: '一个 Bug 的一生：缺陷报告怎么写才能让开发不吐槽',
    date: '2026-08-28',
    author: '尹晓晓',
    views: 941,
    tag: '测试基础',
    cover: imgUrl('bug report lifecycle concept, ticket moving from open to closed on kanban board, indigo and amber flat design'),
    excerpt: '同样是提 Bug，有的秒修，有的反复扯皮。本文结合 Jira / 禅道实践，讲清缺陷标题、复现步骤、严重级别与回归闭环。',
    body: [
      { type: 'p', text: '缺陷管理是测试全生命周期中的高频协作环节。在威派格实习期间，我使用 Jira 负责缺陷提交、复现定位与修复后回归验证。' },
      { type: 'h3', text: '一、标题一句话讲清三件事' },
      { type: 'p', text: '好标题 = 模块 + 操作 + 异常结果。对比下面两种写法：' },
      { type: 'ul', items: ['反面：报表有问题', '正面：数据报表-日报汇总金额与明细求和不一致（差 0.01 元）'] },
      { type: 'h3', text: '二、复现步骤要能「闭眼复现」' },
      { type: 'code', text: '前置条件：使用账号 A 登录，存在一笔已审核借款单\n1. 进入「数据报表 - 日报」\n2. 选择日期 2026-07-15，点击查询\n3. 对比汇总金额与下方明细求和\n预期：两者一致\n实际：汇总 10000.00，明细求和 10000.01\n附件：录屏、接口响应、数据库查询结果' },
      { type: 'ul', items: ['严重级别按影响面与资损风险分级，不按心情分级', '偶现问题标注发生概率（如 5 次复现 2 次）', '修复后必须回归：验证问题单 + 回归关联模块'] },
      { type: 'quote', text: '认知：提 Bug 不是「找茬」，而是和开发共同对质量负责。证据完整、表述中立，协作会顺畅很多。' }
    ]
  },
  {
    id: 7,
    title: 'Appium 移动端自动化：元素定位与脚本封装笔记',
    date: '2026-08-20',
    author: '尹晓晓',
    views: 587,
    tag: '自动化测试',
    cover: imgUrl('mobile app automation testing concept, phone with robot arm tapping screen and appium inspector, indigo amber flat design'),
    excerpt: '移动端自动化比 Web 多了设备与DesiredCapabilities 的坑。本文整理 Appium 环境、元素定位策略与可复用的脚本封装方式。',
    body: [
      { type: 'p', text: '在编程实践中我搭建了 APP（Appium）自动化测试框架，基于 Python 实现脚本封装与批量执行。移动端最大的难点不是写脚本，而是元素定位不稳定。' },
      { type: 'h3', text: '一、启动参数最小集' },
      { type: 'code', text: 'caps = {\n  "platformName": "Android",\n  "deviceName": "emulator-5554",\n  "appPackage": "com.example.shop",\n  "appActivity": ".MainActivity",\n  "noReset": True,\n  "automationName": "UiAutomator2"\n}\ndriver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", caps)' },
      { type: 'h3', text: '二、定位策略优先级' },
      { type: 'ul', items: ['首选 accessibility id（content-desc），稳定且语义化', '其次 id / resource-id', 'xpath 兜底，但尽量用相对路径并收紧层级', '推荐让开发为关键元素补测试属性，一劳永逸'] },
      { type: 'p', text: '和 Web 框架一样，APP 端同样采用分层设计：base 封装通用手势（滑动、长按、等待），pages 管理元素，testcases 只关心业务步骤。' },
      { type: 'quote', text: '经验：弱网与弹窗是移动端自动化的两大杀手，用例中统一处理网络恢复与异常弹窗，避免每条用例各写一遍。' }
    ]
  },
  {
    id: 8,
    title: '越权测试实战：资金交易模块的两个漏洞是怎么找到的',
    date: '2026-08-12',
    author: '尹晓晓',
    views: 816,
    tag: '性能安全',
    cover: imgUrl('web security testing concept, shield with keyhole and unauthorized access warning, deep indigo and amber flat illustration'),
    excerpt: '持有深信服 AI 安全认证，我在金融项目资金交易模块实施越权测试，成功拦截并上报 2 个越权漏洞。本文复盘测试思路。',
    body: [
      { type: 'p', text: '越权访问是业务安全的高发问题：普通用户能否看到别人的订单？低权限账号能否调用高权限接口？资金系统里这类漏洞直接关系用户资金安全。' },
      { type: 'h3', text: '一、水平越权：A 用户访问 B 用户数据' },
      { type: 'ul', items: ['用账号 A 下单，记录订单详情接口中的订单号', '保持登录态，将订单号替换为账号 B 的订单号重放请求', '若返回了 B 的借款金额、银行卡等信息，即存在水平越权'] },
      { type: 'h3', text: '二、垂直越权：低权限调用高权限接口' },
      { type: 'p', text: '用普通审核员账号登录，抓包获取管理员「强制结单」接口，退出管理员会话后用低权限账号直接重放，检查服务端是否仅依赖前端菜单隐藏而未做权限校验。' },
      { type: 'code', text: '# 越权检测清单\n[ ] 改 URL 中的资源 ID\n[ ] 改请求体中的 userId / 订单号\n[ ] 低账号重放高权限接口\n[ ] 仅前端隐藏按钮、后端无鉴权\n[ ] 越权后的写入操作是否真正生效' },
      { type: 'quote', text: '安全提醒：越权测试必须在授权环境、使用测试账号进行，所有操作留痕；发现漏洞后走正规缺陷流程，不触碰任何真实用户数据。' },
      { type: 'p', text: '本次共上报 2 个越权漏洞，协助开发完成权限校验逻辑加固后回归通过。安全测试的本质，是替用户守住他们看不见的那道门。' }
    ]
  }
];

/* ---------- 作品 / 商品 ---------- */
var WORKS = [
  {
    id: 1,
    title: 'Web UI 自动化测试框架（Selenium + Pytest + PO）',
    category: '自动化框架',
    price: 39,
    tags: ['Python', 'Selenium', 'Pytest'],
    cover: imgUrl('web ui automated testing framework product cover, python code and browser with green checkmarks, indigo amber ui'),
    desc: '金融项目实战沉淀的 Web 自动化框架：base / pages / testcases 三层结构，PO 模式封装元素，含显式等待、失败截图、Allure 报告与冒烟用例集，附搭建文档与视频讲解。'
  },
  {
    id: 2,
    title: 'App 自动化测试框架（Appium + Pytest）',
    category: '自动化框架',
    price: 49,
    tags: ['Appium', 'Android', 'Python'],
    cover: imgUrl('mobile app testing framework product cover, smartphone with automation nodes and python script, indigo and amber interface'),
    desc: '开箱即用的 APP 自动化框架：DesiredCapabilities 配置模板、元素定位统一管理、手势操作封装、弱网与异常弹窗处理，支持多设备批量执行，附 20 条电商示例用例。'
  },
  {
    id: 3,
    title: '接口自动化测试套件（Requests + Pytest + Allure）',
    category: '自动化框架',
    price: 35,
    tags: ['接口测试', 'Requests', 'Allure'],
    cover: imgUrl('api automation test suite product cover, http requests chain and allure style report dashboard, indigo amber flat design'),
    desc: '轻量级接口自动化套件：配置化域名与 token 透传、YAML 数据驱动、接口依赖自动关联、数据库断言四层校验，附金融接口演示用例与 Allure 报告模板。'
  },
  {
    id: 4,
    title: '电商 App 全链路测试用例库（200+ 条 Excel）',
    category: '用例模板',
    price: 19,
    tags: ['用例库', '电商', 'Excel'],
    cover: imgUrl('test case library spreadsheet product cover, organized excel rows with pass fail status, indigo and amber ui'),
    desc: '覆盖首页推荐、商品详情、购物车、下单支付、售后退款全链路的 200+ 条用例，含功能、兼容、弱网、异常中断场景，可直接按项目需求裁剪使用。'
  },
  {
    id: 5,
    title: '金融 Web 平台测试用例与 Checklist 模板包',
    category: '用例模板',
    price: 19,
    tags: ['金融', 'Checklist', '越权'],
    cover: imgUrl('financial platform testing checklist product cover, clipboard with security items and money flow, indigo amber flat design'),
    desc: '面向高敏感资金链路的测试模板：功能用例 + 接口对账清单 + 越权测试清单 + 上线前评审 Checklist，覆盖登录鉴权、借款审核、充值提现等核心场景。'
  },
  {
    id: 6,
    title: '测试文档全家桶（计划 / 方案 / 报告 / 缺陷模板）',
    category: '用例模板',
    price: 0,
    tags: ['文档模板', 'Word', '免费'],
    cover: imgUrl('software testing documents bundle product cover, plan report and bug templates stacked, indigo and amber flat design'),
    desc: '免费分享测试全流程文档模板：测试计划、测试方案、测试报告、缺陷报告、日报周报，字段齐全可直接套用，帮你告别「文档从零写」。'
  },
  {
    id: 7,
    title: '数据一致性 SQL 校验脚本集（MySQL）',
    category: '测试工具',
    price: 29,
    tags: ['SQL', 'MySQL', '数据校验'],
    cover: imgUrl('sql data consistency checker scripts product cover, database tables compared with equals sign, indigo amber flat design'),
    desc: '面向前后台对账场景的 SQL 脚本集：订单与库存扣减核对、业务流水与账务汇总核对、日报明细求和校验，附使用说明与结果差异定位思路。'
  },
  {
    id: 8,
    title: 'Postman 接口测试集合（环境变量 + 断言）',
    category: '测试工具',
    price: 15,
    tags: ['Postman', '断言', 'Collection'],
    cover: imgUrl('postman collection product cover, request folders with test scripts and green assertions, indigo amber ui'),
    desc: '可直接导入的 Postman Collection：分层目录、环境变量模板、token 自动获取、常用断言脚本库、CSV 参数化示例，新手也能快速跑起第一轮接口测试。'
  },
  {
    id: 9,
    title: 'JMeter 压测脚本模板（阶梯加压 + 聚合报告）',
    category: '测试工具',
    price: 0,
    tags: ['JMeter', '性能测试', '免费'],
    cover: imgUrl('jmeter stress test template product cover, thread groups stepping up and aggregate report chart, indigo amber flat design'),
    desc: '免费下载 JMeter 压测工程模板：线程组与阶梯加压配置、HTTP 默认值、响应断言、TPS / 响应时间监听器，附压测前检查清单，改地址即可开跑。'
  },
  {
    id: 10,
    title: '软件测试求职面试手册（简历模板 + 高频问答）',
    category: '学习资料',
    price: 25,
    tags: ['求职', '面试', '简历'],
    cover: imgUrl('software testing job interview handbook product cover, resume document and question cards, indigo amber flat design'),
    desc: '面向应届生 / 实习转正式的求职包：两页测试简历模板、项目经历包装范例、80 道测试理论 + 自动化 + 数据库高频问答与回答思路，附投递时间线建议。'
  },
  {
    id: 11,
    title: '软件测试入门知识地图（思维导图 + 书单）',
    category: '学习资料',
    price: 0,
    tags: ['知识地图', '入门', '免费'],
    cover: imgUrl('software testing learning roadmap product cover, mind map from basics to automation and performance, indigo amber flat design'),
    desc: '免费领取测试入门知识地图：测试理论 → 用例设计 → 数据库 → 接口工具 → 自动化 → 性能与安全，每个节点附学习目标与经典书单，照着学不迷路。'
  },
  {
    id: 12,
    title: 'Linux 日志分析与抓包排错速查手册',
    category: '学习资料',
    price: 12,
    tags: ['Linux', 'Charles', '排错'],
    cover: imgUrl('linux log analysis cheat sheet product cover, terminal commands and packet capture flow, indigo amber flat design'),
    desc: '测试人必备排错手册：grep / tail / awk 高频命令、按订单号追踪日志的套路、Charles 抓包与弱网模拟配置、抓包 + 日志联合定位缺陷的完整案例。'
  }
];

/* ---------- 留言板初始数据（首次访问时写入 localStorage） ---------- */
var DEFAULT_MESSAGES = [
  { name: '张三', email: 'zhangsan@example.com', content: '站点做得很棒！测试用例模板很实用，金融项目那套 Checklist 已经收藏了。', time: '2026-09-22 10:24' },
  { name: '李四', email: 'lisi@example.com', content: 'Selenium + Pytest 框架文章写得很清楚，期待更多自动化测试的分享！', time: '2026-09-21 16:08' }
];
