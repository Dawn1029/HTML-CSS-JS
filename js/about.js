/* ============================================================
 * about.js —— 关于我页：从 SKILLS 数据中选取核心技能概览
 * ============================================================ */

$(function () {
  var $box = $('#overview-skills');
  if (!$box.length) { return; }

  /* 选取 5 项核心技能：前端基础三项 + jQuery + 响应式设计 */
  var overview = [
    SKILLS[0].items[0],  /* HTML5 语义化 */
    SKILLS[0].items[1],  /* CSS3 / Flex */
    SKILLS[0].items[2],  /* JavaScript */
    SKILLS[1].items[0],  /* jQuery */
    SKILLS[2].items[1]   /* 响应式 UI 设计 */
  ];

  $.each(overview, function (i, item) {
    $box.append(buildSkillItem(item));
  });

  /* 渲染完成后启动进度条过渡动画 */
  initSkillBars();
});
