let upBtn = document.getElementById("upBtn");
let overlay = document.querySelector('.overlay');
let overlayBackground = document.querySelector('.overlayBackground');
let colors = ["#ff56bb", "#808080", "#8ecdff", "#ef6d00", "#10a37f", "#F0CC00"];
// rotate the circle element
let circle = document.getElementById('circle')
let lastDegree = 0;

upBtn.onclick = function () {
  debugger;
  let i = 0;
  setInterval(() => {
    overlayBackground.style.backgroundColor = colors[(i + 1) % colors.length];
    i = (i + 1) % colors.length;
    //rotate circle
    lastDegree += 90;
    circle.style.transform = `rotate(-${lastDegree}deg)`;
  }, 2000);

};
