const loadMoreButton = document.querySelector('#load-more');
const productsContainer = document.querySelector('#products-container');
const products = Array.from(productsContainer.querySelectorAll('.container-product'));

let displayedProducts = Math.min(20, products.length);

products.forEach((product, index) => {
  if (index < displayedProducts) {
    product.style.display = '';
  } else {
    product.style.display = 'none';
  }
});

loadMoreButton.addEventListener('click', () => {
  displayedProducts += 20;
  
  products.forEach((product, index) => {
    if (index < displayedProducts) {
      product.style.display = '';
    }
  });
  
  if (displayedProducts >= products.length) {
    loadMoreButton.style.display = 'none';
  }
});

if (document.querySelector('#search-button')) {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', () => {
    loadMoreButton.style.display = 'none';
    // Código para executar a pesquisa
  });
}

const searchInput2 = document.getElementById('search-bar');
searchInput2.addEventListener('input', () => {
  if (searchInput2.value === '') {
    displayedProducts = Math.min(20, products.length);
    products.forEach((product, index) => {
      if (index < displayedProducts) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
    loadMoreButton.style.display = '';
  }
});