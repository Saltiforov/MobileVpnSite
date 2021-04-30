function scrollMenu(){
    let scrollPos = 100
    let navbar = document.querySelector('.navbar')
    const collapse = document.querySelector('.navbar-collapse')
    const brandImg = document.querySelector('.navbar-brand')
    const navInner = document.querySelector('.navbar__inner')
    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
        navbar.classList.add('active')
        collapse.classList.add('active')
        brandImg.classList.add('active')
        navInner.classList.add('active')
    }else {
        navbar.classList.remove('active')
        collapse.classList.remove('active')
        brandImg.classList.remove('active')
        navInner.classList.remove('active')
    }
}
window.onscroll =  () =>  {scrollMenu()}
