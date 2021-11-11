/**
 * PC画像のプレビュー表示
 * @param {String} target inputタグ
 * @param {String} sample_id 表示するcanvasのid
 */

function OutputImage(target, sample_id) {
  // ファイル読み込みクラス
  var reader = new FileReader();
  reader.onload = function () {
    $sample = document.getElementById(sample_id);

    // Imageクラスを使ってdiv要素にサイズを設定
    img = new Image();
    img.src = this.result;
    img.onload = function () {
      $sample.style.width = "300px";
      $sample.style.height = "300px";
      $sample.src = reader.result;
    };
  };
  // 読み込んだ画像ファイルをURLに変換
  reader.readAsDataURL(target.files[0]);
}

/* 生年月日ドロップダウンリスト生成 */

// dropdown-toggle → birth-select
var userBirthdayYear = document.querySelector(".birthday-year");
var userBirthdayMonth = document.querySelector(".birthday-month");
var userBirthdayDay = document.querySelector(".birthday-day");

// 西暦取得
const date = new Date();
const year = date.getFullYear();

// 1910年から現在の西暦+30年までoption要素を生成
createElementsForOptions(userBirthdayYear, "  ");
createElementsForOptions(userBirthdayYear, "??");
for (var i = 1910; i <= year + 30; i++) {
  createElementsForOptions(userBirthdayYear, i);
}
// 1月から12月までのoption要素を生成
createElementsForOptions(userBirthdayMonth, "  ");
createElementsForOptions(userBirthdayMonth, "??");
for (var j = 1; j <= 12; j++) {
  createElementsForOptions(userBirthdayMonth, j);
}
// 1日から31日までのoption要素を生成
createElementsForOptions(userBirthdayDay, "  ");
createElementsForOptions(userBirthdayDay, "??");
for (var k = 1; k <= 31; k++) {
  createElementsForOptions(userBirthdayDay, k);
}

// 日付の数は月によって変わるので動的に変えるようにする
userBirthdayMonth.addEventListener("change", () => {
  var days = createDaysForOptions(userBirthdayMonth);

  // 前回までで生成されたoptionを消去
  removeDaysElementsForOptions();

  createElementsForOptions(userBirthdayDay, "  ");
  createElementsForOptions(userBirthdayDay, "??");
  // 月に応じた月の日付option要素を生成
  for (var l = 1; l <= days; l++) {
    createElementsForOptions(userBirthdayDay, l);
  }
});

/* 技能のoption要素を生成 */
var skillSelect = [];
for (var num = 1; num <= 18; num++) {
  skillSelect[num] = document.querySelector("#SKILLval" + num);
  for (var opNum = 1; opNum <= 99; opNum++) {
    createElementsForOptions(skillSelect[num], opNum);
  }
}

/**
 * selectボックスのoption要素を生成するメソッド
 * @param {int} el element
 * @param {int} val value
 */
function createElementsForOptions(el, val) {
  var op = document.createElement("option");
  op.value = val;
  op.text = val;
  el.appendChild(op);
}

/**
 * 月が替わったら日のoption要素の値を変える
 * @param {int} el userBirthdayMonth
 * @returns 配列の要素（日数）を返す
 */
function createDaysForOptions(el) {
  var index = el.selectedIndex;
  // 連想配列key:value
  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  // 要素がずれるので+1をする
  return month[index - 1];
}

// 古いoption要素を削除するメソッド
function removeDaysElementsForOptions() {
  var birthday = document.getElementsByClassName("birthday-day");
  birthday[0].innerHTML = "";
}
