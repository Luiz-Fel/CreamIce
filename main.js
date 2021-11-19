const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const menu = document.querySelectorAll('nav ul li a')


for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

for (const element of menu) {
    element.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}


// header shadow

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;


function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}




/*slider*/

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 1,
            setWrapperSize: true,
            spaceBetween: 300,
        }
    }
});

/*Scroll reveal*/

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links, footer .brand, 
footer .social

`, {interval: 50})


/*Back to top */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop () {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


/* Menu active section */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight/8) *4
    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})


