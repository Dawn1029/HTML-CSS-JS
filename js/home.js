/* ============================================================
 * home.js —— 首页动态渲染：最新文章 + 精选作品
 * 卡片构建函数见 cards.js
 * ============================================================ */

$(function () {
  /* 最新文章：按日期倒序取前 3 篇 */
  var latestArticles = ARTICLES.slice(0, 3);
  var $articleGrid = $('#latest-articles');
  if ($articleGrid.length) {
    if (latestArticles.length === 0) {
      $articleGrid.html('<p class="text-muted">暂无内容</p>');
    } else {
      $.each(latestArticles, function (i, item) {
        $articleGrid.append(buildArticleCard(item));
      });
    }
  }

  /* 精选作品：取前 4 件 */
  var featuredWorks = WORKS.slice(0, 4);
  var $workGrid = $('#featured-works');
  if ($workGrid.length) {
    if (featuredWorks.length === 0) {
      $workGrid.html('<p class="text-muted">暂无内容</p>');
    } else {
      $.each(featuredWorks, function (i, item) {
        $workGrid.append(buildWorkCard(item));
      });
    }
  }
});
