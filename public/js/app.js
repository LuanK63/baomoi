window.addEventListener('scroll', () => {

    const header = document.getElementsByTagName('header')[0]
    
    if(window.scrollY > 60) {
        header.classList.add('active-header')
    } else {
        header.classList.remove('active-header')
    }
})

const iconMenu = document.querySelector(".icon-menu");
iconMenu.addEventListener('click', () => {
    const wpSubMenu = document.querySelector('.wp-sub-menu')
    wpSubMenu.classList.toggle('active')
})
