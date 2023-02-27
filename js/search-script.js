const searchInput = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
let platformFilter = 'all';

searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value.trim().toLowerCase();

  document.querySelectorAll('.container-product').forEach(container => {
    const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
    const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

    if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchValue)) {
      container.style.display = '';
    } else {
      container.style.display = 'none';
    }
  });
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    link.classList.add('active');

    platformFilter = link.getAttribute('data-platform');

    document.querySelectorAll('.container-product').forEach(container => {
      const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
      const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

      if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchInput.value.trim().toLowerCase())) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    });
  });
});

searchInput.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    event.preventDefault();

    const searchValue = searchInput.value.trim().toLowerCase();

    document.querySelectorAll('.container-product').forEach(container => {
      const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
      const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

      if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchValue)) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    });
  }
});

// Codigo perfeito da search bar// Codigo perfeito da search bar// Codigo perfeito da search bar// Codigo perfeito da search bar// Codigo perfeito da search bar

// const searchInput = document.querySelector('#search-bar');
// const searchButton = document.querySelector('#search-button');
// let platformFilter = 'all';

// searchButton.addEventListener('click', () => {
//   const searchValue = searchInput.value.toLowerCase();

//   document.querySelectorAll('.container-product').forEach(container => {
//     const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
//     const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

//     if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchValue)) {
//       container.style.display = '';
//     } else {
//       container.style.display = 'none';
//     }
//   });
// });

// const navLinks = document.querySelectorAll('nav ul li a');

// navLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault();

//     navLinks.forEach(navLink => {
//       navLink.classList.remove('active');
//     });

//     link.classList.add('active');

//     platformFilter = link.getAttribute('data-platform');

//     document.querySelectorAll('.container-product').forEach(container => {
//       const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
//       const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

//       if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchInput.value.toLowerCase())) {
//         container.style.display = '';
//       } else {
//         container.style.display = 'none';
//       }
//     });
//   });
// });

// searchInput.addEventListener('keydown', event => {
//   if (event.keyCode === 13) {
//     event.preventDefault();

//     const searchValue = searchInput.value.toLowerCase();

//     document.querySelectorAll('.container-product').forEach(container => {
//       const productText = container.querySelector('p:first-of-type').textContent.toLowerCase();
//       const platformText = container.querySelector('p.description-product').textContent.toLowerCase();

//       if ((platformFilter === 'all' || platformText.includes(platformFilter)) && productText.includes(searchValue)) {
//         container.style.display = '';
//       } else {
//         container.style.display = 'none';
//       }
//     });
//   }
// });