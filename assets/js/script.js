var timerEl = document.querySelector(".timer-text");
var questionSectionEl = document.querySelector(".question-container");
var quizContainer = document.getElementById("quiz");
var finalScoreEl= document.querySelector(".card");
var startBtnEl = document.getElementById("startButton");
var mainPage= document.getElementById("code-quiz-start");
let countdownEl = document.querySelector(".timer-count")
var questions = [
    {
    question: "What is the official name of JavaScript?",
    choices: ["Java", "JavaScript 6", "ECMAScript", "ECMA"],
    answer: 2,
    },
    {
    question: "What year was JavaScript created?",
    choices: ["2016", "1997", "1999", "2000"],
    answer: 1,
    },
    {
    question: "What is the purpose of JavaScript?",
    choices: ["Define the content of web pages", "Specify the layout of web pages", "Program the behavior of web pages", "All of the above"],
    answer: 2,
    },
    {
    question: "How do you link the JavaScript file in a HTML page?",
    choices: ["script", "JavaScript", "js", "All of the above are acceptable"],
    answer: 0,
    },
    {
    question: "What three ways can you declare a JavaScript variable?",
    choices: ["Var, Let, Const", "Var, Const, Data", "Let, Const, Id", "None of the above"],
    answer: 0,
    },
    {
    question: "What is an array?",
    choices: ["A special variable that can only hold one value", "A special variable that can hold more than one value", "A special variable that doesn't hold a value", "All of the above"],
    answer: 1,
    },
]


var timerInterval;
var timeLeft = questions.length*15;
countdownEl.textContent = timeLeft;

function endGame(){
    clearInterval(timerInterval);
    timerEl.textContent = "Game over, man!";
    questionSectionEl.setAttribute("style", "display: none")
}
function startGame() {
    
    mainPage.setAttribute("style", "display: none");
    timerInterval = setInterval(()=>{
        timeLeft -= 1;//timeLeft = timeLeft -1;
        countdownEl.textContent = timeLeft;
        if(timeLeft <= 0){
            endGame()
        }
    }, 1000);
    displayQuestion();
}



function displayQuestion(qIndex) {

    let questionIndex= qIndex || 0;

    questionSectionEl.innerHTML= `  
    <h2>Question ${questionIndex+1} : ${questions[questionIndex].question} </h2>
    <ul>
        <li><button class="answer" data-choice = "0">${questions[questionIndex].choices[0]}</button></li>
        <li><button class="answer" data-choice = "1">${questions[questionIndex].choices[1]}</button></li>
        <li><button class="answer" data-choice = "2">${questions[questionIndex].choices[2]}</button></li>
        <li><button class="answer" data-choice = "3">${questions[questionIndex].choices[3]}</button></li>
    </ul>
<div class="message"></div>;`
let buttonArray= document.querySelectorAll(".answer");
for(let i = 0; i< buttonArray.length; i++){
   buttonArray[i].addEventListener('click', (e)=>{
       ;
    if(parseInt(e.currentTarget.dataset.choice)  === questions[questionIndex].answer){
        questionIndex++;
        if(questionIndex === questions.length){
            endGame();
        } else{
            
            displayQuestion(questionIndex);
        }
    }else{
        questionIndex++;
        if(questionIndex === questions.length){
            endGame();
        }else{
            
            timeLeft -= 10; // timeLeft = timeLeft - 10;
            displayQuestion(questionIndex);
        }
    }
}) 
}
};

//startBtnEl.addEventListener('click', startGame)

startBtnEl.addEventListener('click', ()=>{
    startGame()
})