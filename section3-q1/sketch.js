// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  count = (count + 1) % cycle;
  // BLANK[1]
  noStroke()
  if(mouseIsPressed){
    background(0, 0, 255);
    fill(255,0,0);
    if(count < 1/4 * cycle){
      size = 4 * count;
    }
    if(count > 1/4 * cycle && count < 1/2 * cycle){
      size = 4 * (count - 2 * (count - 1/4 * cycle));
    }
    if(count > 1/2 * cycle && count < 3/4 * cycle){
      size = 4 * (count - 1/2 * cycle)
    }
    if(count > 3/4 * cycle){
      size = 4 * (count - (2 * (count - 3/4 * cycle) + 1/2 * cycle))
    }
  }
  else{
    background(0, 255, 255);
    fill(255,0,255);
    if(count < 1/2 * cycle){
      size = 2 * count;
    }
    if(count > 1/2 * cycle){
      size = 2 * (count - 2 * (count - 1/2 * cycle));
    }
  }
  
  ellipse(width / 2, height / 2, size);
}
