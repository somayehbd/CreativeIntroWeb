let upBtn = document.getElementById("upBtn")
let overlay = document.querySelector('.overlay')
let colors = ["#ff56bb","#808080","#8ecdff", "#ef6d00", "#10a37f", "black"];


upBtn.onclick = function () {
    overlay.style.borderLeft="500px solid #808080";
    overlay.style.borderBottom="500px solid #8ecdff";
    
    let interval = setInterval(function() {
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      overlay.style.borderTop=`500px solid ${randomColor}`
    }, 1000); 

}
