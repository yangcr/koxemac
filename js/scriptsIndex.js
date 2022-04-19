const initCarouselNav= () => {
        $('.owl-carousel').owlCarousel({
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 25,
        nav: true,
        dots: true,
        responsive: {
            300: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 4
            },
        }
    });
    ;
};

const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});
initCarouselNav();