// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ 
    total += scores[i]; 
  }
  for(let i = 0; i < scores.length; i++){ 
  let x, px;
  
  x = scores[i] / total * 2 * PI;
  px = scores[i - 1] / total * 2 * PI;
  
    arc( 200, 200, 300, 300, 0, x, PIE);
    arc( 200, 200, 300, 300, px, px + x, PIE);
  
  }
  // BLANK[1]
}
