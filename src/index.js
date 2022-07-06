import "./styles.css";
var webHeight = document.body.offsetHeight - (window.innerHeight - 96);
var ele = document.querySelector("#percent-bar>div>p");
window.addEventListener("scroll", hlpr);
function hlpr() {
  let inter = window.pageYOffset;
  var res = (inter * 100) / webHeight;
  console.log(res);
  var fres = Math.round(res);
  ele.innerText = fres + "% scrolled";
}
