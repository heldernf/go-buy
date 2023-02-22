const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const productsContainer = document.getElementById('products-container');
const products = productsContainer.getElementsByClassName('container-product');
const navLinks = document.querySelectorAll('nav a');
const loadMoreButton = document.getElementById('load-more');

let platformFilter = 'all';
let visibleProducts = 10;

navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    platformFilter = link.getAttribute('data-platform');
    visibleProducts = 10;
    filterProducts();
  });
});

searchBar.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    visibleProducts = 10;
    filterProducts();
  }
});

searchButton.addEventListener('click', function() {
  visibleProducts = 10;
  filterProducts();
});

loadMoreButton.addEventListener('click', function() {
  visibleProducts += 10;
  filterProducts();
});

function filterProducts() {
  const term = searchBar.value.trim().toLowerCase();

  Array.from(products).forEach(function(product, index) {
    const titleEls = product.querySelectorAll('.div-pm p');
    const title = Array.from(titleEls).reduce(
      (text, el) => text + el.textContent.toLowerCase(),
      ''
    );

    const platformEl = product.querySelector('.description-product');
    const platform = platformEl.textContent.toLowerCase();

    let score = 0;
    let idx = -1;
    for (let i = 0; i < term.length; i++) {
      const char = term.charAt(i);
      const index = title.indexOf(char, idx + 1);
      if (index === -1) {
        break;
      }
      score += 1 / (index + 1);
      idx = index;
    }

    if (platformFilter !== 'all' && platform.indexOf(platformFilter) === -1) {
      score = -1;
    }

    product.dataset.score = score;
    product.style.display = 'none';
  });

  Array.from(products)
    .sort((a, b) => b.dataset.score - a.dataset.score)
    .forEach(function(product, index) {
      if (index < visibleProducts) {
        product.style.order = index;
        product.style.display = 'block';
      }
    });

  if (visibleProducts >= Array.from(products).filter(product => product.style.display !== 'none').length) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block';
  }
}












// const searchBar = document.getElementById('search-bar');
// const searchButton = document.getElementById('search-button');
// const productsContainer = document.getElementById('products-container');
// const products = productsContainer.getElementsByClassName('container-product');
// const navLinks = document.querySelectorAll('nav a');
// const loadMoreButton = document.getElementById('load-more');
// let platformFilter = 'all';
// let visibleProducts = 5;

// navLinks.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//     platformFilter = link.getAttribute('data-platform');
//     filterProducts();
//   });
// });

// searchBar.addEventListener('keyup', function(event) {
//   if (event.keyCode === 13) {
//     filterProducts();
//   }
// });

// searchButton.addEventListener('click', function() {
//   filterProducts();
// });

// loadMoreButton.addEventListener('click', function() {
//   visibleProducts += 5;
//   showProducts();
// });

// function filterProducts() {
//   const term = searchBar.value.trim().toLowerCase();

//   if (term === '') {
//     Array.from(products).forEach(function(product, index) {
//       product.style.order = index;
//       product.style.display = 'block';
//     });
//     visibleProducts = 5;
//     showProducts();
//     return;
//   }

//   Array.from(products).forEach(function(product) {
//     const titleEls = product.querySelectorAll('.div-pm p');
//     const title = Array.from(titleEls).reduce(
//       (text, el) => text + el.textContent.toLowerCase(),
//       ''
//     );

//     const platformEl = product.querySelector('.description-product');
//     const platform = platformEl.textContent.toLowerCase();

//     let score = 0;
//     let idx = -1;
//     for (let i = 0; i < term.length; i++) {
//       const char = term.charAt(i);
//       const index = title.indexOf(char, idx + 1);
//       if (index === -1) {
//         break;
//       }
//       score += 1 / (index + 1);
//       idx = index;
//     }

//     if (platformFilter !== 'all' && platform.indexOf(platformFilter) === -1) {
//       score = -1;
//     }

//     product.dataset.score = score;
//   });

//   Array.from(products)
//     .sort((a, b) => b.dataset.score - a.dataset.score)
//     .forEach(function(product, index) {
//       product.style.order = index;
//       product.style.display = 'block';
//     });

//   Array.from(products).forEach(function(product) {
//     if (product.dataset.score <= 0) {
//       product.style.display = 'none';
//     }
//   });

//   if (term !== '') {
//     visibleProducts = 5;
//   }

//   showProducts();
// }

// function showProducts() {
//   for (let i = 0; i < products.length; i++) {
//     if (i < visibleProducts) {
//       products[i].style.display = 'block';
//     } else {
//       products[i].style.display = 'none';
//     }
//   }

//   if (visibleProducts >= products.length) {
//     loadMoreButton.style.display = 'none';
//   } else {
//     loadMoreButton.style.display = 'block';
//   }
// }

// showProducts();