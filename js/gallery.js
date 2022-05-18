// TODO: touch events

const imgContainers = document.querySelectorAll('.img-container');
const body = document.body;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

checkprevBtn = () => document.querySelector('div:first-child').classList.contains('show') ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';

checknextBtn = () => document.querySelector('div:last-child').classList.contains('show') ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';

Array.prototype.slice.call(imgContainers).forEach(function (el) {
    el.addEventListener('click', function () {
        this.classList.toggle('show');
        body.classList.toggle('active');
        checknextBtn();
        checkprevBtn();
    });
});

prevBtn.addEventListener('click', function (e) {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    // show.previousElementSibling.dispatchEvent(event);
    // console.log(e.currentTarget);
    if (imgContainers[0].classList.contains('show')) {
        const imgContainersLastchild = imgContainers[imgContainers.length - 1]
        show.imgContainersLastchild.dispatchEvent(event)
        console.log('true');
    } else {
        show.previousElementSibling.dispatchEvent(event);
    }
    // if (previousElementSibling == "") {
    //     previousElementSibling = imgContainers[imgContainers.length - 1]
    // }
    show.classList.remove('show');
    body.classList.toggle('active');
    checknextBtn();
});

nextBtn.addEventListener('click', function () {
    const show = document.querySelector('.show');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);

    show.nextElementSibling.dispatchEvent(event);
    show.classList.remove('show');
    body.classList.toggle('active');
    checkprevBtn();
});


// const gridShape = ['vertical', 'big', 'horizontal', 'img-container']
// for (i = 0; i < imgContainers.length; i++) {
//     let randomNum = Math.floor(Math.random() * gridShape.length)
//     imgContainers[i].classList.add(gridShape[randomNum])
//     // console.log(imgContainers[count].classList);
// } 