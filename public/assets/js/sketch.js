


function setup(){
      createCanvas(windowWidth, windowHeight)
      gui = createGui('slider-range-1');
      gui.addGlobals('seeds', 'angle', 'zoom', 'radius', 'seedColor', 'opacity', 'bgColor');
}

function draw(){

  
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}