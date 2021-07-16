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

// Make navbar when click scroll to what you click(my_work)
// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click', (event) => {
    
//     const target = event.target;
//     const link = target.dataset.link;
    
//     if (link == null) {
//         return;
//     }
//     console.log(target.dataset.link);

//     const targetY = document.getElementById(target.dataset.link);
//     const targetY_start = targetY.getBoundingClientRect().height;
//     const targetY_end = targetY.getBoundingClientRect().bottom;
//     const targetY_height = targetY_end - targetY_start;

//     window.scrollTo({top: targetY_height, left:0, behavior:'smooth'});

// })


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    
    if (link == null) {
        return;
    }
    console.log(target.dataset.link);

    const scrollTo = document.getElementById(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
    

});