/* ============================================================
 * work.js —— 作品详情页
 * 1) 读取 ?id= 渲染大图、价格、标签、描述与商品信息
 * 2) 加入购物车：写入 localStorage + 更新导航角标 + 按钮反馈
 * 3) 立即购买：加入购物车后跳转购物车页
 * 4) 底部渲染同分类相关推荐（3 件）
 * ============================================================ */

$(function () {
  var id = parseInt(getQueryParam('id'), 10);
  var work = null;
  $.each(WORKS, function (i, item) {
    if (item.id === id) { work = item; }
  });

  var $detail = $('#work-detail');

  /* 商品不存在 */
  if (!work) {
    $detail.html(
      '<div class="empty-state">' +
        '<div class="empty-icon">🔍</div>' +
        '<h3>作品不存在</h3>' +
        '<p>它可能已下架或链接有误。</p>' +
        '<a href="works.html" class="btn btn-primary">返回作品商城</a>' +
      '</div>'
    );
    $('#related-grid').parent().addClass('hidden');
    return;
  }

  document.title = work.title + ' · 林泽的个人博客与作品商城';

  /* 标签 HTML */
  var tagsHtml = '';
  $.each(work.tags, function (i, tag) {
    tagsHtml += '<span class="tag tag-amber">' + tag + '</span>';
  });

  /* 价格展示：付费红色价格 / 免费绿色标签 */
  var priceHtml = work.price > 0
    ? '<span class="big-price">¥' + work.price + '</span>'
    : '<span class="big-price free">免费</span>';

  $detail.html(
    '<div class="detail-layout">' +
      '<div class="detail-gallery">' +
        '<img class="main-img" src="' + work.cover + '" alt="' + work.title + '大图">' +
      '</div>' +
      '<div class="detail-info">' +
        '<h1>' + work.title + '</h1>' +
        priceHtml +
        '<div class="tag-row">' + tagsHtml + '</div>' +
        '<p class="desc">' + work.desc + '</p>' +
        '<ul class="detail-meta">' +
          '<li><span>作品分类</span><span>' + work.category + '</span></li>' +
          '<li><span>交付形式</span><span>源文件 + 使用文档</span></li>' +
          '<li><span>授权方式</span><span>个人商用授权</span></li>' +
          '<li><span>更新时间</span><span>2026-09</span></li>' +
        '</ul>' +
        '<div class="buy-row">' +
          '<button class="btn btn-primary" id="add-cart-btn">🛒 加入购物车</button>' +
          '<button class="btn btn-outline" id="buy-now-btn">立即购买</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );

  /* 加入购物车 */
  $('#add-cart-btn').on('click', function () {
    var $btn = $(this);
    addToCart(work);
    $btn.text('✓ 已加入购物车').prop('disabled', true);
    showToast('已加入购物车', 'success');
    setTimeout(function () {
      $btn.text('🛒 加入购物车').prop('disabled', false);
    }, 2000);
  });

  /* 立即购买：先加入购物车再跳转 */
  $('#buy-now-btn').on('click', function () {
    addToCart(work);
    location.href = 'cart.html';
  });

  /* ---- 相关推荐：同分类优先，不足 3 件用其他作品补齐 ---- */
  var related = $.grep(WORKS, function (item) {
    return item.category === work.category && item.id !== work.id;
  });
  $.each(WORKS, function (i, item) {
    if (related.length >= 3) { return; }
    if (item.id !== work.id && $.inArray(item, related) === -1) {
      related.push(item);
    }
  });

  var $related = $('#related-grid');
  if (related.length === 0) {
    $related.parent().addClass('hidden');
  } else {
    $.each(related.slice(0, 3), function (i, item) {
      $related.append(buildWorkCard(item));
    });
  }
});
