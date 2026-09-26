/* ============================================================
 * articles.js —— 文章列表页
 * 1) jQuery 标签筛选（全部 + 分类），重新渲染卡片
 * 2) 超过单页数量时「加载更多」动态追加
 * 3) 筛选结果为空时展示空状态
 * ============================================================ */

$(function () {
  var PAGE_SIZE = 6;                 // 每次渲染条数
  var currentTag = '全部';           // 当前选中标签
  var visibleCount = PAGE_SIZE;      // 当前已展示条数

  var $grid = $('#article-grid');
  var $empty = $('#article-empty');
  var $loadMoreWrap = $('#load-more-wrap');

  /* 按当前标签筛选数据 */
  function getFiltered() {
    if (currentTag === '全部') { return ARTICLES; }
    return $.grep(ARTICLES, function (item) {
      return item.tag === currentTag;
    });
  }

  /* 渲染：根据 visibleCount 决定渲染多少条 */
  function renderArticles() {
    var list = getFiltered();
    $grid.empty();

    /* 空状态 */
    if (list.length === 0) {
      $empty.removeClass('hidden');
      $grid.addClass('hidden');
      $loadMoreWrap.addClass('hidden');
      return;
    }
    $empty.addClass('hidden');
    $grid.removeClass('hidden');

    var showList = list.slice(0, visibleCount);
    $.each(showList, function (i, item) {
      $grid.append(buildArticleCard(item));
    });

    /* 还有更多数据时显示按钮 */
    if (visibleCount < list.length) {
      $loadMoreWrap.removeClass('hidden');
    } else {
      $loadMoreWrap.addClass('hidden');
    }
  }

  /* 标签点击筛选 */
  $('#tag-filter').on('click', '.filter-btn', function () {
    $('#tag-filter .filter-btn').removeClass('active');
    $(this).addClass('active');
    currentTag = $(this).data('tag');
    visibleCount = PAGE_SIZE;   // 切换标签重置计数
    renderArticles();
  });

  /* 加载更多 */
  $('#load-more').on('click', function () {
    visibleCount += PAGE_SIZE;
    renderArticles();
  });

  /* 空状态快捷恢复 */
  $('#empty-reset').on('click', function () {
    $('#tag-filter .filter-btn').removeClass('active');
    $('#tag-filter .filter-btn[data-tag="全部"]').addClass('active');
    currentTag = '全部';
    visibleCount = PAGE_SIZE;
    renderArticles();
  });

  /* 初始化 */
  renderArticles();
});
