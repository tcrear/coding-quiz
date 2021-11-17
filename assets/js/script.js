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
    question: "What year was JavaScript created?",
    choices: ["2016", "1997", "1999", "2000"],
    answer: "1997",
    },
    {
    question: "What is the purpose of JavaScript?",
    choices: ["Define the content of web pages", "Specify the layout of web pages", "Program the behavior of web pages", "All of the above"],
    answer: "Program the behavior of web pages",
    },
    {
    question: "How do you link the JavaScript file in a HTML page?",
    choices: ["<script>", "<JavaScript>", "<js>", "All of the above are acceptable"],
    answer: "<script>",
    },
    {
    question: "What three ways can you declare a JavaScript variable?",
    choices: ["Var, Let, Const", "Var, Const, Data", "Let, Const, Id", "None of the above"],
    answer: "Var, Let, Const",
    },
    {
    question: "What is an array?",
    choices: ["A special variable that can only hold one value", "A special variable that can hold more than one value", "A special variable that doesn't hold a value", "All of the above"],
    answer: "A special variable that can hold more than one value",
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