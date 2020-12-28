var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".imgone").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".imgtwo").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h2").innerHTML = "🚩<em> Player 1 Wins!</em>";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h2").innerHTML = "🚩<em> Player 2 Wins!</em>";
}
else {
  document.querySelector("h2").innerHTML="🚩<em> Draw! </em>🚩";
}
