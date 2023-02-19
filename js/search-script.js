const searchBar = document.getElementById('search-bar');
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

searchBar.addEventListener('input', function () {
filterProducts();
});

function filterProducts() {
const term = searchBar.value.toLowerCase();

Array.from(products).forEach(function (product) {
    const platformEl = product.querySelector('.description-product');
    const platform = platformEl.textContent.toLowerCase();

    const titleEls = product.querySelectorAll('.div-pm p');
    const title = Array.from(titleEls).reduce(
    (text, el) => text + el.textContent.toLowerCase(),
    ''
    );

    let showProduct = true;
    if (platformFilter !== 'all') {
    if (platform.indexOf(platformFilter) === -1) {
        showProduct = false;
    }
    }
    for (let i = 0; i < term.length; i++) {
    const char = term.charAt(i);
    const index = title.indexOf(char);
    if (index === -1) {
        showProduct = false;
        break;
    } else {
        title.slice(index + 1);
    }
    }

    if (showProduct) {
    product.style.display = 'block';
    } else {
    product.style.display = 'none';
    }
});
}