/* ============================================================
 * cart.js —— 购物车页面
 * 1) 从 localStorage 读取并渲染购物车商品行
 * 2) 数量加减（最小 1）、删除，实时重算总数与总价
 * 3) 空购物车展示空状态
 * 4) 去结算：弹窗提示（模拟）后清空购物车
 * ============================================================ */

$(function () {
  var $list = $('#cart-list');          // 缓存 jQuery 对象，避免重复查询
  var $box = $('#cart-box');
  var $empty = $('#cart-empty');
  var $totalCount = $('#total-count');
  var $totalPrice = $('#total-price');

  /* 保存购物车并同步导航角标 */
  function saveCart(cart) {
    storageSet(LS_CART, cart);
    updateCartBadge();
  }

  /* 价格格式化（免费商品显示 ¥0） */
  function formatPrice(price) {
    return '¥' + price;
  }

  /* 构建单行 HTML */
  function buildCartRow(item) {
    return (
      '<div class="cart-row" data-id="' + item.id + '">' +
        '<a href="work.html?id=' + item.id + '">' +
          '<img class="cart-thumb" src="' + item.cover + '" alt="' + item.title + '缩略图">' +
        '</a>' +
        '<div class="cart-name">' +
          '<strong>' + item.title + '</strong>' +
          '<span class="cart-price">单价：' + formatPrice(item.price) + '</span>' +
        '</div>' +
        '<div class="qty-ctrl">' +
          '<button class="qty-btn qty-minus" aria-label="减少数量">−</button>' +
          '<span class="qty-num">' + item.qty + '</span>' +
          '<button class="qty-btn qty-plus" aria-label="增加数量">+</button>' +
        '</div>' +
        '<div class="cart-subtotal">' + formatPrice(item.price * item.qty) + '</div>' +
        '<button class="cart-remove" aria-label="删除商品">✕</button>' +
      '</div>'
    );
  }

  /* 渲染整个购物车 + 计算汇总（$.each 遍历） */
  function renderCart() {
    var cart = getCart();

    /* 空状态 */
    if (cart.length === 0) {
      $box.addClass('hidden');
      $empty.removeClass('hidden');
      $list.empty();
      return;
    }

    $empty.addClass('hidden');
    $box.removeClass('hidden');

    $list.empty();
    var totalCount = 0;
    var totalPrice = 0;
    $.each(cart, function (i, item) {
      $list.append(buildCartRow(item));
      totalCount += item.qty;
      totalPrice += item.qty * item.price;
    });

    $totalCount.text(totalCount);
    $totalPrice.text(formatPrice(totalPrice));
  }

  /* 数量增加（事件委托，适配动态渲染） */
  $list.on('click', '.qty-plus', function () {
    var id = parseInt($(this).closest('.cart-row').data('id'), 10);
    var cart = getCart();
    $.each(cart, function (i, item) {
      if (item.id === id) { item.qty += 1; }
    });
    saveCart(cart);
    renderCart();
  });

  /* 数量减少（最小为 1） */
  $list.on('click', '.qty-minus', function () {
    var id = parseInt($(this).closest('.cart-row').data('id'), 10);
    var cart = getCart();
    $.each(cart, function (i, item) {
      if (item.id === id && item.qty > 1) { item.qty -= 1; }
    });
    saveCart(cart);
    renderCart();
  });

  /* 删除商品 */
  $list.on('click', '.cart-remove', function () {
    var id = parseInt($(this).closest('.cart-row').data('id'), 10);
    var cart = getCart();
    cart = $.grep(cart, function (item) {
      return item.id !== id;
    });
    saveCart(cart);
    renderCart();
    showToast('商品已从购物车移除');
  });

  /* 去结算：模拟提交，弹窗提示并清空购物车 */
  $('#checkout-btn').on('click', function () {
    if (getCart().length === 0) { return; }
    alert('订单已提交（模拟）：感谢您的购买！');
    storageSet(LS_CART, []);
    updateCartBadge();
    renderCart();
  });

  /* 页面初始化 */
  renderCart();
});
