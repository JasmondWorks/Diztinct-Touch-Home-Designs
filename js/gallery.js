// TODO: touch events

const imgContainers = document.querySelectorAll('.img-container');
const body = document.body;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

checkPrevBtn = () => document.querySelector('.img-container:first-child').classList.contains('show') ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';

checkNextBtn = () => document.querySelector('.img-container:last-child').classList.contains('show') ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';

Array.prototype.slice.call(imgContainers).forEach(function (el) {
    el.addEventListener('click', function () {
        this.classList.toggle('show');
        body.classList.toggle('active');
        checkNextBtn();
        checkPrevBtn();
    });
});


prevBtn.addEventListener('click', () => prevImage());

nextBtn.addEventListener('click', () => nextImage());


const gridShape = ['vertical', 'big', 'horizontal', 'img-container']
for (i = 0; i < imgContainers.length; i++) {
    let randomNum = Math.floor(Math.random() * gridShape.length)
    imgContainers[i].classList.add(gridShape[randomNum])
}

