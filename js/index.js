const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // autoplay: {
    //     delay: 3000,
    // },

});
function scrollMenu(){
    let scrollPos = 100
    let navbar = document.querySelector('.navbar')
    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
        navbar.classList.add('active')
    }else {
        navbar.classList.remove('active')
    }
}
window.onscroll =  () =>  {scrollMenu()}

const burger = document.querySelector('.header__burger')
const navbarMenu = document.querySelector('.navbar-nav')
burger.addEventListener('click', () => {
    if (burger.classList.contains('active')){
        burger.classList.remove('active')
        navbarMenu.classList.remove('navbar-active')
    }else {
        burger.classList.add('active')
        navbarMenu.classList.add('navbar-active')
    }
})

new WOW().init();
