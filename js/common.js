/* ============================================================
 * common.js —— 全站公共脚本（所有页面引入）
 * 职责：导航栏滚动效果 / 汉堡菜单 / 当前页高亮 /
 *       回到顶部 / 登录态渲染 / 购物车角标 / Toast 提示
 * 依赖：jQuery 3.7.1
 * ============================================================ */

/* localStorage 键名统一管理 */
var LS_CART = 'pp_cart';     // 购物车
var LS_USER = 'pp_user';     // 登录用户
var LS_MSG = 'pp_messages';  // 留言数据

/* ---------- 本地存储工具函数（原生 JS） ---------- */
function storageGet(key, defaultValue) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}
function storageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* 读取 URL 查询参数（原生 JS，文章/作品详情页共用） */
function getQueryParam(name) {
  var reg = new RegExp('(^|[?&])' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) { return decodeURIComponent(r[2]); }
  return null;
}

/* ---------- Toast 轻提示 ---------- */
var toastTimer = null;
function showToast(msg, type) {
  var $toast = $('#global-toast');
  if ($toast.length === 0) {
    $toast = $('<div id="global-toast" class="toast"></div>').appendTo('body');
  }
  $toast.text(msg).removeClass('toast-success');
  if (type === 'success') { $toast.addClass('toast-success'); }
  /* 强制重绘后再加显示类，保证过渡动画生效 */
  void $toast[0].offsetWidth;
  $toast.addClass('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    $toast.removeClass('show');
  }, 2000);
}

/* ---------- 购物车数据操作 ---------- */
function getCart() {
  return storageGet(LS_CART, []);
}
function getCartCount() {
  var cart = getCart();
  var count = 0;
  $.each(cart, function (i, item) { count += item.qty; });
  return count;
}
/* 更新导航栏购物车角标（所有页面共用） */
function updateCartBadge() {
  var count = getCartCount();
  var $badge = $('#cart-count');
  $badge.text(count);
  if (count > 0) {
    $badge.addClass('show');
  } else {
    $badge.removeClass('show');
  }
}

/* 加入购物车：已存在同商品则数量 +1（原生 JS 处理数据） */
function addToCart(work) {
  var cart = getCart();
  var exist = null;
  $.each(cart, function (i, item) {
    if (item.id === work.id) { exist = item; }
  });
  if (exist) {
    exist.qty += 1;
  } else {
    cart.push({
      id: work.id,
      title: work.title,
      price: work.price,
      cover: work.cover,
      qty: 1
    });
  }
  storageSet(LS_CART, cart);
  updateCartBadge();
}

/* ---------- 渲染导航栏登录态 ---------- */
function renderAuthNav() {
  var user = storageGet(LS_USER, null);
  var $auth = $('#nav-auth');
  if (user && user.name) {
    $auth.html(
      '<a href="javascript:;" id="nav-user-name">👤 ' + user.name + '</a>' +
      '<a href="javascript:;" id="nav-logout">退出</a>'
    );
  } else {
    $auth.html('<a href="login.html" id="nav-login-link">登录</a>');
  }
}

$(function () {
  var $header = $('.site-header');
  var $menu = $('.nav-menu');
  var $toggle = $('.nav-toggle');

  /* 1. 当前页面导航高亮：依据 body[data-page] 匹配链接 */
  var currentPage = $('body').data('page');
  $('.nav-menu a').each(function () {
    var href = $(this).attr('href') || '';
    /* 文章/作品详情页分别高亮「博客」「作品」 */
    if ((currentPage === 'article' && href === 'articles.html') ||
        (currentPage === 'work' && href === 'works.html') ||
        (currentPage === 'skills' && href === 'about.html') ||
        (currentPage === 'projects' && href === 'about.html') ||
        (currentPage === 'contact' && href === 'about.html')) {
      $(this).addClass('active');
    } else if (href === currentPage + '.html') {
      $(this).addClass('active');
    }
  });

  /* 2. 滚动监听：导航栏背景切换 + 回到顶部按钮显隐（节流处理） */
  var ticking = false;
  function onScroll() {
    var y = $(window).scrollTop();
    $header.toggleClass('scrolled', y > 50);
    $('#back-to-top').toggleClass('show', y > 200);
    ticking = false;
  }
  $(window).on('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame
        ? window.requestAnimationFrame(onScroll)
        : setTimeout(onScroll, 16);
      ticking = true;
    }
  });
  onScroll();

  /* 3. 手机端汉堡菜单 */
  $toggle.on('click', function () {
    $menu.toggleClass('open');
    $header.toggleClass('menu-open', $menu.hasClass('open'));
  });
  /* 点击菜单项后自动收起 */
  $menu.on('click', 'a', function () {
    if ($menu.hasClass('open')) {
      $menu.removeClass('open');
      $header.removeClass('menu-open');
    }
  });

  /* 4. 回到顶部：jQuery animate 平滑滚动 */
  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* 5. 锚点平滑滚动（关于我页内跳转） */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');
    if (target === '#' || target.length < 2) { return; }
    var $target = $(target);
    if ($target.length) {
      e.preventDefault();
      var top = $target.offset().top - 80; /* 抵消固定导航高度 */
      $('html, body').animate({ scrollTop: top }, 500);
    }
  });

  /* 6. 登录态 + 购物车角标 */
  renderAuthNav();
  updateCartBadge();

  /* 7. 退出登录（事件委托，元素为动态渲染） */
  $('.nav-menu').on('click', '#nav-logout', function () {
    if (confirm('确定要退出登录吗？')) {
      localStorage.removeItem(LS_USER);
      renderAuthNav();
      showToast('已退出登录');
      setTimeout(function () { location.reload(); }, 600);
    }
  });
});
