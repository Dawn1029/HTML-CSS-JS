/* ============================================================
 * works.js —— 作品展示页
 * 1) jQuery 渲染作品网格
 * 2) 左侧分类按钮 + 窄屏下拉选择双向同步筛选
 * 3) 空状态处理
 * ============================================================ */

$(function () {
  var currentCat = '全部';

  var $grid = $('#works-grid');
  var $empty = $('#works-empty');
  var $sideItems = $('.category-item');
  var $select = $('#category-select');

  function getFiltered() {
    if (currentCat === '全部') { return WORKS; }
    return $.grep(WORKS, function (item) {
      return item.category === currentCat;
    });
  }

  function renderWorks() {
    var list = getFiltered();
    $grid.empty();

    if (list.length === 0) {
      $empty.removeClass('hidden');
      $grid.addClass('hidden');
      return;
    }
    $empty.addClass('hidden');
    $grid.removeClass('hidden');

    $.each(list, function (i, item) {
      $grid.append(buildWorkCard(item));
    });
  }

  /* 统一切换分类：更新按钮高亮 + 下拉选中 + 重新渲染 */
  function changeCategory(cat) {
    currentCat = cat;
    $sideItems.removeClass('active');
    $sideItems.filter('[data-cat="' + cat + '"]').addClass('active');
    $select.val(cat);
    renderWorks();
  }

  /* 侧边分类点击 */
  $sideItems.on('click', function () {
    changeCategory($(this).data('cat'));
  });

  /* 窄屏下拉切换 */
  $select.on('change', function () {
    changeCategory($(this).val());
  });

  /* 空状态恢复 */
  $('#works-reset').on('click', function () {
    changeCategory('全部');
  });

  renderWorks();
});
