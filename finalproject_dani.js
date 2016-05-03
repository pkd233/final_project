function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	// Drawing code goes here

var ranx = random(-30,30);
var rany = random(-30,30);

//clusters
var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);
noStroke();
fill (r,g,b);
ellipseMode(CENTER);
var xy = random(1, 10);
ellipse(mouseX+ranx, mouseY+rany, xy, xy);

}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
