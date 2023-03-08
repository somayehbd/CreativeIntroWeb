let upBtn = document.getElementById("upBtn");
let overlay = document.querySelector('.overlay');
let colors = ["#ff56bb", "#808080", "#8ecdff", "#ef6d00", "#10a37f", "black"];

upBtn.onclick = function () {
  let i = 0;
  setInterval(() => {
    overlay.style.borderTop = `500px solid ${colors[i]}`;
    overlay.style.borderLeft = `500px solid ${colors[(i + 1) % colors.length]}`;
    overlay.style.borderBottom = `500px solid ${colors[(i + 2) % colors.length]}`;
    i = (i + 1) % colors.length;
  }, 3000);
};
