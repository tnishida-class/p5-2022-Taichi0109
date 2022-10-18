// テキスト「アニメーションの基本」
let x, y, vy;
const g = 1;
const jump = 20;
const ground = 20;
const size = 20;

function setup(){
  createCanvas(400, 400);
  x = width / 2;
  y = height - ground -size / 2;
  vy = 0;
}
function draw(){
  background(136,236,250);
  let gy = height - ground;
  fill(250)
  line(0, gy, width, gy);
  fill(255,99,71)
  ellipse(x, y, size, size);
  y += vy;
  x = (x + width) % width;
  y = (y + height) % height;


  if(y < height - ground - size / 2){
    vy += g;
  } 
  if(keyIsDown(LEFT_ARROW)){x -= 5;}
  if(keyIsDown(RIGHT_ARROW)){x += 5;}
  if(y >= height - ground - size / 2){
    vy = 0;
    y = height - ground - size / 2;
  }
}
function keyPressed(){
  if(key == " " && y >= height - ground - size / 2){
    vy = -jump
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
