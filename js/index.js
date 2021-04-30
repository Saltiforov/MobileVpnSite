const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    },

});

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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


new WOW().init();
