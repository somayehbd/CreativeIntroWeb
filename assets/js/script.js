let upBtn = document.getElementById("upBtn")
// let downBtn = document.getElementById("downBtn")
let overlay = document.querySelector('.overlay')

upBtn.onclick = function () {
    overlay.style.borderTop="500px solid #ff56bb";
   
    let interval = setInterval(function() {
       
      overlay.style.borderLeft = "500px solid grey";
    }, 1000); 

    let interval2 = setInterval(function() {
      overlay.style.borderBottom = "500px solid black";
    }, 2000); 
}

// downBtn.onclick = function () {
//    alert('bottom arrow')
    
// }