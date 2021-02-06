'use strict';

async function createArticles() {
  const resArticle = await fetch(
    'https://datchlivelog.microcms.io/api/v1/blog',
    {
      headers: { 'X-API-KEY': 'ecd2e202-1e5d-4e56-9153-f45c5400d664' },
    }
  );
  const jsonArticle = await resArticle.json();
  const items = jsonArticle;
  const contents = items.contents;
  const list = contents
    .map(
      (content) =>
        `<li class = "blog-article"><a href="detail.html?id=${content.id}" class = "blog-title"><img src="${content.image.url}" class = "blog-image">${content.title}</a></li>`
    )
    .join('\n');
  document.getElementById('blogs').innerHTML = list;
}

if (document.getElementById('blogs')) {
  createArticles();
}

//URLパラメータからidを取得
let id = new URLSearchParams(location.search).get('id');

//microCMSからコンテンツを取得
async function createTexts() {
  const resText = await fetch(
    `https://datchlivelog.microcms.io/api/v1/blog/${id}`,
    {
      headers: { 'X-API-KEY': 'ecd2e202-1e5d-4e56-9153-f45c5400d664' },
    }
  );
  const jsonText = await resText.json();
  const blogTitle = jsonText.title;
  const blogContent = jsonText.text;

  //画面表示
  document.getElementById('titleElement').innerHTML = blogTitle;
  document.getElementById('contentElement').innerHTML = blogContent;
}

createTexts();

// export { createArticles, createTexts };
