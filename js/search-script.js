const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const productsContainer = document.getElementById('products-container');
const products = productsContainer.getElementsByClassName('container-product');
const navLinks = document.querySelectorAll('nav a');

let platformFilter = 'all';

navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    platformFilter = link.getAttribute('data-platform');
    filterProducts();
  });
});

searchBar.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    filterProducts();
  }
});

searchButton.addEventListener('click', function() {
  filterProducts();
});

function filterProducts() {
    const term = searchBar.value.trim().toLowerCase();
  
    if (term === '') {
      Array.from(products).forEach(function(product, index) {
        product.style.order = index;
        product.style.display = 'block';
      });
      return;
    }
  
    Array.from(products).forEach(function(product) {
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
    });
  
    Array.from(products)
      .sort((a, b) => b.dataset.score - a.dataset.score)
      .forEach(function(product, index) {
        product.style.order = index;
        product.style.display = 'block';
      });
  
    Array.from(products).forEach(function(product) {
      if (product.dataset.score <= 0) {
        product.style.display = 'none';
      }
    });
}
