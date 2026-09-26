/* ============================================================
 * projects.js —— 项目经历时间轴
 * 1) 依据 PROJECTS 数据动态渲染时间轴节点
 * 2) jQuery slideToggle() 实现详情展开 / 收起
 * ============================================================ */

$(function () {
  var $timeline = $('#timeline');
  if (!$timeline.length) { return; }

  /* 动态渲染时间轴 */
  $.each(PROJECTS, function (i, p) {
    var tagsHtml = '';
    $.each(p.tags, function (j, tag) {
      tagsHtml += '<span class="tag">' + tag + '</span> ';
    });

    var detailHtml = '';
    $.each(p.detail, function (j, text) {
      detailHtml += '<p>' + text + '</p>';
    });

    var itemHtml =
      '<div class="timeline-item">' +
        '<span class="timeline-dot"></span>' +
        '<div class="timeline-card">' +
          '<div class="tc-top">' +
            '<h3>' + p.name + '</h3>' +
            '<span class="tc-time">' + p.time + '</span>' +
          '</div>' +
          '<div class="tc-role">担任角色：' + p.role + '</div>' +
          '<div class="tc-tags">' + tagsHtml + '</div>' +
          '<div class="timeline-detail">' + detailHtml + '</div>' +
          '<div class="tc-toggle">点击查看详情 <span class="arrow">▾</span></div>' +
        '</div>' +
      '</div>';

    $timeline.append(itemHtml);
  });

  /* 点击卡片：slideToggle 展开/收起详情（事件委托） */
  $timeline.on('click', '.timeline-card', function () {
    var $item = $(this).closest('.timeline-item');
    var $detail = $(this).find('.timeline-detail');
    var $label = $(this).find('.tc-toggle');

    $detail.slideToggle(300, function () {
      var expanded = $detail.css('display') !== 'none';
      $item.toggleClass('expanded', expanded);
      $label.html(expanded
        ? '收起详情 <span class="arrow">▾</span>'
        : '点击查看详情 <span class="arrow">▾</span>');
    });
  });
});
