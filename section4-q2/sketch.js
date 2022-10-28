// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores)
  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ 
    total += scores[i]; 
  }
  
  let x = 0;
  let y = 0;
  
  for(let i = 0; i < scores.length; i++){
    x = scores[i] / total * 2 * PI;
    arc( 200, 200, 300, 300, y - 1 / 2 * PI, y + x - 1 / 2 * PI, PIE);
    y += scores[i] / total * 2 * PI;
    text(scores[i].toPrecision(3), 200 + x, 50 + x);
  }
}
