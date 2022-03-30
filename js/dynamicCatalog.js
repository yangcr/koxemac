const dynamicContent = document.querySelector(".dynamic-content__container");

const buttonElastico = document.querySelector("#buttonElastico");

function initCarousel() {$('.owl-carousel').owlCarousel({
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
}



const reforzado = [
    {
        id: 1,
    imagen: "../images/carousel-cierres/1.jpg"
    },

    {
        id: 2,
    imagen: "../images/carousel-cierres/2.jpg"
    },

    {
        id: 3,
    imagen: "../images/carousel-cierres/3.jpg"
    },

    {
        id: 4,
    imagen: "../images/carousel-cierres/4.jpg"
    },

    {
        id: 5,
    imagen: "../images/carousel-cierres/5.jpg"
    },

    {
        id: 6,
    imagen: "../images/carousel-cierres/6.jpg"
    },

    {
        id: 7,
    imagen: "../images/carousel-cierres/7.jpg"
    },

    {
        id: 8,
    imagen: "../images/carousel-cierres/8.jpg"
    },

    {
        id: 9,
    imagen: "../images/carousel-cierres/9.jpg"
    },
]

buttonElastico.addEventListener('click', ()=> {
    dynamicContent.textContent='';
    const productHeader = document.createElement("h2");
    productHeader.classList.add('product__title');
    productHeader.textContent = "Elasticos";

    const productItem = document.createElement("div");
    productItem.classList.add("product__item","product__shadow");

    const productTextContainer = document.createElement("div");
    productTextContainer.classList.add("product__text-container");

    const productTitle = document.createElement("h3");
    productTitle.classList.add("product__title");
    productTitle.textContent = "REFORZADOS";

    const productSubtitle = document.createElement("p");
    productSubtitle.classList.add("product__subtitle");
    productSubtitle.textContent = "Un subtitulo del producto";

    const productDetails = document.createElement("p");
    productDetails.classList.add("product__details");
    productDetails.textContent = "Lorem ipsum ipsam quos, enim nostrum debitis obcaecaiti porro quam officiis laborum inventore aspernatur cupiditate omnis corrupti, culpa maiores velit tempora dignissimos.";

    productTextContainer.appendChild(productTitle);
    productTextContainer.appendChild(productSubtitle);
    productTextContainer.appendChild(productDetails);


    

    const carouselWrapper = document.createElement("div");
    carouselWrapper.classList.add("carousel");

    const owlCarousel = document.createElement("div");
    owlCarousel.classList.add("owl-carousel");
    owlCarousel.classList.add("owl-theme");

    reforzado.forEach(item => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("item");

        const carouselPhoto = document.createElement("img");
        carouselPhoto.src = item.imagen;

        carouselItem.appendChild(carouselPhoto);
        owlCarousel.appendChild(carouselItem);
    })

    carouselWrapper.appendChild(owlCarousel);


    productItem.appendChild(productTextContainer);
    productItem.appendChild(carouselWrapper);

    dynamicContent.appendChild(productHeader);
    dynamicContent.appendChild(productItem);

    initCarousel();

})