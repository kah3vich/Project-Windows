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