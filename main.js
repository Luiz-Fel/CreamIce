const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const menu = document.querySelectorAll('nav ul li a')

console.log(menu)

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

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})
