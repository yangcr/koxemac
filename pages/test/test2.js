let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let $canvas = $("#canvas");
let canvasOffset = $canvas.offset();
let offsetX = canvasOffset.left;
let offsetY = canvasOffset.top;
let scrollX = $canvas.scrollLeft();
let scrollY = $canvas.scrollTop();
let startX;
let startY;
let texts = [];
texts.push({
    text: "Hello",
    x: 20,
    y: 20
});
texts.push({
    text: "World",
    x: 20,
    y: 70
});
ctx.font = "16px verdana";
for (let i = 0; i < texts.length; i++) {
    let text = texts[i];
    text.width = ctx.measureText(text.text).width;
    text.height = 16;
}
let selectedText = -1;
draw();
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < texts.length; i++) {
        let text = texts[i];
        ctx.fillText(text.text, text.x, text.y);
    }
}
function textHittest(x, y, textIndex) {
    let text = texts[textIndex];
    return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y);
}
function handleMouseDown(e) {
    e.preventDefault();
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);
    for (let i = 0; i < texts.length; i++) {
        if (textHittest(startX, startY, i)) {
            selectedText = i;
        }
    }
}
function handleMouseUp(e) {
    e.preventDefault();
    selectedText = -1;
}
function handleMouseOut(e) {
    e.preventDefault();
    selectedText = -1;
}
function handleMouseMove(e) {
    if (selectedText < 0) {
        return;
    }
    e.preventDefault();
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    let dx = mouseX - startX;
    let dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    let text = texts[selectedText];
    text.x += dx;
    text.y += dy;
    draw();
}
// listen for mouse events
$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});
$("#canvas").mousemove(function (e) {
    handleMouseMove(e);
});
$("#canvas").mouseup(function (e) {
    handleMouseUp(e);
});
$("#canvas").mouseout(function (e) {
    handleMouseOut(e);
}); 
});








var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

// main API:
var imageObj = new Image();
imageObj.onload = function () {
  var yoda = new Konva.Image({
    x: 50,
    y: 50,
    image: imageObj,
    width: 106,
    height: 118,
    draggable: true
  });

  // add the shape to the layer
  layer.add(yoda);
};


function readImage(input) {
    let imgSrc = '';
    if (input.value !== '') {
      imgSrc = window.URL.createObjectURL(input.files[0]);
    }
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0);
    }
    imageObj.src = imgSrc;
  } 