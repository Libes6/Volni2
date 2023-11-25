
const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.learn__block-wrap');
    if (elTabBtn.classList.contains('learn__block--b--active')) {
        return;
    }
    const targetId = elTabBtn.dataset.targetId;
    const elTabPane = elTab.querySelector(`.learn__block--b[data-id="${targetId}"]`);
    console.log(elTabPane)
    if (elTabPane) {
        const elTabBtnActive = elTab.querySelector('.learn__block--active');
        elTabBtnActive.classList.remove('learn__block--active');
        const elTabPaneShow = elTab.querySelector('.learn__block--b--active');
        elTabPaneShow.classList.remove('learn__block--b--active');
        elTabBtn.classList.add('learn__block--active');
        elTabPane.classList.add('learn__block--b--active');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.learn__block')) {
        return;
    }
    const elTabBtn = e.target.closest('.learn__block');
    console.log(elTabBtn)
    showTab(elTabBtn);
});


document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.course-btn-js')) {
        return;
    }
    const wrapp = document.querySelector('.course-wrap-js');
    const btn = document.querySelector('.course-btn-js');
    wrapp.classList.add('course-wrap--visible-all');
    btn.classList.add('course-btn-js-disabled');
});




const boxes = Array.from(document.querySelectorAll(".faq__card"));
console.log(boxes)
boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    // e.preventDefault();
    let currentBox = e.target.closest(".faq__card");

    let currentContent = currentBox.children[1];

    // Array.from(document.querySelectorAll(".faq__card")).forEach((box) => {
    //     console.log(box)
    //     if (box.classList.contains('active')){
    //         console.log('active')
    //         box.classList.remove('active')
    //     }
    // });

    currentBox.classList.toggle("active");

    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
    } else {
        currentContent.style.maxHeight = 0;
    }
}
const swiper = new Swiper(".reviews__swiper", {

    loop: true,
    slidesPerView: 'auto',
    // slidesPerColumn: 2,
    centerInsufficientSlides:true,
    // watchOverflow: true,
    centeredSlides:true,
    spaceBetween: 20,
    // simulateTouch:true,

    navigation: {
        nextEl: '.swiper__btn--next',
        prevEl: '.swiper__btn--prev',
    },
});

function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.reviews__img');
const fullPage = document.querySelector('#fullpage');
console.log(imgs)
imgs.forEach(img => {
    img.addEventListener('click', function() {
        console.log(img)
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.position = 'fix';
        fullPage.style.display = 'block';
    });
});
document.querySelector('.prise__radio-group').addEventListener('click', function(ev) {
    console.log(ev.target.dataset.text)
    console.log(document.querySelector('.prise__card-btn-js'))
    document.querySelector('.prise__card-btn-js').innerHTML=ev.target.dataset.text ?? '18443р в месяц'
});


