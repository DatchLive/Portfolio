'use strict';

let id = new URLSearchParams(location.search).get('id');

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

  document.getElementById('titleElement').innerHTML = blogTitle;
  document.getElementById('contentElement').innerHTML = blogContent;
}
createTexts();
