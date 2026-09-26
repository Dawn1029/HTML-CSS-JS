/* ============================================================
 * cards.js —— 卡片 HTML 构建公共模块
 * 供首页 / 文章列表页 / 作品展示页等复用
 * ============================================================ */

/* 文章卡片 */
function buildArticleCard(item) {
  return (
    '<article class="card">' +
      '<a href="article.html?id=' + item.id + '">' +
        '<div class="card-cover"><img src="' + item.cover + '" alt="' + item.title + '封面图" loading="lazy"></div>' +
      '</a>' +
      '<div class="card-body">' +
        '<a href="article.html?id=' + item.id + '"><h3 class="card-title">' + item.title + '</h3></a>' +
        '<div class="card-meta">📅 ' + item.date + ' · 👁 ' + item.views + ' 阅读</div>' +
        '<p class="card-excerpt">' + item.excerpt + '</p>' +
        '<div class="card-foot">' +
          '<span class="tag tag-amber">' + item.tag + '</span>' +
          '<a href="article.html?id=' + item.id + '" class="section-more">阅读全文 →</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

/* 作品卡片 */
function buildWorkCard(item) {
  var priceHtml = item.price > 0
    ? '<span class="price">¥' + item.price + '</span>'
    : '<span class="price-free">免费</span>';
  return (
    '<article class="card">' +
      '<a href="work.html?id=' + item.id + '">' +
        '<div class="card-cover"><img src="' + item.cover + '" alt="' + item.title + '封面图" loading="lazy"></div>' +
      '</a>' +
      '<div class="card-body">' +
        '<a href="work.html?id=' + item.id + '"><h3 class="card-title">' + item.title + '</h3></a>' +
        '<div class="card-meta">' + item.category + '</div>' +
        '<div class="card-foot">' + priceHtml +
          '<span class="tag">' + item.tags[0] + '</span>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}
