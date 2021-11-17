var timerEl = document.querySelector(".time");
var questionSectionEl = document.querySelector(".question-section");
var quizContainer = document.getElementById("quiz");
var finalScoreEl= document.querySelector(".card");


var questions = [
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: "ECMAScript",
    },
]

var questionIndex=0;
var timerInterval;
var timeLeft = questions.length*10;

function startGame() {
    var mainPage= document.getElementById("quiz");
    mainPage.setAttribute("style", "display: none");
    timerInterval =setInterval(callback, 1000);
    displayQuestion();
}

function endGame(){
    clearInterval(timerInterval);
    timerEl.textContent = "Game over, man!";
}

function displayQuestion() {
    questionSectionEl.innerHTML= `  
    <h2>Question ${questionIndex+1} : ${questions[questionIndex].question} </h2>
    <ul>
        <li><button class="answer">${questions[questionIndex].options[0]}</button></li>
        <li><button class="answer">${questions[questionIndex].options[1]}</button></li>
        <li><button class="answer">${questions[questionIndex].options[2]}</button></li>
        <li><button class="answer">${questions[questionIndex].options[3]}</button></li>
    </ul>
<div class="message"></div>;

};