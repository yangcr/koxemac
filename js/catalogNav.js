const catalogNav = document.querySelector('.catalog-button__nav');

const desktopSite = () => {


  catalogNav.innerHTML = `
<div class="product-button__container desktop-catalog">
          <div data-pushbar-direction="left"></div>
          <button class="button__product-catalog"  id="productCierres" autofocus>Producto A</button>
          <button class="button__product-catalog"  id="productElasticos" id="productB">Producto B</button>
          <button class="button__product-catalog"  id="productHilos">Producto C</button>
          <button class="button__product-catalog">Producto D</button>
          <button class="button__product-catalog">Producto E</button>
          <button class="button__product-catalog">Producto F</button>
          <button class="button__product-catalog">Producto G</button>
          <button class="button__product-catalog">Producto H</button>
          <button class="button__product-catalog">Producto I</button>
          <button class="button__product-catalog">Producto J</button>
          <button class="button__product-catalog">Producto K</button>
          <button class="button__product-catalog">Producto L</button>
          <button class="button__product-catalog">Producto M</button>
          <button class="button__product-catalog">Producto N</button>
          <button class="button__product-catalog">Producto Ñ</button>
          <button class="button__product-catalog">Producto O</button>
        </div>
`
}

const mobileSite = () => {
  catalogNav.innerHTML = `
    <div data-pushbar-id="mypushbar1" data-pushbar-direction="left">
  <div class="product-button__container">
    <div data-pushbar-direction="left"></div>
    <button class="button__product-catalog"  id="productCierres" autofocus>Producto A</button>
    <button class="button__product-catalog"  id="productElasticos" id="productB">Producto B</button>
    <button class="button__product-catalog"  id="productHilos">Producto C</button>
    <button class="button__product-catalog">Producto D</button>
    <button class="button__product-catalog">Producto E</button>
    <button class="button__product-catalog">Producto F</button>
    <button class="button__product-catalog">Producto G</button>
    <button class="button__product-catalog">Producto H</button>
    <button class="button__product-catalog">Producto I</button>
    <button class="button__product-catalog">Producto J</button>
    <button class="button__product-catalog">Producto K</button>
    <button class="button__product-catalog">Producto L</button>
    <button class="button__product-catalog">Producto M</button>
    <button class="button__product-catalog">Producto N</button>
    <button class="button__product-catalog">Producto Ñ</button>
    <button class="button__product-catalog">Producto O</button>
  </div>
      <button data-pushbar-close class="close-button__pushbar">Close</button>
</div>
 <button data-pushbar-target="mypushbar1" class="button__product-catalog mobile-catalog__button">
       Ver productos
      </button>
    `
}



screen.width > 800 ? desktopSite() : mobileSite();