var upBtn = document.getElementById("upBtn")
var downBtn = document.getElementById("downBtn")
var overlay = document.querySelector('.overlay')

upBtn.onclick = function () {
    overlay.style.borderTop="500px solid #ff56bb"
   
}
downBtn.onclick = function () {
    overlay.style.borderLeft = "500px solid black";
}