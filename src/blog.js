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

createArticles();
