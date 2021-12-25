var ReviewsSlider = new Swiper(".ReviewsSlider", {
    navigation: {
        nextEl: ".reviews__sliders .swiper-controls .swiper-button-next",
        prevEl: ".reviews__sliders .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
});



$('#doorSliderButton-1').on('click', function() {
    changeSlide(0)
})
$('#doorSliderButton-2').on('click', function() {
    changeSlide(1)
})
$('#doorSliderButton-3').on('click', function() {
    changeSlide(2)
})
$('#doorSliderButton-4').on('click', function() {
    changeSlide(3)
})



let activeContentDoor = 0
let elementContentCountDoor = 4

$('.door-slider__block-controls-banner-next ').on('click', function() {
    changeSlide('next')
})

$('.door-slider__block-controls-banner-prev').on('click', function() {
    changeSlide('prev')
})

function changeSlide(id) { 
    if(id === 'next') {
        activeContentDoor++
        if (activeContentDoor === elementContentCountDoor) {
            activeContentDoor = 0
        } 
    } else if (id === 'prev') {
        activeContentDoor--
        if (activeContentDoor < 0) {
            activeContentDoor = elementContentCountDoor - 1
        }
    }
    if(activeContentDoor == 0) {
        $('#doorSliderButton-1').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-1').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-1').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(activeContentDoor == 1) {
        $('#doorSliderButton-2').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-2').removeClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-2').removeClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(activeContentDoor == 2) {
        $('#doorSliderButton-3').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-3').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-3').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(activeContentDoor == 3) {
        $('#doorSliderButton-4').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-4').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')

        $('#doorSliderPrice-4').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
    }
    if(id == 0) {
        activeContentDoor = 0
        $('#doorSliderButton-1').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-1').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-1').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(id == 1) {
        activeContentDoor = 1
        $('#doorSliderButton-2').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-2').removeClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-2').removeClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(id == 2) {
        activeContentDoor = 2
        $('#doorSliderButton-3').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-4').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-3').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')
        $('#doorSliderContent-4').addClass('display-n')

        $('#doorSliderPrice-3').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
        $('#doorSliderPrice-4').addClass('display-n')
    }
    if(id == 3) {
        activeContentDoor = 3
        $('#doorSliderButton-4').addClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-2').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-3').removeClass('door-slider__block-controls-items-active')
        $('#doorSliderButton-1').removeClass('door-slider__block-controls-items-active')

        $('#doorSliderContent-4').removeClass('display-n')
        $('#doorSliderContent-2').addClass('display-n')
        $('#doorSliderContent-3').addClass('display-n')
        $('#doorSliderContent-1').addClass('display-n')

        $('#doorSliderPrice-4').removeClass('display-n')
        $('#doorSliderPrice-2').addClass('display-n')
        $('#doorSliderPrice-3').addClass('display-n')
        $('#doorSliderPrice-1').addClass('display-n')
    }
}





var doorOptionSliders = new Swiper(".doorOptionSliders", {
    cssMode: true,
    navigation: {
        nextEl: ".door-options__list .swiper-controls .swiper-button-next",
        prevEl: ".door-options__list .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".door-options__list .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1330: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        450: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});