const catalogNav = document.querySelector('.catalog-button__nav');


const createButtons = () => {
  const productButtonContainer = document.createElement("div");
  productButtonContainer.classList.add("product-button__container");

  Object.keys(arrayProductos).forEach(Producto => {
    const productButtonNav = document.createElement("button");
    productButtonNav.classList.add("button__product-catalog");
    productButtonNav.setAttribute("id", `button${Producto}`);
    productButtonNav.setAttribute("value", `${Producto}`);
    productButtonNav.textContent = `${Producto}`;

    productButtonContainer.appendChild(productButtonNav);
  })

  if(screen.width > 800) {
    catalogNav.appendChild(productButtonContainer);
  } else {
  
    const productNavPushbar = document.createElement("div");
    productNavPushbar.setAttribute("data-pushbar-id", "mypushbar1");
    productNavPushbar.setAttribute("data-pushbar-direction", "left");
    productNavPushbar.appendChild(productButtonContainer);

    const closePushbarButton = document.createElement("button");
    closePushbarButton.setAttribute("data-pushbar-close", "");
    closePushbarButton.classList.add("close-button__pushbar");
    closePushbarButton.textContent = "cerrar";
    productNavPushbar.appendChild(closePushbarButton);

    const verProductosButton = document.createElement("button");
    verProductosButton.setAttribute("data-pushbar-target", "mypushbar1");
    verProductosButton.classList.add("button__product-view", "mobile-catalog__button");
    verProductosButton.textContent = "Ver productos";
    catalogNav.appendChild(verProductosButton);
    catalogNav.appendChild(productNavPushbar);
  }
}

createButtons();