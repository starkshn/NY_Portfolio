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


function scrollIntoView(selector) {

    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});

}

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

const navbarMenu_1 = document.querySelector('.navbar__menu__item');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');

console.log(navbarMenu_1);
console.log(navbarMenuItem);
console.log(navbarMenuItem[1].dataset.link);

navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    
    if (link == null) {
        return;
    }
    // console.log(target.dataset.link);

    scrollIntoView('#' + link);
    
});

//  move to contact btn
move_to_contact = document.querySelector('.home__contact');

move_to_contact.addEventListener('click', () =>{
    
    scrollIntoView('#contact');

});


// make section transparent
// document.addEventListener('scroll', () => {
//     const home = document.querySelector('#Home');
//     const home_y = home.getBoundingClientRect().height;
//     const home_end_y = home.getBoundingClientRect().bottom;
//     const scroll = window.scrollY;

//     if (home_y / 2 > home_end_y) {
//         home.classList.add('transparent');
//     } else {
//         home.classList.remove('transparent');
//     }
// });

// make about transparent when scroll
document.addEventListener('scroll', () => {
    
    const about = document.querySelector('#about');
    const about_y = about.getBoundingClientRect().height;
    const about_bottom = about.getBoundingClientRect().bottom;

    if (about_y / 2 > about_bottom) {
        about.classList.add('transparent');
    } else {
        about.classList.remove('transparent');
    }
    
});

const about = document.querySelector('#about');
const about_y = about.getBoundingClientRect().height;
const about_bottom = about.getBoundingClientRect().bottom;

console.log(about_y);
console.log(about_bottom);
console.log(window.scrollY);

console.log(about.getBoundingClientRect().height);

// test
document.addEventListener('scroll', () => {
    
    // console.log(window.scrollY);
    

});

// make home slowly fade to transparent as the window scrolls down.home_contact


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
})