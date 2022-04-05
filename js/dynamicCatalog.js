const dynamicContent = document.querySelector(".dynamic-content__container");

const buttonPressed = document.querySelectorAll(".button__product-catalog");

function initCarousel() {$('.owl-carousel').owlCarousel({
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    margin: 25,
    nav: false,
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


const writeDom = (product) => {    

    dynamicContent.textContent=''; //C L E A N   C O N T A I N E R

    const productHeader = document.createElement("h2");
    productHeader.classList.add('product__title');
    productHeader.textContent = `${product}`;
    dynamicContent.appendChild(productHeader);

      Object.keys(arrayProductos[product]).forEach(key => {


        const productItem = document.createElement("div");
        productItem.classList.add("product__item","product__shadow");
    
        const productTextContainer = document.createElement("div");
        productTextContainer.classList.add("product__text-container");
    
        const productTitle = document.createElement("h3");
        productTitle.classList.add("product__title");
        productTitle.textContent = arrayProductos[product][key]["titulo"];
    
        const productSubtitle = document.createElement("p");
        productSubtitle.classList.add("product__subtitle");
        productSubtitle.textContent = arrayProductos[product][key]["subtituloSubProd"];
    
        const productDetails = document.createElement("p");
        productDetails.classList.add("product__details");
        productDetails.textContent = arrayProductos[product][key]["detallesSubProducto"];
    
        productTextContainer.appendChild(productTitle);
        productTextContainer.appendChild(productSubtitle);
        productTextContainer.appendChild(productDetails);
    
    
        const carouselWrapper = document.createElement("div");
        carouselWrapper.classList.add("carousel");
    
        const owlCarousel = document.createElement("div");
        owlCarousel.classList.add("owl-carousel");
        owlCarousel.classList.add("owl-theme");
    
        arrayProductos[product][key]["galeria"].forEach(item => {
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
        dynamicContent.appendChild(productItem);
      });

    initCarouselNoNav();
}



buttonPressed.forEach(button => {
    button.addEventListener('click', () => {
        writeDom(button.value);
    })

});