// CREATE BLOG GRID and ITEMS
const createBlogElements = (date, title) => {
  const element = $('.blog-grid').append(`
    <div class="blog-item">
      <img class="img-fluid" src="/Elements/01 Home/blogimg.png" alt="blog-img">
      <article class='blog-article'>
        <p class="blog-date">${date}</p>
        <div class="blog-title">${title}</div>
      </article>
    </div>`);
  return element;
}

const createBlogGrid = (blogs) => {
  for (const blogElement of blogs) {
    createBlogElements(blogElement.date, blogElement.title);
  }
}

// FAKE BLOG DATA
const blogData = [
  {
    date: (new Date(Date.now()).toDateString()).slice(3,10).toUpperCase() + ',' + (new Date(Date.now()).toDateString()).slice(10,15).toUpperCase(), 
    title: `<a href='/'>BLOG POST <br> TITLE HERE</a>`
  },
  {
    date: (new Date(Date.now()).toDateString()).slice(3,10).toUpperCase() + ',' + (new Date(Date.now()).toDateString()).slice(10,15).toUpperCase(), 
    title: `<a href='/'>BLOG POST <br> TITLE HERE</a>`
  },
  {
    date: (new Date(Date.now()).toDateString()).slice(3,10).toUpperCase() + ',' + (new Date(Date.now()).toDateString()).slice(10,15).toUpperCase(), 
    title: `<a href='/'>BLOG POST <br> TITLE HERE</a>`
  },
];

// CREATES INSTAGRAM PICTURE ELEMENTS
const createInstagramElements = (imageNumber) => {
  let rowNumber = '1';
  if (imageNumber > 6) {
    rowNumber = '2';
  };
  console.log(rowNumber)
  const element = $(`.instagram-row-${rowNumber}`).append(`
    <div class="instagram-col" style="background-image: url(/repository/images/instagram/${imageNumber}.jpg)">
      <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
    </div>
  `);
  return element;
}

const createInstagramGrid = () => {
  let i = 1;
  while (i < 13) {
    createInstagramElements(i);
    i++
  }
}

$(document).ready(function() {
  createBlogGrid(blogData);
  createInstagramGrid();
})