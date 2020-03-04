let container = document.getElementsByClassName("container");
let side = 16;
let width = side;
let height = side;



for(let i=0; i < width; i++) {
    var rowPixel = document.createElement('div');
    rowPixel.className = 'row';
    for(let j=0; j < height; j++) {
        var colPixel = document.createElement('div');
        colPixel.className = 'pixel';
        rowPixel.appendChild(colPixel);
    }

    document.getElementsByClassName("container")[0].appendChild(rowPixel);
}

function pixelResize() {
    let pixels = document.querySelectorAll(".pixel");
    if (window.innerWidth < window.innerHeight) {
        unit = 'vw';
    } else {
        unit = 'vh';
    }

    for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.width = 75/side + unit;
        pixels[i].style.height = 75/side + unit; 
    }
}

pixelResize();
window.onresize = pixelResize;
