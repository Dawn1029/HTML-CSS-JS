/* ============================================================
 * auth.js —— 登录 / 注册页
 * 1) jQuery Tab 切换（addClass / removeClass）
 * 2) 全字段校验：用户名 3-20 字、邮箱正则、密码 6-20 位、
 *    确认密码与密码一致（实时比对）
 * 3) 校验通过后模拟登录态，写入 localStorage 并更新导航
 * ============================================================ */

$(function () {
  var $loginForm = $('#login-form');
  var $registerForm = $('#register-form');
  var $tabs = $('.auth-tab');

  /* ---------- Tab 切换 ---------- */
  function switchTab(tab) {
    $tabs.removeClass('active');
    $tabs.filter('[data-tab="' + tab + '"]').addClass('active');
    if (tab === 'login') {
      $loginForm.removeClass('hidden');
      $registerForm.addClass('hidden');
    } else {
      $registerForm.removeClass('hidden');
      $loginForm.addClass('hidden');
    }
  }
  $tabs.on('click', function () {
    switchTab($(this).data('tab'));
  });
  $('#go-register').on('click', function () { switchTab('register'); });
  $('#go-login').on('click', function () { switchTab('login'); });

  /* ---------- 模拟登录：保存登录态并跳转首页 ---------- */
  function loginAs(username) {
    storageSet(LS_USER, { name: username, loginTime: new Date().getTime() });
    renderAuthNav();
    showToast('欢迎回来，' + username + '！', 'success');
    setTimeout(function () {
      location.href = 'index.html';
    }, 800);
  }

  /* ---------- 登录表单校验 ---------- */
  $loginForm.on('submit', function (e) {
    e.preventDefault();
    var ok = true;

    var $username = $('#login-username');
    var username = $username.val();
    if (isEmpty(username)) {
      setFieldError($username, '请输入用户名');
      ok = false;
    } else if (!isLengthBetween(username, 3, 20)) {
      setFieldError($username, '用户名长度需为 3-20 个字符');
      ok = false;
    }

    var $password = $('#login-password');
    var password = $password.val();
    if (isEmpty(password)) {
      setFieldError($password, '请输入密码');
      ok = false;
    } else if (!isPasswordValid(password)) {
      setFieldError($password, '密码长度需为 6-20 位');
      ok = false;
    }

    if (ok) {
      /* 纯前端项目：不校验账号是否真实存在，直接模拟登录 */
      loginAs($.trim(username));
    }
  });

  /* ---------- 注册表单校验 ---------- */
  $registerForm.on('submit', function (e) {
    e.preventDefault();
    var ok = true;

    var $username = $('#reg-username');
    var username = $username.val();
    if (isEmpty(username)) {
      setFieldError($username, '请输入用户名');
      ok = false;
    } else if (!isLengthBetween(username, 3, 20)) {
      setFieldError($username, '用户名长度需为 3-20 个字符');
      ok = false;
    }

    var $email = $('#reg-email');
    var email = $email.val();
    if (isEmpty(email)) {
      setFieldError($email, '请输入邮箱');
      ok = false;
    } else if (!isEmail(email)) {
      setFieldError($email, '邮箱格式不正确');
      ok = false;
    }

    var $password = $('#reg-password');
    var password = $password.val();
    if (isEmpty(password)) {
      setFieldError($password, '请设置密码');
      ok = false;
    } else if (!isPasswordValid(password)) {
      setFieldError($password, '密码长度需为 6-20 位');
      ok = false;
    }

    var $confirm = $('#reg-confirm');
    var confirmValue = $confirm.val();
    if (isEmpty(confirmValue)) {
      setFieldError($confirm, '请再次输入密码');
      ok = false;
    } else if (confirmValue !== password) {
      setFieldError($confirm, '两次输入的密码不一致');
      ok = false;
    }

    if (ok) {
      /* 注册成功即视为登录成功 */
      showToast('注册成功，正在登录…', 'success');
      loginAs($.trim(username));
    }
  });

  /* 确认密码实时比对：仅在已输入且不一致时提示 */
  $('#reg-confirm').on('blur', function () {
    var confirmValue = $(this).val();
    var password = $('#reg-password').val();
    if (confirmValue && password && confirmValue !== password) {
      setFieldError($(this), '两次输入的密码不一致');
    }
  });

  /* 输入时自动清除行内错误 */
  bindAutoClear($loginForm);
  bindAutoClear($registerForm);
});
