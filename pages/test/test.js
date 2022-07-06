const divContainer = document.getElementById('container');

const inputLogo = document.getElementById('inputLogo');

const fondoEtiqueta = document.querySelector("#fondoEtiqueta");

const colorMarca = document.querySelector("#colorMarca");

const userBrand = document.querySelector("#userBrand");

const fontEtiqueta = document.querySelector("#fontEtiqueta");
const conComposicion = document.querySelector("#conComposicion");

const orientacionEtiqueta = document.querySelectorAll('input[name="orientacionEtiqueta"]');
console.log(orientacionEtiqueta);
let orientacionElegida = "vertical";

orientacionEtiqueta.forEach(orientacion => {
    orientacion.addEventListener('change', () => {
        orientacionElegida = orientacion.value;
        console.log(orientacionElegida);
    });
})








if ("fonts" in document) {
  const AllisonRegular = new FontFace('allisonregular', 'url(https://cielciel2x.github.io/koxemac/fonts/allison-regular-webfont.woff)');

  const brockScript = new FontFace('brock_scriptregular', 'url(https://cielciel2x.github.io/koxemac/fonts/brockscript-webfont.woff)');

  const jewelHillRegular = new FontFace('jewel_hillregular', 'url(https://cielciel2x.github.io/koxemac/fonts/jewelhill-webfont.woff)');

  const maSexyRegular = new FontFace('MA Sexy Regular', 'url(https://cielciel2x.github.io/koxemac/fonts/masexy-webfont.woff)');

  const wildRide = new FontFace('WildRide', 'url(https://cielciel2x.github.io/koxemac/fonts/wildride-webfont.woff)');

  Promise.all([
    AllisonRegular.load(),
    brockScript.load(),
    jewelHillRegular.load(),
    maSexyRegular.load(),
    wildRide.load()
  ]).then(function (loadedFonts) {

    // Render all fonts at the same time
    loadedFonts.forEach(function (font) {
      document.fonts.add(font);
    });
  });
}



const createTag = () => {

  if (orientacionElegida == "vertical") {
  divContainer.style.width = `${anchoEtiqueta.value}mm`;
  divContainer.style.height = `${altoEtiqueta.value}mm`;
  } else if (orientacionElegida == "horizontal") {
  divContainer.style.width = `${altoEtiqueta.value}mm`;
  divContainer.style.height = `${anchoEtiqueta.value}mm`;
  }


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
      x: divContainer.width/2,
      y: divContainer.height/2,
      image: imageObj,
      draggable: true,
      width: divContainer.width,
      height: divContainer.height,
      scaleX: .5,
      scaleY: .5,
      name: 'rect',
    });

    // add the shape to the layer
    layer.add(brand);
  };


  if (inputLogo.files.length !== 0) {
    imgSrc = window.URL.createObjectURL(inputLogo.files[0]);

    const img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0);
    }
    imageObj.src = imgSrc;
    
  }


  var rectBG = new Konva.Rect({
    x: 0,
    y: 0,
    width: 10000,
    height: 10000,
    fill: `${fondoEtiqueta.value}`,
  });

  layer.add(rectBG);


  var brandName = new Konva.Text({
    x: stage.width() / 2,
    y: 25,
    text: `${userBrand.value}`,
    fontSize: 30,
    fontFamily: `${fontEtiqueta.value}`,
    fill: `${colorMarca.value}`,
    draggable: true,
    name: 'rect'
  });

  layer.add(brandName);

  var composicionTexto = new Konva.Text({
    x: stage.width() / 2,
    y: stage.height() - 75,
    text: `CUIT:\n00-00000000-0\nINDUSTRIA\nARGENTINA\nUSAR AGUA FRIA\nNO USAR CLORO\nPLANCHA TIBIA\nNO RETORCER`,
    fontSize: 7.5,
    fontFamily: `Arial`,
    fill: `${colorMarca.value}`,
    align: 'center',
    draggable: true,
    name: 'rect'
  });








  var MAX_WIDTH = 100;


      var tr = new Konva.Transformer({
        enabledAnchors: [
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ],
        boundBoxFunc: function (oldBoundBox, newBoundBox) {
          // "boundBox" is an object with
          // x, y, width, height and rotation properties
          // transformer tool will try to fit nodes into that box

          // the logic is simple, if new width is too big
          // we will return previous state
          if (Math.abs(newBoundBox.width) < MAX_WIDTH) {
            return oldBoundBox;
          }

          return newBoundBox;
        },
      });
      layer.add(tr);
      

      // add a new feature, lets add ability to draw selection rectangle
      var selectionRectangle = new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
        visible: false,
      });
      layer.add(selectionRectangle);

      var x1, y1, x2, y2;
      stage.on('mousedown touchstart', (e) => {
        // do nothing if we mousedown on any shape
        if (e.target !== stage) {
          return;
        }
        e.evt.preventDefault();
        x1 = stage.getPointerPosition().x;
        y1 = stage.getPointerPosition().y;
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.visible(true);
        selectionRectangle.width(0);
        selectionRectangle.height(0);
      });

      stage.on('mousemove touchmove', (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
          return;
        }
        e.evt.preventDefault();
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        });
      });

      stage.on('mouseup touchend', (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
          return;
        }
        e.evt.preventDefault();
        // update visibility in timeout, so we can check it in click event
        setTimeout(() => {
          selectionRectangle.visible(false);
        });

        var shapes = stage.find('.rect');
        var box = selectionRectangle.getClientRect();
        var selected = shapes.filter((shape) =>
          Konva.Util.haveIntersection(box, shape.getClientRect())
        );
        tr.nodes(selected);
      });

      // clicks should select/deselect shapes
      stage.on('click tap', function (e) {
        // if we are selecting with rect, do nothing
        if (selectionRectangle.visible()) {
          return;
        }

        // if click on empty area - remove all selections
        if (e.target === stage || e.target === rectBG) {
          tr.nodes([]);
          return;
        }

        // do nothing if clicked NOT on our rectangles
        if (!e.target.hasName('rect')) {
          return;
        }

        // do we pressed shift or ctrl?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        const isSelected = tr.nodes().indexOf(e.target) >= 0;

        if (!metaPressed && !isSelected) {
          // if no key pressed and the node is not selected
          // select just one
          tr.nodes([e.target]);
        } else if (metaPressed && isSelected) {
          // if we pressed keys and node was selected
          // we need to remove it from selection:
          const nodes = tr.nodes().slice(); // use slice to have new copy of array
          // remove node from array
          nodes.splice(nodes.indexOf(e.target), 1);
          tr.nodes(nodes);
        } else if (metaPressed && !isSelected) {
          // add the node into selection
          const nodes = tr.nodes().concat([e.target]);
          tr.nodes(nodes);
        }
      });






  // add the shape to the layer

  if (conComposicion.checked) {
    layer.add(composicionTexto);
  }

  stage.add(layer);

}

generateButton.addEventListener("click", () => {
  createTag();
})