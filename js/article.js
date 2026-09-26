/* ============================================================
 * article.js —— 文章详情页
 * 1) 读取 URL 查询参数 id，从 ARTICLES 中查找文章
 * 2) 动态渲染标题 / 发布信息 / 封面 / 正文（段落、标题、
 *    列表、代码块、引用）/ 标签
 * 3) 文末上一篇 / 下一篇导航（无内容时按钮置灰）
 * ============================================================ */

$(function () {
  var id = parseInt(getQueryParam('id'), 10);
  var index = -1;
  $.each(ARTICLES, function (i, item) {
    if (item.id === id) { index = i; }
  });

  var $card = $('#article-card');
  var $nav = $('#article-nav');

  /* 找不到文章：展示错误状态 */
  if (index === -1) {
    $card.html(
      '<div class="empty-state">' +
        '<div class="empty-icon">🔍</div>' +
        '<h3>文章不存在</h3>' +
        '<p>它可能已被删除或链接有误。</p>' +
        '<a href="articles.html" class="btn btn-primary">返回文章列表</a>' +
      '</div>'
    );
    return;
  }

  var article = ARTICLES[index];
  document.title = article.title + ' · 林泽的个人博客与作品商城';

  /* ---- 标题与发布信息 ---- */
  $card.append('<h1>' + article.title + '</h1>');
  $card.append(
    '<div class="article-info">' +
      '<span>📅 ' + article.date + '</span>' +
      '<span>✍️ ' + article.author + '</span>' +
      '<span>👁 ' + article.views + ' 阅读</span>' +
    '</div>'
  );
  $card.append('<div class="article-cover"><img src="' + article.cover + '" alt="' + article.title + '封面图"></div>');

  /* ---- 正文：按 block 类型逐段渲染 ---- */
  var $content = $('<div class="article-content"></div>');
  $.each(article.body, function (i, block) {
    if (block.type === 'p') {
      $content.append($('<p></p>').text(block.text));
    } else if (block.type === 'h2') {
      $content.append($('<h2></h2>').text(block.text));
    } else if (block.type === 'h3') {
      $content.append($('<h3></h3>').text(block.text));
    } else if (block.type === 'quote') {
      $content.append($('<blockquote></blockquote>').text(block.text));
    } else if (block.type === 'ul') {
      var $ul = $('<ul></ul>');
      $.each(block.items, function (j, li) {
        $ul.append($('<li></li>').text(li));
      });
      $content.append($ul);
    } else if (block.type === 'code') {
      /* 用 .text() 写入代码，自动转义 < > 等字符 */
      var $pre = $('<pre><code></code></pre>');
      $pre.find('code').text(block.text);
      $content.append($pre);
    }
  });
  $card.append($content);

  /* ---- 文末标签 ---- */
  var tagsHtml = '<div class="article-tags"><span class="tag tag-amber">' + article.tag + '</span></div>';
  $card.append(tagsHtml);

  /* ---- 上一篇 / 下一篇 ---- */
  var prev = index > 0 ? ARTICLES[index - 1] : null;
  var next = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;

  var prevHtml = prev
    ? '<a href="article.html?id=' + prev.id + '"><span class="nav-label">← 上一篇</span>' + prev.title + '</a>'
    : '<a class="disabled"><span class="nav-label">← 上一篇</span>没有了</a>';
  var nextHtml = next
    ? '<a href="article.html?id=' + next.id + '" class="nav-next"><span class="nav-label">下一篇 →</span>' + next.title + '</a>'
    : '<a class="disabled nav-next"><span class="nav-label">下一篇 →</span>没有了</a>';
  $nav.html(prevHtml + nextHtml);

  /* ---- 分享按钮（模拟） ---- */
  $('#share-btn').on('click', function () {
    showToast('分享链接已复制（模拟）', 'success');
  });
});
