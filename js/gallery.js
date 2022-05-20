// TODO: touch events

const imgContainers = document.querySelectorAll('.img-container');
const body = document.body;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function prevImage() {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    // show.previousElementSibling.dispatchEvent(event);
    show.classList.remove('show');
    body.classList.toggle('active');
    // checkNextBtn();

    if (firstImage.classList.contains('show')) {

    } else {
        show.previousElementSibling.dispatchEvent(event);
    }
    checkNextBtn(show)
}

function nextImage() {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    show.nextElementSibling.dispatchEvent(event);
    show.classList.remove('show');
    body.classList.toggle('active');
    // checkPrevBtn();
    checkPrevBtn(show)
}

// checkPrevBtn = () => document.querySelector('.img-container:first-child').classList.contains('show') ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';

// checkNextBtn = () => document.querySelector('.img-container:last-child').classList.contains('show') ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';
function checkPrevBtn(e) {
    const firstImage = document.querySelector('.img-container:first-child')
    if (firstImage.classList.contains('show')) {
        e.imgContainers[imgContainers.length - 1].dispatchEvent(event)
    }
}
function checkNextBtn(e) {
    const lastImage = document.querySelector('.img-container:last-child')
    if (lastImage.classList.contains('show')) {
        e.imgContainers[0].dispatchEvent(event)
    }
}

Array.prototype.slice.call(imgContainers).forEach(function (el) {
    el.addEventListener('click', function () {
        this.classList.toggle('show');
        body.classList.toggle('active');
        checkNextBtn();
        checkPrevBtn();
    });
});

// document.addEventListener('keypress', (e) => {
//     // console.log(e.key);
//     switch ()
// })

prevBtn.addEventListener('click', () => prevImage());

nextBtn.addEventListener('click', () => nextImage());


const gridShape = ['vertical', 'big', 'horizontal', 'img-container']
for (i = 0; i < imgContainers.length; i++) {
    let randomNum = Math.floor(Math.random() * gridShape.length)
    imgContainers[i].classList.add(gridShape[randomNum])
}

