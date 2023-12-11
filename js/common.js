
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
    centerInsufficientSlides:true,
    centeredSlides:true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper__btn--next',
        prevEl: '.swiper__btn--prev',
    },
});

function getPics() {}
const imgs = document.querySelectorAll('.reviews__img');
const fullPage = document.querySelector('#fullpage');
const fullpageVideo = document.querySelector('#fullpageVideo');
const imgChild = document.querySelector('#fullpageImg');
const close = document.querySelector('#modalClose');
const closeVideo = document.querySelector('#modalCloseVideo');
const outside = document.querySelector('#outsideModal');


imgs.forEach(img => {
    img.addEventListener('click', function() {


        imgChild.src=img.src
        // fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.position = 'fix';
        fullPage.style.display = 'flex';
    });
});
close.addEventListener('click', function() {
    fullPage.style.display = 'none';
});
outside.addEventListener('click', function() {
    fullPage.style.display = 'none';
});
document.querySelector('.prise__radio-group').addEventListener('click', function(ev) {
    console.log(ev.target.dataset.text)
    console.log(document.querySelector('.prise__card-btn-js'))
    document.querySelector('.prise__card-btn-js').innerHTML=ev.target.dataset.text ?? '18443р в месяц'
});


const playVideo =document.querySelector('.js-video-open');
const ModalVideo =document.querySelector('#fullpageVideoModal');
playVideo.addEventListener('click', function(e) {
    e.preventDefault()
    fullpageVideo.style.position = 'fix';
    fullpageVideo.style.display = 'flex';
    ModalVideo.innerHTML='<iframe\n' +
        '\t\t\t\t\t\t\t\t\t\tid="video1"\n' +
        '\t\t\t\t\t\t\t\t\t\timportance="low"\n' +
        '\t\t\t\t\t\t\t\t\t\tloading="lazy"\n' +
        '\t\t\t\t\t\t\t\t\t\twidth="100%" height="100%" src="https://www.youtube.com/embed/NA1EhvqCm50?si=fQfHfsUlAQhw1Eh4" data-src="ss"\n' +
        '\t\t\t\t\t\t\t\t\t\ttitle="YouTube video player" frameborder="0"\n' +
        '\t\t\t\t\t\t\t\t\t\tallow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n' +
        '\t\t\t\t\t\t\t\t\t\tallowfullscreen></iframe>'
});
closeVideo.addEventListener('click', function() {
    ModalVideo.innerHTML=''
    fullpageVideo.style.display ='none'

});


