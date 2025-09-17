document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    // Sticky header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Hamburger menu
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
