// // PC以外のデバイスを検知
// // userAgent廃止により無効？
// var content = document.getElementById("canvas-container");
// // スマホ・タブレットの場合のみcanvasを1200x1200に
// var ua = navigator.userAgent;
// if (
//   ua.indexOf("iPhone") > 0 ||
//   ua.indexOf("iPad") > 0 ||
//   ua.indexOf("Android") > 0 ||
//   ua.indexOf("Mobile") > 0
// ) {
//   content.clientWidth = 1200;
//   content.clientHeight = 1200;
// }

// onloadイベントを追加する
function addOnload(func, IMAGE) {
  IMAGE.addEventListener("load", func, false);
}

// download
document.getElementById("download").onclick = (event) => {
  var img = document.getElementById("canvas-img");
  var link = document.createElement("a");
  link.href = img.getAttribute("src");
  link.download = "charasheet.png";
  link.click();
};

/**
 * 画像サイズを取得&表示するメソッド
 * @param {int or String} flug 操作切り替え（1でcanvasから読み取る.引数がa_idの場合はそれを使う）
 */
function sizeText(flug) {
  if (flug == 1) {
    let canvas = document.getElementById("preview");
    let text = canvas.width + "x" + canvas.width;
    console.log(text);
    document.getElementById("size-text").textContent = text;
  } else {
    let a = document.getElementById(flug);
    let a_len = parseInt(a.getAttribute("data-value"));
    let text = a_len + "x" + a_len;
    console.log(text);
    document.getElementById("size-text").textContent = text;
  }
}

// 画像サイズを変更するメソッド
function resizeImg(a_id) {
  TemplateLoadingStart();
  var a = document.getElementById(a_id);
  var cvs = document.getElementById("resize");
  var ctx = cvs.getContext("2d");
  cvs.width = parseInt(a.getAttribute("data-value"));
  cvs.height = parseInt(a.getAttribute("data-value"));
  sizeText(a_id);

  // 現在のcanvasから画像を生成
  // 即時関数を利用
  var img = (function () {
    var image = document.createElement("img");
    var lgCvs = document.getElementById("preview");
    image.src = lgCvs.toDataURL("image/png");
    return image;
  })();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, cvs.width, cvs.height);
    var imgcvs = document.getElementById("canvas-img");
    imgcvs.src = cvs.toDataURL("image/png");
    TemplateLoadingEnd();
  };
}

// 画像のエラー表示を用意
function createCanvas() {
  var cvs = document.createElement("canvas");
  cvs.width = 400;
  cvs.height = cvs.width;
  let context = cvs.getContext("2d");
  let text = "ERROR\n縦向きにしてリロードしてください";
  context.fillStyle = "rgb(70,70,70)";
  context.fillRect(0, 0, cvs.width, cvs.height);
  context.fillStyle = "rgb(200,200,200)";
  fillcenterText(
    context,
    text,
    cvs.width * 0.5,
    cvs.height * 0.5,
    cvs.width * 0.04
  );
  return cvs;
}

// template loading start method
function TemplateLoadingStart() {
  const imgload = document.getElementById("loading-img");
  const square = document.getElementsByClassName("square");
  imgload.style.transition = "";
  imgload.classList.remove("imgLoaded");
  for (let i = 0; i < square.length; i++) {
    square[i].classList.add("animate-start");
  }
}

// template loading finish method
function TemplateLoadingEnd() {
  const imgload = document.getElementById("loading-img");
  const square = document.getElementsByClassName("square");
  window.setTimeout(function () {
    // load完了時だけイージング
    imgload.style.transition = "opacity 1s, visibility 1s";
    for (let i = 0; i < square.length; i++) {
      square[i].classList.remove("animate-start");
    }
    imgload.classList.add("imgLoaded");
  }, 1350);
}

/**
 * テンプレ画像SET & ダウンロードサイズ制限
 * @param {String} container_id canvas親要素divのid
 * @param {String} canvas_id canvasのid
 */
function loadImage(container_id, canvas_id) {
  TemplateLoadingStart();
  var error = document.querySelector("#canvas-img");
  var cvs = createCanvas();
  error.src = cvs.toDataURL();
  // 画像を読み込んでImageオブジェクトを作成する
  var image = new Image();
  image.src = "../images/CharaSheetTemplate.png";
  image.onload = function () {
    // 画像ロードが完了してからキャンバスの準備をする
    var container = document.getElementById(container_id);
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext("2d");

    if (container.clientWidth <= 1200) {
      canvas.width = 1200;
      canvas.height = 1200;
    } else {
      canvas.width = image.width;
      canvas.height = image.height;
    }

    // フォント読込遅れ改善
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "left";
    ctx.font = canvas.width * 0.1 + "px 'RocknRoll One', sans-serif";
    fillTextLine(
      ctx,
      "フォント読込（黑男女投擲英馬歴工鍵聞歩術精析跡跳）",
      0,
      0
    );

    // 背景を白色に描画
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // キャンバスに画像を描画（開始位置0,0）
    // 第４引数、第５引数の指定サイズにリサイズ
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    var png = canvas.toDataURL("image/png");
    if (png != "data:,") {
      document.getElementById("canvas-img").src = png;
    }

    //ダウンロードサイズ規制
    if (container.clientWidth <= 1200) {
      var set1 = document.getElementById("medImg");
      var set2 = document.getElementById("bigImg");
      // スマホ・タブレットの場合は2000,4500のサイズを指定できない
      set1.classList.add("disabled");
      set2.classList.add("disabled");
    }
    sizeText(1);
    TemplateLoadingEnd();
    windowLoadEnd();
  };
}

// キャンバスに文字を描く
function drawText(canvas_id) {
  TemplateLoadingStart();
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
    size = canvas.width * 0.026;
    for (let k = 0; k < 18; k++) {
      skills[k] = document.getElementById("SKILL" + (k + 1));
      skillval[k] = document.getElementById("SKILLval" + (k + 1));

      let l = Math.floor(k / 6);
      let m = k - 6 * l;
      // skill name
      x = canvas.width * 0.045 + canvas.width * 0.31 * l;
      y = canvas.width * 0.768 + canvas.width * 0.04 * m;
      filltopleftText(ctx, skills[k].value, x, y, size);

      // skill value
      x = canvas.width * 0.2965 + canvas.width * 0.31 * l;
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

    // 再度error判定→imgに表示
    var error = document.querySelector("#canvas-img");
    var cvs = createCanvas();
    error.src = cvs.toDataURL();
    var png = canvas.toDataURL("image/png");
    if (png != "data:,") {
      document.getElementById("canvas-img").src = png;
    }
    sizeText(1);
    TemplateLoadingEnd();
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
