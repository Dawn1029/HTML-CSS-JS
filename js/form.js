/* ============================================================
 * form.js —— 表单校验公共模块（原生 JS 规则 + jQuery 提示）
 * 留言板 / 登录注册页共用：
 *   昵称 2-20 字、用户名 3-20 字、邮箱正则、密码 6-20 位
 * ============================================================ */

/* 邮箱正则（PRD 规定） */
var EMAIL_REG = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- 校验规则函数：返回 true / false ---------- */
function isEmpty(value) {
  return $.trim(value) === '';
}
function isLengthBetween(value, min, max) {
  var len = $.trim(value).length;
  return len >= min && len <= max;
}
function isEmail(value) {
  return EMAIL_REG.test($.trim(value));
}
function isPasswordValid(value) {
  return value.length >= 6 && value.length <= 20;
}

/* ---------- 行内错误提示（jQuery 动态插入/更新） ---------- */
function setFieldError($field, message) {
  $field.addClass('error');
  var $error = $field.siblings('.field-error');
  if ($error.length === 0) {
    /* 容错：若 HTML 中没有错误节点，则动态插入 */
    $field.after('<div class="field-error show"></div>');
    $error = $field.siblings('.field-error');
  }
  $error.text(message).addClass('show');
}

function clearFieldError($field) {
  $field.removeClass('error');
  $field.siblings('.field-error').removeClass('show').text('');
}

/* 输入时自动清除该字段错误提示 */
function bindAutoClear($form) {
  $form.on('input change', '.form-control', function () {
    clearFieldError($(this));
  });
}
