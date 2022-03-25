const dynamicContent = document.querySelector(".dynamic-content__container");

const buttonElastico = document.querySelector("#productElasticos");

buttonElastico.addEventListener('click', ()=> {
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