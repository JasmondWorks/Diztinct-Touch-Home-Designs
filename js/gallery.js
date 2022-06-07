// TODO: touch events

const imgsWrappers = document.querySelectorAll('.gallery__img-wrapper');
const body = document.body;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function prevImage() {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    show.previousElementSibling.dispatchEvent(event);
    show.classList.remove('show');
    body.classList.toggle('active');
    checkNextBtn();
}

function nextImage() {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    show.nextElementSibling.dispatchEvent(event);
    show.classList.remove('show');
    body.classList.toggle('active');
    checkPrevBtn();
}

checkPrevBtn = () => document.querySelector('.gallery__img-wrapper:first-child').classList.contains('show') ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';

checkNextBtn = () => document.querySelector('.gallery__img-wrapper:last-child').classList.contains('show') ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';

Array.prototype.slice.call(imgsWrappers).forEach(function (el) {
    el.addEventListener('click', function () {
        this.classList.toggle('show');
        body.classList.toggle('active');
        checkNextBtn();
        checkPrevBtn();
    });
});

prevBtn.addEventListener('click', () => prevImage());

nextBtn.addEventListener('click', () => nextImage());