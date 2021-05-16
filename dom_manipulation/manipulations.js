document.getElementById("para").innerHTML = "Hello World!";
document.getElementById("para").style.color = 'blue'
document.getElementById("myImage").src = "landscape.jpg";
    
let element = document.getElementById('para');
element.innerHTML = "Change"

// change text by clicking
function changeText(id) {
    id.innerHTML = "Ooops!";
  }

// change element by mouse
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
document.getElementById("demo").style.color = "red";
}

function mouseOut() {
document.getElementById("demo").style.color = "black";
}

