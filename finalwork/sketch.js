// 最終課題を制作しよう

function setup() {
  //angle = 0;
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const white = color(255, 255, 255);
  createCanvas(windowWidth, windowHeight);
  background(0, 100, 0);
  stroke(0);
  strokeWeight(3);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = min(width, height);

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(white, black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(white, black, maxR * 0.45);
  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);

  let point = [6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4, 13];

  for(let i = 0; i < 20; i++){
    let theta = TWO_PI * i / 20;
    let tx = cx + cos(theta) * maxR * 0.45;
    let ty = cy + sin(theta) * maxR * 0.45;
    noStroke();
    fill(255);
    textFont('Geogia')
    textSize(width / 25)
    text(point[i], tx - width / 50, ty + height / 50);
  }
}
let mx, my;

function draw(){
    stroke(255, 255, 0);
    fill(255, 255, 0);
    star(mx, my, 10);
}

function mouseClicked(){
  mx = mouseX
  my = mouseY
}

function drawCircle(c, r){
  const cx = width / 2;
  const cy = height / 2;
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  const cx = width / 2;
  const cy = height / 2;
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i - 25;
    let stop = TWO_PI / 20 * (i + 1) - 25;
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}
function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}