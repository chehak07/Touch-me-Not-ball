something();
function something(){
  
  var posX = Math.floor(Math.random() * 100) + "%";
  var posY = Math.floor(Math.random() * 100) + "%";
  var someText=Math.floor(Math.random() * 5) + "s";
  
  document.getElementById("ball").style.top=posY;
  document.getElementById("ball").style.left=posX;
  document.getElementById("ball").style.transitionDuration=someText;
}
