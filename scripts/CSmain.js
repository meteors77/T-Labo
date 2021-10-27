// onloadイベントを追加する
function addOnload(func, IMAGE) {
  IMAGE.addEventListener("load", func, false);
}

/**
 * テンプレ画像SET
 * @param {String} container_id canvas親要素divのid
 * @param {String} canvas_id canvasのid
 */
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
    // 背景を白色に描画
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // キャンバスに画像を描画（開始位置0,0）
    // 第４引数、第５引数の指定サイズにリサイズ
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // // fillRect test
    // ctx.fillStyle = "rgba(0,255,255,0.5)";
    // let X = canvas.width * 0.039 + canvas.width * 0.0818 * 5;
    // let Y = canvas.width * 0.65 - canvas.width * 0.0183 * 17;
    // let W = canvas.width * 0.072;
    // let H = canvas.width * 0.0183 * 18;
    // ctx.fillRect(X, Y, W, H);
  };
}

// キャンバスに文字を描く
function drawText(
  color_id,
  image_id,
  canvas_id,
  LName_id,
  FName_id,
  Lread_id,
  Fread_id,
  Sex_id,
  Year_id,
  Month_id,
  Day_id,
  height_id,
  PName_id,
  other_id,
  STR_id,
  CON_id,
  POW_id,
  DEX_id,
  APP_id,
  SIZ_id,
  INT_id,
  EDU_id
) {
  // 引数取得
  var color = document.getElementById(color_id);
  var File = document.getElementById(image_id);
  var LName = document.getElementById(LName_id);
  var FName = document.getElementById(FName_id);
  var Lread = document.getElementById(Lread_id);
  var Fread = document.getElementById(Fread_id);
  var Sex = document.getElementById(Sex_id);
  var Year = document.getElementById(Year_id);
  var Month = document.getElementById(Month_id);
  var Day = document.getElementById(Day_id);
  var Height = document.getElementById(height_id);
  var PLname = document.getElementById(PName_id);
  var OtText = document.getElementById(other_id);
  var STR = document.getElementById(STR_id);
  var CON = document.getElementById(CON_id);
  var POW = document.getElementById(POW_id);
  var DEX = document.getElementById(DEX_id);
  var APP = document.getElementById(APP_id);
  var SIZ = document.getElementById(SIZ_id);
  var INT = document.getElementById(INT_id);
  var EDU = document.getElementById(EDU_id);

  // キャラシテンプレ再ロード
  const canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = "../images/CharaSheetTemplate.png";

  // 塗りつぶし
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color.value;

  function fillStatus(val, num) {
    if (parseInt(val) > 18) {
      val = "18";
    }
    let X = canvas.width * 0.039 + canvas.width * 0.0818 * (num - 1);
    let Y = canvas.width * 0.65 - canvas.width * 0.0183 * (parseInt(val) - 1);
    let W = canvas.width * 0.072;
    let H = canvas.width * 0.0183 * parseInt(val);
    ctx.fillRect(X, Y, W, H);
  }

  fillStatus(STR.value, 1);
  fillStatus(CON.value, 2);
  fillStatus(POW.value, 3);
  fillStatus(DEX.value, 4);
  fillStatus(APP.value, 5);
  fillStatus(SIZ.value, 6);
  fillStatus(INT.value, 7);
  fillStatus(EDU.value, 8);

  // PC画像描画

  var PCimage = new Image();
  PCimage.src = "../images/example.jpg";

  addOnload(canvas_prev, image);
  PCimage.onload = PC_prev();

  function PC_prev() {
    let X = canvas.width * 0.0327;
    let Y = canvas.width * 0.023;
    let W = canvas.width * 0.263;
    let H = canvas.width * 0.263;
    // PC画像のロードが完了したら描画
    ctx.drawImage(PCimage, X, Y, W, H);
  }

  function canvas_prev() {
    // 画像ロードが完了してから描画
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // name
    // 文字スタイルを指定
    let size = canvas.width * 0.045;
    let x = canvas.width * 0.475;
    let y = canvas.height * 0.0945;
    fillcenterText(ctx, LName.value + " " + FName.value, x, y, size);

    // read
    size = canvas.width * 0.015;
    x = canvas.width * 0.475;
    y = canvas.width * 0.055;
    fillcenterText(ctx, Lread.value + "      " + Fread.value, x, y, size);

    // sex
    size = canvas.width * 0.045;
    x = canvas.width * 0.683;
    y = canvas.width * 0.0875;
    fillcenterText(ctx, Sex.value, x, y, size);

    // height
    size = canvas.width * 0.035;
    x = canvas.width * 0.765;
    y = canvas.width * 0.0845;
    fillcenterText(ctx, Height.value, x, y, size);

    // birth
    size = canvas.width * 0.025;
    x = canvas.width * 0.885;
    y = canvas.width * 0.07;
    if (Year.value == "  " && Month.value == "  " && Day.value == "  ") {
    } else {
      fillcenterText(
        ctx,
        Year.value + "/     \n       " + Month.value + "/" + Day.value,
        x,
        y,
        size
      );
    }

    // other date
    size = canvas.width * 0.02;
    x = canvas.width * 0.325;
    y = canvas.width * 0.133;
    filltopleftText(ctx, OtText.value, x, y, size);

    // PLname
    size = canvas.width * 0.025;
    x = canvas.width * 0.89;
    y = canvas.width * 0.27;
    fillcenterText(ctx, PLname.value, x, y, size);

    // SAN
    size = canvas.width * 0.07;
    x = canvas.width * 0.883;
    y = canvas.width * 0.383;
    fillcenterText(ctx, parseInt(POW.value) * 5 + "", x, y, size);

    // HP
    size = canvas.width * 0.06;
    x = canvas.width * 0.763;
    y = canvas.width * 0.482;
    let HP = (parseInt(CON.value) + parseInt(SIZ.value)) / 2;
    HP = Math.ceil(HP);
    fillcenterText(ctx, HP + "", x, y, size);

    // MP
    size = canvas.width * 0.06;
    x = canvas.width * 0.898;
    y = canvas.width * 0.482;
    fillcenterText(ctx, POW.value, x, y, size);

    // IDEA
    size = canvas.width * 0.06;
    x = canvas.width * 0.767;
    y = canvas.width * 0.5857;
    fillcenterText(ctx, parseInt(INT.value) * 5 + "", x, y, size);

    // 知識
    size = canvas.width * 0.06;
    x = canvas.width * 0.902;
    y = canvas.width * 0.5857;
    fillcenterText(ctx, parseInt(EDU.value) * 5 + "", x, y, size);

    // 幸運
    size = canvas.width * 0.06;
    x = canvas.width * 0.767;
    y = canvas.width * 0.687;
    fillcenterText(ctx, parseInt(POW.value) * 5 + "", x, y, size);

    // DB
    size = canvas.width * 0.04;
    x = canvas.width * 0.9;
    y = canvas.width * 0.68;
    let point = parseInt(STR.value) + parseInt(SIZ.value);
    let DB;
    if (point <= 12) {
      DB = "-1D6";
    } else if (point <= 16) {
      DB = "-1D4";
    } else if (point <= 24) {
      y = canvas.width * 0.675;
      DB = "--";
    } else if (point <= 32) {
      DB = "+1D4";
    } else if (point <= 40) {
      DB = "+1D6";
    } else {
      DB = "";
    }
    fillcenterText(ctx, DB, x, y, size);
  }
}

/**
 * テキスト描画で改行させるためのメソッド
 * @param {ctx} context canvas
 * @param {String} text 書き出すテキスト
 * @param {int} x x軸
 * @param {int} y y軸
 */
function fillTextLine(context, text, x, y) {
  // \nで分割して配列にする
  var textList = text.split("\n");
  // あ はフォントサイズを取得するのに利用
  var lineHeight = context.measureText("あ").width;
  textList.forEach(function (text, i) {
    // 配列を順番に読み出して、y（高さ)を計算しながら描画
    context.fillText(text, x, y + lineHeight * i);
  });
}

// 左上基準の描画
function filltopleftText(context, text, x, y, size) {
  context.textBaseline = "top";
  context.textAlign = "left";
  context.font = size + "px 'RocknRoll One', sans-serif";
  fillTextLine(context, text, x, y);
}

// 中央基準の描画
function fillcenterText(context, text, x, y, size) {
  // 文字の配置を指定
  //（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter）
  context.textBaseline = "alphabetic";
  context.textAlign = "center";
  context.font = size + "px 'RocknRoll One', sans-serif";
  fillTextLine(context, text, x, y);
}
