//      ELEMENT SELECTIONS
// NAV
const hamburger = document.querySelector('.hamburger');
const hamburgerLine1 = document.querySelector('.hamburger__line--1')
const hamburgerLine2 = document.querySelector('.hamburger__line--2')
const hamburgerLine3 = document.querySelector('.hamburger__line--3')
const hamburgerBackground = document.querySelector('.hamburger__background')
const nav = document.querySelector('.nav')


hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
})

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('container');
    if (!nav.contains(e.target) && nav.style.position === "absolute") {
        nav.style.display = 'none';
        console.log('True');
    } else {
        console.log('False');
    }
});




// SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const slidesDesc = document.querySelectorAll('.slide-desc')
const dots = document.querySelectorAll('.dot')

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none"
        dots.forEach((dot, index) => {
            dot.classList.remove("active")
        })
        slidesDesc.forEach((slideDesc, index) => {
            slideDesc.style.display = "none"
        })
    })
    slides[n].style.display = "block"
    slidesDesc[n].style.display = "block"
    dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
    next()
}, 8000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        init(i)
        currentSlide = i
    })
})

// TESTIMONIALS
let testCurrentSlide = 0;
const testDescs = document.querySelectorAll('.testimonials__desc')
const testPersons = document.querySelectorAll('.testimonials__person')

const initialise = (n) => {
    testDescs.forEach((desc, index) => {
        desc.style.display = "none"
        testPersons.forEach((person, index) => {
            person.classList.remove("active")
        })
    })
    testDescs[n].style.display = "block"
    testDescs[n].classList.add('active')
    testPersons[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", initialise(testCurrentSlide))
const testNext = () => {
    testCurrentSlide >= testDescs.length - 1 ? testCurrentSlide = 0 : testCurrentSlide++
    initialise(testCurrentSlide)
}

const testPrev = () => {
    testCurrentSlide <= 0 ? testCurrentSlide = testDescs.length - 1 : testCurrentSlide--
    initialise(testCurrentSlide)
}

setInterval(() => {
    testNext()
}, 8000);

testPersons.forEach((person, i) => {
    person.addEventListener("click", () => {
        initialise(i)
        testCurrentSlide = i
    })
})










