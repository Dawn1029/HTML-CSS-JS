/* ============================================================
 * messages.js —— 留言板
 * 1) 首次访问用 DEFAULT_MESSAGES 初始化 localStorage
 * 2) jQuery 全字段校验：昵称 2-20 字 / 邮箱正则 / 内容 5-200 字
 * 3) 校验通过后留言存入 localStorage 并追加到列表顶部
 * ============================================================ */

$(function () {
  var $form = $('#message-form');
  var $list = $('#message-list');

  /* 初始化留言数据（仅首次写入默认数据） */
  function initMessages() {
    var msgs = storageGet(LS_MSG, null);
    if (msgs === null) {
      storageSet(LS_MSG, DEFAULT_MESSAGES);
      msgs = DEFAULT_MESSAGES;
    }
    return msgs;
  }

  /* HTML 转义，防止用户输入破坏结构 */
  function escapeHtml(str) {
    return $('<div></div>').text(str).html();
  }

  /* 渲染单条留言 */
  function buildMessage(msg) {
    var firstChar = msg.name.charAt(0).toUpperCase();
    return (
      '<div class="message-item">' +
        '<div class="msg-head">' +
          '<span class="msg-avatar">' + escapeHtml(firstChar) + '</span>' +
          '<strong>' + escapeHtml(msg.name) + '</strong>' +
          '<span class="msg-time">' + escapeHtml(msg.time) + '</span>' +
        '</div>' +
        '<p>' + escapeHtml(msg.content) + '</p>' +
      '</div>'
    );
  }

  /* 渲染列表（数据按最新在前存储） */
  function renderMessages() {
    var msgs = storageGet(LS_MSG, []);
    $list.empty();
    if (msgs.length === 0) {
      $list.html('<p class="text-muted">还没有留言，快来抢沙发吧～</p>');
      return;
    }
    $.each(msgs, function (i, msg) {
      $list.append(buildMessage(msg));
    });
  }

  /* 当前时间字符串：YYYY-MM-DD HH:mm */
  function nowString() {
    var d = new Date();
    function pad(n) { return n < 10 ? '0' + n : n; }
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /* 校验留言表单，返回是否通过 */
  function validateForm() {
    var ok = true;

    var $name = $('#msg-name');
    var name = $name.val();
    if (isEmpty(name)) {
      setFieldError($name, '请输入昵称');
      ok = false;
    } else if (!isLengthBetween(name, 2, 20)) {
      setFieldError($name, '昵称长度需为 2-20 个字符');
      ok = false;
    }

    var $email = $('#msg-email');
    var email = $email.val();
    if (isEmpty(email)) {
      setFieldError($email, '请输入邮箱');
      ok = false;
    } else if (!isEmail(email)) {
      setFieldError($email, '邮箱格式不正确');
      ok = false;
    }

    var $content = $('#msg-content');
    var content = $content.val();
    if (isEmpty(content)) {
      setFieldError($content, '请输入留言内容');
      ok = false;
    } else if (!isLengthBetween(content, 5, 200)) {
      setFieldError($content, '留言内容需为 5-200 个字符');
      ok = false;
    }

    return ok;
  }

  /* 提交留言 */
  $form.on('submit', function (e) {
    e.preventDefault();
    if (!validateForm()) { return; }

    var msgs = storageGet(LS_MSG, []);
    var newMsg = {
      name: $.trim($('#msg-name').val()),
      email: $.trim($('#msg-email').val()),
      content: $.trim($('#msg-content').val()),
      time: nowString()
    };
    msgs.unshift(newMsg);            // 最新留言排到最前
    storageSet(LS_MSG, msgs);

    renderMessages();
    $form[0].reset();
    showToast('留言发表成功', 'success');
  });

  /* 输入时清除错误提示 */
  bindAutoClear($form);

  /* 页面初始化 */
  initMessages();
  renderMessages();
});
