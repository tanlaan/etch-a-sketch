let size = 16;
pixelGrid();
pixelResize();

var resize = document.querySelector("#resize");
resize.addEventListener('click', gridSelect);

var clear = document.querySelector("#clear");
clear.addEventListener('click', function () {
    let pixels = document.querySelectorAll(".pixel");
    for(let i=0; i < pixels.length; i++){
        pixels[i].className = 'pixel';
    }
})

function pixelGrid() {
    let width = size;
    let height= size;
    
    container = document.querySelector(".container");
    container.textContent = "";

    for(let i=0; i < width; i++) {
        var rowPixel = document.createElement('div');
        rowPixel.className = 'row';
        for(let j=0; j < height; j++) {
            var colPixel = document.createElement('div');
            colPixel.className = 'pixel';
            colPixel.addEventListener('mouseover', function(){
                this.className += ' selected';  
            })
            rowPixel.appendChild(colPixel);
        }

        container.appendChild(rowPixel);
    }
}

function pixelResize() {
    if (window.innerWidth < window.innerHeight) {
        unit = 'vw';
    } else {
        unit = 'vh';
    }

    let pixels = document.querySelectorAll(".pixel");

    for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.width = 75/size + unit;
        pixels[i].style.height = 75/size + unit; 
    }
}

function gridSelect() {
    let input = prompt("How big do you want your Etch-a-Sketch to be?");
    if(input < 0 || input > 100){
        alert('Number OutOfBounds: Selecting default size of 16.');
        size = 16;
    } else {
        size = input;
    }
    pixelGrid();
    pixelResize();
}

window.onresize = pixelResize;
