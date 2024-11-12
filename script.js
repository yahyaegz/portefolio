document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 995) {
            nav.classList.remove('active');
        }
    });
});