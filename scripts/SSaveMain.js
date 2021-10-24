function loadImage(canvas_id, text_id) {
  var image = new Image();
  image.src = "../images/CharaSheetTemplate.png";
  image.onload = function () {
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext("2d");
    var text = document.getElementById(text_id);

    // キャンバスのサイズを画像サイズに合わせる
    canvas.width = image.width;
    canvas.height = image.height;
    //キャンバスに画像を描画
    ctx.drawImage(image, 0, 0);

    // 文字のスタイル指定
    ctx.font = "160px serif";
    ctx.fillStyle = "#ff4040";
    // 文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter）
    ctx.textBaseline = "center";
    ctx.textAlign = "center";
    // 座標を指定して文字を描く（座標は画像の中心に）
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    ctx.fillText(text.value, x, y);
  };
}
