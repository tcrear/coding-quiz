var highScoreEl = document.querySelector(".highscores");
var initials = JSON.parse(localStorage.getItem("intials"));





var playAgain = document.querySelector(playagain);
playAgain.addEventListener("click", function(){
    location.href="./index.html"
});

var goBack = document.querySelector(back);
Back.addEventListener("click", function(){
    location.href="./index.html"
});

highscores();

