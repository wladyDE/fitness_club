$(document).ready(function () {
    $(".mobile-menu").click(function () {
        $(".mobile-menu__line").toggleClass("active");
        $(".header__top").toggleClass("active");
        $(".nav").toggleClass("active");
        $("body").toggleClass("overlay");
    });

    $(".header__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button type='button' class='header__slider-prev header__slider-btn btn'></button>",
        nextArrow: "<button type='button' class='header__slider-next header__slider-btn active btn'></button>",
        responsive: [{
            breakpoint: 981,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }]
    });

    $(".gallery__sliders").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.gallery__slider-prev',
        prevArrow: "<button type='button' class='header__slider-prev header__slider-btn btn'></button>",
        nextArrow: "<button type='button' class='header__slider-next header__slider-btn active btn'></button>"
    });

    $(".gallery__slider-prev").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        arrows: false,
        responsive: [{
            breakpoint: 981,
            settings: "unslick"
        }]
    });

    $(".team__sliders").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button type='button' class='header__slider-prev header__slider-btn btn'></button>",
        nextArrow: "<button type='button' class='header__slider-next header__slider-btn active btn'></button>",
        responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $(".testimonial__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button type='button' class='header__slider-prev header__slider-btn btn'></button>",
        nextArrow: "<button type='button' class='header__slider-next header__slider-btn active btn'></button>",
        responsive: [{
            breakpoint: 981,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false,
            }
        },
        {
            breakpoint: 451,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false,
            }
        },
    ]
    });

    $(".header__slider-btn").click(function () {
        $(".header__slider-btn").removeClass("active");
        $(this).addClass("active");
    });

    $(".abonement__block-bottom-form-label").click(function () {
        $(".abonement__block-bottom-form-label").removeClass("active");
        $(this).addClass("active");
    });

    $(".abonement__block-bottom-btn").click(function (event) {
        event.preventDefault();
        $(".abonement__block-bottom-btn").removeClass("active");
        $(this).addClass("active");
    });
});

const headerTop = document.querySelector(".header__top");
const hwHeight = headerTop.offsetHeight;
// console.log(hwHeight);

window.addEventListener("scroll", function () {
    let scrollDistanation = window.scrollY;
    // console.log(scrollDistanation);
    if (scrollDistanation > 93) {
        headerTop.classList.add("header__top-fixed");
    } else {
        headerTop.classList.remove("header__top-fixed");
    }
})