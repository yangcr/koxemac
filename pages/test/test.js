const divContainer = document.getElementById('container');

const inputLogo = document.getElementById('inputLogo');

const fondoEtiqueta = document.querySelector("#fondoEtiqueta");










  generateButton.addEventListener("click", () => {
    divContainer.style.width=`${anchoEtiqueta.value}mm`;
    divContainer.style.height=`${altoEtiqueta.value}mm`;


    var stage = new Konva.Stage({
      container: 'container',
      width: divContainer.offsetWidth,
      height: divContainer.offsetHeight,
    });
    
    var layerImage = new Konva.Layer();

    
    // main API:
    var imageObj = new Image();
    imageObj.onload = function () {
      var brand = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        width: 106,
        height: 118,
        draggable: true
      });
    
      // add the shape to the layer
      layerImage.add(brand);
    };

    imgSrc = window.URL.createObjectURL(inputLogo.files[0]);
    
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0);
    }
    imageObj.src = imgSrc;




    var layerBackground = new Konva.Layer();

      var rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: 10000,
        height: 10000,
        fill: `${fondoEtiqueta.value}`,
      });

      console.log(rect1);
      // add the shape to the layer
      layerBackground.add(rect1);
            stage.add(layerBackground);
            stage.add(layerImage);
  })