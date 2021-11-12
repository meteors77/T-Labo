// window loading start method
function windowLoadStart() {
  const pageLoad = document.getElementById("loading");
  pageLoad.classList.remove("loaded");
}

// window loading finish method
function windowLoadEnd() {
  const pageLoad = document.getElementById("loading");
  window.setTimeout(function () {
    pageLoad.classList.add("loaded");
  }, 1000);
}
