'use strict';

export const main = document.querySelector('main');

export async function createArticles() {
  const res = await fetch('https://datchlivelog.microcms.io/api/v1/blog', {
    headers: { 'X-API-KEY': 'ecd2e202-1e5d-4e56-9153-f45c5400d664' },
  });
  const json = await res.json();
  const items = json;
  const contents = items.contents;
  contents.forEach(function (item) {
    createArticle(item);
  });
}

export function createArticle(item) {
  const addArticle = document.createElement('article');
  const addImage = document.createElement('img');
  const addTitle = document.createElement('h3');
  addImage.src = item.image.url;
  addTitle.textContent = item.title;
  addArticle.appendChild(addImage);
  addArticle.appendChild(addTitle);
  main.appendChild(addArticle);

  const article = document.querySelector('article');
  article.classList.add('blog-article');

  const title = document.querySelector('h3');
  title.classList.add('blog-title');
}
