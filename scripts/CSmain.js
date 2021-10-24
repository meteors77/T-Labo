function loadImage(container_id, canvas_id) {
  // 画像を読み込んでImageオブジェクトを作成する
  var image = new Image();
  image.src = "../images/CharaSheetTemplate.png";
  image.onload = function () {
    // 画像ロードが完了してからキャンバスの準備をする
    var container = document.getElementById(container_id);
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext("2d");
    // 親要素のサイズをcanvasに指定
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    // キャンバスに画像を描画（開始位置0,0）
    // 第４引数、第５引数の指定サイズにリサイズ
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
}

// キャンバスに文字を描く
function drawText(canvas_id, text_id) {
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext("2d");
  var text = document.getElementById(text_id);
  // 文字スタイルを指定
  ctx.font = "80px serif";
  ctx.fillStyle = "#ff4040";
  // 文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter）
  ctx.textBaseline = "center";
  ctx.textAlign = "center";
  // 座標を指定して文字を描く（座標は画像の中心に）
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  ctx.fillText(text.value, x, y);
}
