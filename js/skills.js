/* ============================================================
 * skills.js —— 技能进度条
 * 1) 技能详情页：按类别分组动态渲染全部技能
 * 2) 进度条进入视口时，jQuery 读取 data-percent 设置 width，
 *    触发 CSS transition: width 0.8s ease 过渡动画
 * 关于我页核心技能概览也调用 initSkillBars() 启动动画
 * ============================================================ */

/* 构建单条技能 HTML */
function buildSkillItem(item) {
  return (
    '<div class="skill-item">' +
      '<div class="skill-head">' +
        '<span class="skill-name">' + item.name + '</span>' +
        '<span class="skill-percent">' + item.percent + '%</span>' +
      '</div>' +
      '<div class="progress">' +
        '<div class="progress-fill" data-percent="' + item.percent + '" title="' + (item.desc || '') + '"></div>' +
      '</div>' +
      (item.desc ? '<div class="skill-desc">' + item.desc + '</div>' : '') +
    '</div>'
  );
}

/* 判断元素是否（接近）进入视口：getBoundingClientRect 为视口相对坐标 */
function isInViewport($el) {
  var rect = $el[0].getBoundingClientRect();
  var winH = window.innerHeight || document.documentElement.clientHeight || 0;
  return rect.top < winH - 20;
}

/* 扫描并激活可见的进度条（每个只执行一次） */
function revealSkillBars() {
  $('.progress-fill[data-percent]').not('.animated').each(function () {
    var $fill = $(this);
    if (isInViewport($fill)) {
      var percent = $fill.data('percent');
      /* 延时让多条进度条依次加载，观感更好 */
      $fill.css('width', percent + '%');
      $fill.addClass('animated');
    }
  });
}

/* 供关于我页渲染完成后立即初始化（首屏可见的直接动画） */
function initSkillBars() {
  revealSkillBars();
}

$(function () {
  /* ---- 技能详情页：渲染分组技能 ---- */
  var $groups = $('#skills-groups');
  if ($groups.length) {
    $.each(SKILLS, function (i, group) {
      var html = '<div class="block-card skill-group"><h3>' + group.group + '</h3>';
      $.each(group.items, function (j, item) {
        html += buildSkillItem(item);
      });
      html += '</div>';
      $groups.append(html);
    });
  }

  /* 滚动 / 加载时检测进度条进入视口 */
  revealSkillBars();
  $(window).on('scroll', revealSkillBars);
});
