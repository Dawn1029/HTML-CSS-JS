/* ============================================================
 * about.js —— 关于我页：从 SKILLS 数据中选取核心技能概览
 * ============================================================ */

$(function () {
  var $box = $('#overview-skills');
  if (!$box.length) { return; }

  /* 选取 5 项核心技能：用例设计 + 缺陷管理 + Python + 自动化框架 + SQL */
  var overview = [
    SKILLS[0].items[0],  /* 黑盒测试与用例设计 */
    SKILLS[0].items[1],  /* 测试流程与缺陷管理 */
    SKILLS[1].items[0],  /* Python */
    SKILLS[1].items[1],  /* Selenium + Pytest */
    SKILLS[2].items[0]   /* MySQL / SQL */
  ];

  $.each(overview, function (i, item) {
    $box.append(buildSkillItem(item));
  });

  /* 渲染完成后启动进度条过渡动画 */
  initSkillBars();
});
