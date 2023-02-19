const navLinkselected = document.querySelectorAll('nav a');
navLinkselected.forEach(function(link) {
link.addEventListener('click', function(event) {
    event.preventDefault();
    navLinkselected.forEach(function(link) {
    link.classList.remove('active');
    });
    link.classList.add('active');
    platformFilter = link.getAttribute('data-platform');
    filterProducts();
});
});