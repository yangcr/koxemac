const dynamicContent = document.querySelector(".dynamic-content__container");

const buttonElastico = document.querySelector("#productElasticos");

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


/* buttonElastico.addEventListener('click', ()=> {
    dynamicContent.innerHTML = '';
    dynamicContent.innerHTML+= `
    <h2 class="product__title">Elastico</h2>
    <div class="product__item product__shadow">
        <div class="product__text-container">
            <h3 class="product__title">REFORZADOS</h3>
            <p class="product__subtitle"> un subtitulo del producto</p>
            <p class="product__details">
                Ipsam quos, enim nostrum debitis obcaecati porro quam officiis laborum inventore aspernatur
                cupiditate omnis corrupti, culpa maiores velit tempora dignissimos. Beatae laudantium sapiente
                natus quaerat. Officia saepe ex illo. Sit?</p>
        </div>

        <div class="carousel">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../images/carousel-cierres/1.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/2.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/3.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/4.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/5.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/6.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/7.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/8.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/9.jpg" alt="#"></div>
            </div>
        </div>
    </div>

    
    `
}) */

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



    //E N D   P R O D U C T - I T E M   D I V

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



const buttonCierres = document.querySelector("#productCierres");

buttonCierres.addEventListener('click', ()=> {
    dynamicContent.innerHTML = '';
    dynamicContent.innerHTML+= `
    <h2 class="product__title">Cierres</h2>
    <div class="product__item product__shadow">
        <div class="product__text-container">
            <h3 class="product__title">REFORZADOS</h3>
            <p class="product__subtitle"> un subtitulo del producto</p>
            <p class="product__details">
                Ipsam quos, enim nostrum debitis obcaecati porro quam officiis laborum inventore aspernatur
                cupiditate omnis corrupti, culpa maiores velit tempora dignissimos. Beatae laudantium sapiente
                natus quaerat. Officia saepe ex illo. Sit?</p>
        </div>

        <div class="carousel">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../images/carousel-cierres/1.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/2.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/3.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/4.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/5.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/6.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/7.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/8.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/9.jpg" alt="#"></div>
            </div>
        </div>
    </div>

    <div class="product__item product__shadow">
        <div class="product__text-container">
            <h3 class="product__title">Diente de perro</h3>
            <p class="product__subtitle"> un subtitulo del producto</p>
            <p class="product__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore,
                quibusdam dolorum nemo iure voluptatum exercitationem laboriosam iste placeat dolor doloremque,
                atque quam animi quae quo aut ipsam dolorem odit!
                Vero, veniam expedita ratione reprehenderit dolor pariatur natus molestias consequatur est
                ducimus ex cum.</p>
        </div>

        <div class="carousel">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../images/carousel-cierres/5.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/2.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/1.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/4.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/7.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/3.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/9.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/8.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/6.jpg" alt="#"></div>
            </div>
        </div>
    </div>

    <div class="product__item product__shadow">
        <div class="product__text-container">
            <h3 class="product__title">Bronce y aluminio</h3>
            <p class="product__subtitle"> un subtitulo del producto</p>
            <p class="product__details">
                Vero, veniam expedita ratione reprehenderit dolor pariatur natus molestias consequatur est
                ducimus ex cum. Quod veritatis eos voluptas, id error necessitatibus perferendis iusto quibusdam
                maiores reprehenderit dolores beatae quis laborum!
                Ipsam quos, enim nostrum debitis obcaecati porro quam officiis laborum inventore aspernatur
                cupiditate omnis corrupti, culpa maiores velit tempora dignissimos.</p>
        </div>

        <div class="carousel">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../images/carousel-cierres/5.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/2.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/1.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/4.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/7.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/3.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/9.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/8.jpg" alt="#"></div>
                <div class="item"><img src="../images/carousel-cierres/6.jpg" alt="#"></div>
            </div>
        </div>
    </div>

    
    `
})




