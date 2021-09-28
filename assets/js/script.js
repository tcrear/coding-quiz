// I have a bunch of quiz questions to ask. What is the best way to store all of those, PLUS the correct answer for each one? 
// For each question in the quiz, what will you need? 
    // The question itself 
    // The possible answer(s) (up to 4)
    // Which answer is correct 
// Will need to have a process where:
    // When the quiz starts, a countdown begins
    // A question is selected from the collect that you have
    // All the elements are added to the DOM
    // The user will click on one of the answers
    // Detect that click and determine if the user clicked on the right answer
        // If yes - they should get some points
        // If no - we subtract 5 or 10 seconds from the time remaining
        // Once the above is complete, go to the next question
// After all questions OR after the time runs out - show the user their score
// High score tracking - local storage
    // gets the count from local storage in your browser console
    // "count" at the end can be named anything


var timerEl = document.querySelector(".time");
var questionSectionEl = document.querySelector(".question-section");
var quizContainer = document.getElementById("quiz");
var finalScoreEl= document.querySelector(".card");
var questions =

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
}
