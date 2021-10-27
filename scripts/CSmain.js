function addOnload(a, b) {
  b.addEventListener("load", a, false);
}
function loadImage(c, a) {
  var b = new Image();
  b.src = "../images/CharaSheetTemplate.png";
  b.onload = function () {
    var e = document.getElementById(c);
    var f = document.getElementById(a);
    var d = f.getContext("2d");
    f.width = e.clientWidth;
    f.height = e.clientHeight;
    d.fillStyle = "rgb(255,255,255)";
    d.fillRect(0, 0, f.width, f.height);
    d.drawImage(b, 0, 0, f.width, f.height);
  };
}
function drawText(
  aa,
  E,
  s,
  G,
  b,
  L,
  d,
  g,
  t,
  S,
  ab,
  A,
  Z,
  C,
  n,
  P,
  c,
  af,
  h,
  B,
  D,
  K
) {
  var I = document.getElementById(aa);
  var r = document.getElementById(E);
  var v = document.getElementById(G);
  var ag = document.getElementById(b);
  var M = document.getElementById(L);
  var q = document.getElementById(d);
  var i = document.getElementById(g);
  var ae = document.getElementById(t);
  var V = document.getElementById(S);
  var o = document.getElementById(ab);
  var J = document.getElementById(A);
  var U = document.getElementById(Z);
  var z = document.getElementById(C);
  var f = document.getElementById(n);
  var O = document.getElementById(P);
  var a = document.getElementById(c);
  var R = document.getElementById(af);
  var F = document.getElementById(h);
  var N = document.getElementById(B);
  var p = document.getElementById(D);
  var ad = document.getElementById(K);
  const j = document.getElementById(s);
  var w = j.getContext("2d");
  const e = new Image();
  e.src = "../images/CharaSheetTemplate.png";
  w.fillStyle = "rgb(255,255,255)";
  w.fillRect(0, 0, j.width, j.height);
  w.fillStyle = I.value;
  function T(ai, ah) {
    if (parseInt(ai) > 18) {
      ai = "18";
    }
    let X = j.width * 0.039 + j.width * 0.0818 * (ah - 1);
    let Y = j.width * 0.65 - j.width * 0.0183 * (parseInt(ai) - 1);
    let W = j.width * 0.072;
    let H = j.width * 0.0183 * parseInt(ai);
    w.fillRect(X, Y, W, H);
  }
  T(f.value, 1);
  T(O.value, 2);
  T(a.value, 3);
  T(R.value, 4);
  T(F.value, 5);
  T(N.value, 6);
  T(p.value, 7);
  T(ad.value, 8);
  var ac = new Image();
  ac.src = r.src;
  addOnload(Q, e);
  ac.onload = u();
  function u() {
    let X = j.width * 0.0327;
    let Y = j.width * 0.023;
    let W = j.width * 0.263;
    let H = j.width * 0.263;
    w.drawImage(ac, X, Y, W, H);
  }
  function Q() {
    w.drawImage(e, 0, 0, j.width, j.height);
    let size = j.width * 0.045;
    let x = j.width * 0.475;
    let y = j.height * 0.0945;
    fillcenterText(w, v.value + " " + ag.value, x, y, size);
    size = j.width * 0.015;
    x = j.width * 0.475;
    y = j.width * 0.055;
    fillcenterText(w, M.value + "      " + q.value, x, y, size);
    size = j.width * 0.045;
    x = j.width * 0.683;
    y = j.width * 0.0875;
    fillcenterText(w, i.value, x, y, size);
    size = j.width * 0.035;
    x = j.width * 0.765;
    y = j.width * 0.0845;
    fillcenterText(w, J.value, x, y, size);
    size = j.width * 0.025;
    x = j.width * 0.885;
    y = j.width * 0.07;
    if (ae.value == "  " && V.value == "  " && o.value == "  ") {
    } else {
      fillcenterText(
        w,
        ae.value + "/     \n       " + V.value + "/" + o.value,
        x,
        y,
        size
      );
    }
    size = j.width * 0.02;
    x = j.width * 0.325;
    y = j.width * 0.15;
    filltopleftText(w, z.value, x, y, size);
    size = j.width * 0.025;
    x = j.width * 0.89;
    y = j.width * 0.27;
    fillcenterText(w, U.value, x, y, size);
    size = j.width * 0.07;
    x = j.width * 0.883;
    y = j.width * 0.383;
    fillcenterText(w, parseInt(a.value) * 5 + "", x, y, size);
    size = j.width * 0.058;
    x = j.width * 0.763;
    y = j.width * 0.482;
    let HP = (parseInt(O.value) + parseInt(N.value)) / 2;
    HP = Math.ceil(HP);
    fillcenterText(w, HP + "", x, y, size);
    size = j.width * 0.058;
    x = j.width * 0.898;
    y = j.width * 0.482;
    fillcenterText(w, a.value, x, y, size);
    size = j.width * 0.058;
    x = j.width * 0.767;
    y = j.width * 0.5857;
    fillcenterText(w, parseInt(p.value) * 5 + "", x, y, size);
    size = j.width * 0.058;
    x = j.width * 0.902;
    y = j.width * 0.5857;
    let Know = parseInt(ad.value) * 5;
    if (Know >= 100) {
      Know = 99;
    }
    fillcenterText(w, Know + "", x, y, size);
    size = j.width * 0.058;
    x = j.width * 0.767;
    y = j.width * 0.687;
    fillcenterText(w, parseInt(a.value) * 5 + "", x, y, size);
    size = j.width * 0.04;
    x = j.width * 0.9;
    y = j.width * 0.68;
    let point = parseInt(f.value) + parseInt(N.value);
    let DB;
    if (point <= 12) {
      DB = "-1D6";
    } else {
      if (point <= 16) {
        DB = "-1D4";
      } else {
        if (point <= 24) {
          y = j.width * 0.675;
          DB = "--";
        } else {
          if (point <= 32) {
            DB = "+1D4";
          } else {
            if (point <= 40) {
              DB = "+1D6";
            } else {
              DB = "";
            }
          }
        }
      }
    }
    fillcenterText(w, DB, x, y, size);
    var ah = [];
    var ai = [];
    size = j.width * 0.027;
    for (let k = 0; k < 18; k++) {
      ah[k] = document.getElementById("SKILL" + (k + 1));
      ai[k] = document.getElementById("SKILLval" + (k + 1));
      let l = Math.floor(k / 6);
      let m = k - 6 * l;
      x = j.width * 0.05 + j.width * 0.31 * l;
      y = j.width * 0.769 + j.width * 0.04 * m;
      filltopleftText(w, ah[k].value, x, y, size);
      x = j.width * 0.07 + j.width * 0.225 + j.width * 0.31 * l;
      fillcenterText(w, ai[k].value, x, y, size);
    }
    function aj(al, ak) {
      size = j.width * 0.023;
      x = j.width * 0.0735 + j.width * 0.0818 * (ak - 1);
      y = j.width * 0.657;
      w.fillStyle = "rgba(255,255,255,0.9)";
      fillcenterText(w, al.value, x, y, size);
    }
    aj(f, 1);
    aj(O, 2);
    aj(a, 3);
    aj(R, 4);
    aj(F, 5);
    aj(N, 6);
    aj(p, 7);
    aj(ad, 8);
  }
}
function fillTextLine(b, d, a, f) {
  var e = d.split("\n");
  var c = b.measureText("あ").width;
  e.forEach(function (h, g) {
    b.fillText(h, a, f + c * g);
  });
}
function filltopleftText(c, d, a, e, b) {
  c.textBaseline = "alphabetic";
  c.textAlign = "left";
  c.font = b + "px 'RocknRoll One', sans-serif";
  fillTextLine(c, d, a, e);
}
function fillcenterText(c, d, a, e, b) {
  c.textBaseline = "alphabetic";
  c.textAlign = "center";
  c.font = b + "px 'RocknRoll One', sans-serif";
  fillTextLine(c, d, a, e);
}
