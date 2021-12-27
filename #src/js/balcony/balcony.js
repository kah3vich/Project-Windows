$("#balconyBannerPhone").mask("+7(999) 99-99-999");
$("#balconyFormsPhone").mask("+7(999) 99-99-999");
$("#acsFormPhone").mask("+7(999) 99-99-999");

$('#balconyTabsItems-1').on('click', () => {
    $('#balconyTabsItems-1').addClass('balcony-tab__tabs-items-active')
    $('#balconyTabsItems-2').removeClass('balcony-tab__tabs-items-active')
})
$('#balconyTabsItems-2').on('click', () => {
    $('#balconyTabsItems-2').addClass('balcony-tab__tabs-items-active')
    $('#balconyTabsItems-1').removeClass('balcony-tab__tabs-items-active')
}) 

const accordionItemsCount = 3

for ( let i = 1; accordionItemsCount >= i; i++ ) {
    $(`#accordionItems-${i}`).on('click', () => {
        for ( let j = 1; accordionItemsCount >= j; j++ ) {
            $(`#accordionItems-${j} .balcony-knowledge__accordion-title-icons`).removeClass('rotate-45');
            $(`#accordionItems-${j} .balcony-knowledge__accordion-text`).addClass('display-n')
        }
        $(`#accordionItems-${i} .balcony-knowledge__accordion-title-icons`).addClass('rotate-45');
        $(`#accordionItems-${i} .balcony-knowledge__accordion-text`).removeClass('display-n')
    });
}


var balconyItes = new Swiper(".balconyItes", {
    cssMode: true,
    navigation: {
        nextEl: ".balcony-tab__list .swiper-controls .swiper-button-next",
        prevEl: ".balcony-tab__list .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".balcony-tab__list .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1330: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        1000: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});