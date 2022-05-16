const divContainer = document.getElementById('container');

const inputLogo = document.getElementById('inputLogo');

const fondoEtiqueta = document.querySelector("#fondoEtiqueta");

const colorMarca = document.querySelector("#colorMarca");

const userBrand = document.querySelector("#userBrand");










  generateButton.addEventListener("click", () => {
    divContainer.style.width=`${anchoEtiqueta.value}mm`;
    divContainer.style.height=`${altoEtiqueta.value}mm`;


    var stage = new Konva.Stage({
      container: 'container',
      width: divContainer.offsetWidth,
      height: divContainer.offsetHeight,
    });
    
    var layer = new Konva.Layer();

    
    // main API:
    var imageObj = new Image();
    imageObj.onload = function () {
      var brand = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        draggable: true,
        width: 106,
        height: 118,
      });
    
      // add the shape to the layer
      layer.add(brand);
    };


    if (inputLogo.files.length !== 0) {
      imgSrc = window.URL.createObjectURL(inputLogo.files[0]);
    
      const img = new Image();
      img.onload = function() {
        context.drawImage(img, 0, 0);
      }
      imageObj.src = imgSrc;
    }


      var rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: 10000,
        height: 10000,
        fill: `${fondoEtiqueta.value}`,
      });

      var brandName = new Konva.Text({
        x: stage.width() / 2,
        y: 15,
        text: `${userBrand.value}`,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: `${colorMarca.value}`,
        draggable: true,
      });




      // add the shape to the layer
      layer.add(rect1);
      layer.add(brandName);
            stage.add(layer);
  })