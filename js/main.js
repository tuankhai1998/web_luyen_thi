$(document).ready(function () {
    $('.banner-slider').slick({
        arrows: true,
        dots: true,
        prevArrow: `<button type="button" class="prev-arrow"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow"><i class="fas fa-chevron-right"></i></button>`,
    });

    $('.study-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: `<button type="button" class="prev-arrow"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow"><i class="fas fa-chevron-right"></i></button>`,
    });

    $('.study-slider--2').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: `<button type="button" class="prev-arrow"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow"><i class="fas fa-chevron-right"></i></button>`,
    });

    $('.study-slider--3').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: `<button type="button" class="prev-arrow"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow"><i class="fas fa-chevron-right"></i></button>`,
    });

    $('.test-slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: `<button type="button" class="prev-arrow"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow"><i class="fas fa-chevron-right"></i></button>`,
    });


    $('.feel-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<button type="button" class="prev-arrow arrow--big"><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="next-arrow arrow--big"><i class="fas fa-chevron-right"></i></button>`,
    });
});