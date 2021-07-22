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
// document.addEventListener('scroll', () => {
    
//     const about = document.querySelector('#about');
//     const about_y = about.getBoundingClientRect().height;
//     const about_bottom = about.getBoundingClientRect().bottom;

//     if (about_y / 2 > about_bottom) {
//         about.classList.add('transparent');
//     } else {
//         about.classList.remove('transparent');
//     }
    
// });

// const about = document.querySelector('#about');
// const about_y = about.getBoundingClientRect().height;
// const about_bottom = about.getBoundingClientRect().bottom;

// console.log(about_y);
// console.log(about_bottom);
// console.log(window.scrollY);

// console.log(about.getBoundingClientRect().height);

// // test
// document.addEventListener('scroll', () => {
    
    // console.log(window.scrollY);
    

// });

// make home slowly fade to transparent as the window scrolls down.home_contact
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// make arrow btn
arrow = document.querySelector('.arrow__btn');
arrow.addEventListener('click', () => {
    scrollIntoView('#Home');
})

document.addEventListener('scroll', () => {
    if(homeHeight / 2 < window.scrollY){
        arrow.classList.add('visible');
    } else{
        arrow.classList.remove('visible');
    }
});


// make scroll bar & when meet section add text box
// section_height_list = [];
// home_123 = document.querySelector('#Home').getBoundingClientRect().height;
// section_height_list[1] = document.querySelector('#about').getBoundingClientRect().height;
// section_height_list[2] = document.querySelector('#skills').getBoundingClientRect().height;
// section_height_list[3] = document.querySelector('#work').getBoundingClientRect().height;
// section_height_list[4] = document.querySelector('#testimonials').getBoundingClientRect().height;
// section_height_list[5] = document.querySelector('#contact').getBoundingClientRect().height;

// scrollbar = document.querySelector('beScrollbar');

// scroll_box = document.querySelector('.scroll_box');


// document.addEventListener('scroll', () => {

//     console.log(home_123 - 100);
//     console.log(window.scrollY);

//     if (home_123 - 500 < window.scrollY){
//         scroll_box.style.background = "tomato";
//     }
//     else {
//         scroll_box.style.background = "black";
//     }
    

// });




// document.addEventListener('scroll', () => {
//     Scroll_y = window.scrollY;
//     while (section_height_list = true) {
//         for(i = 0; i < 6; i++) {
//             if(section_height_list[0] - 100 < Scroll_y) {
//                 scroll_box = document.querySelector('scroll_box');
//                 scroll_box.style.color = blue;

//             }
//             else {

//             }
//         }
//     }
    
// });


// make prohect event
const workBtnContainer = document.querySelector('.work__catagories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if (filter == null) {
        return;
    } else {

        projects.forEach((project => {
            setTimeout(() => {

                if(filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                    
                }else {
    
                        project.classList.add('invisible');
                    
                }
                    
                }, 100);
                
                
        }));

    }
    if (filter == '*') {
        project.classList.add('project_visible');
    }
});