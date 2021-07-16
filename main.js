'ust strict';


// Make Navbar transparent when you scroll
document.addEventListener('scroll', () => {
    const scroll_y = window.scrollY;
    const navbar_id= document.getElementById('navbar');
    const start_y = navbar_id.getBoundingClientRect().height;
    const end_y = navbar_id.getBoundingClientRect().bottom;
    const height = end_y - start_y;

    if (scroll_y > height) {
        navbar_id.classList.add('navbar__transparent');
    } else {
        navbar_id.classList.remove('navbar__transparent');
    }
});