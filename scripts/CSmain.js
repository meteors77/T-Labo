// onloadイベントを追加する
function addOnload(func, IMAGE) {
  IMAGE.addEventListener("load", func, false);
}

// download
document.getElementById("download").onclick = (event) => {
  var canvas = document.getElementById("preview");
  // var link = document.createElement("a");
  // link.href = canvas.toDataURL("image/png");
  var png = canvas.toDataURL("image/png");
  document.getElementById("canvas-img").src = png;
  // link.download = "charasheet.png";
  // link.click();
};

/**
 * テンプレ画像SET & ダウンロードサイズ制限
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
    // スマホ・タブレットの場合のみcanvasを1200x1200に
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      navigator.userAgent.indexOf("iPad") > 0 ||
      navigator.userAgent.indexOf("Android") > 0 ||
      navigator.userAgent.indexOf("Mobile") > 0
    ) {
      container.clientWidth = 1200;
      container.clientHeight = 1200;
    }
    if (container.clientWidth <= 1200) {
      canvas.width = 1200;
      canvas.height = 1200;
    } else {
      // 親要素のサイズをcanvasに指定
      canvas.width = image.width;
      canvas.height = image.height;
    }

    // 背景を白色に描画
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // キャンバスに画像を描画（開始位置0,0）
    // 第４引数、第５引数の指定サイズにリサイズ
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    var png = canvas.toDataURL("image/png");
    document.getElementById("canvas-img").src = png;

    //ダウンロードサイズ規制
    if (container.clientWidth <= 1200) {
      var set1 = document.getElementById("2000");
      var set2 = document.getElementById("4500");
      set1.classList.add("disabled");
      set2.classList.add("disabled");
    }
  };
}

// キャンバスに文字を描く
function drawText(canvas_id) {
  // 引数取得
  var color = document.getElementById("ColorInput");
  var File = document.getElementById("PCsample");
  var LName = document.getElementById("Last-name");
  var FName = document.getElementById("First-name");
  var Lread = document.getElementById("Last-read");
  var Fread = document.getElementById("First-read");
  var Sex = document.getElementById("inputSelectSex");
  var Year = document.getElementById("inputSelectYear");
  var Month = document.getElementById("inputSelectMonth");
  var Day = document.getElementById("inputSelectDay");
  var Height = document.getElementById("height");
  var PLname = document.getElementById("PL-name");
  var OtText = document.getElementById("other-data");
  var STR = document.getElementById("inputSelectSTR");
  var CON = document.getElementById("inputSelectCON");
  var POW = document.getElementById("inputSelectPOW");
  var DEX = document.getElementById("inputSelectDEX");
  var APP = document.getElementById("inputSelectAPP");
  var SIZ = document.getElementById("inputSelectSIZ");
  var INT = document.getElementById("inputSelectINT");
  var EDU = document.getElementById("inputSelectEDU");

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
  PCimage.src = File.src;

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
    y = canvas.width * 0.15;
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
    size = canvas.width * 0.058;
    x = canvas.width * 0.763;
    y = canvas.width * 0.482;
    let HP = (parseInt(CON.value) + parseInt(SIZ.value)) / 2;
    HP = Math.ceil(HP);
    fillcenterText(ctx, HP + "", x, y, size);

    // MP
    size = canvas.width * 0.058;
    x = canvas.width * 0.898;
    y = canvas.width * 0.482;
    fillcenterText(ctx, POW.value, x, y, size);

    // IDEA
    size = canvas.width * 0.058;
    x = canvas.width * 0.767;
    y = canvas.width * 0.5857;
    fillcenterText(ctx, parseInt(INT.value) * 5 + "", x, y, size);

    // 知識
    size = canvas.width * 0.058;
    x = canvas.width * 0.902;
    y = canvas.width * 0.5857;
    let Know = parseInt(EDU.value) * 5;
    if (Know >= 100) {
      Know = 99;
    }
    fillcenterText(ctx, Know + "", x, y, size);

    // 幸運
    size = canvas.width * 0.058;
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

    // skills
    var skills = [];
    var skillval = [];
    size = canvas.width * 0.027;
    for (let k = 0; k < 18; k++) {
      skills[k] = document.getElementById("SKILL" + (k + 1));
      skillval[k] = document.getElementById("SKILLval" + (k + 1));

      let l = Math.floor(k / 6);
      let m = k - 6 * l;
      // skill name
      x = canvas.width * 0.05 + canvas.width * 0.31 * l;
      y = canvas.width * 0.769 + canvas.width * 0.04 * m;
      filltopleftText(ctx, skills[k].value, x, y, size);

      // skill value
      x = canvas.width * 0.07 + canvas.width * 0.225 + canvas.width * 0.31 * l;
      fillcenterText(ctx, skillval[k].value, x, y, size);
    }

    // status
    function TextStatus(val, num) {
      size = canvas.width * 0.023;
      x = canvas.width * 0.0735 + canvas.width * 0.0818 * (num - 1);
      y = canvas.width * 0.657;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      fillcenterText(ctx, val.value, x, y, size);
    }

    TextStatus(STR, 1);
    TextStatus(CON, 2);
    TextStatus(POW, 3);
    TextStatus(DEX, 4);
    TextStatus(APP, 5);
    TextStatus(SIZ, 6);
    TextStatus(INT, 7);
    TextStatus(EDU, 8);

    var png = canvas.toDataURL("image/png");
    document.getElementById("canvas-img").src = png;
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
  context.textBaseline = "alphabetic";
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
