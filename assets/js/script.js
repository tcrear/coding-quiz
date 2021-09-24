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
// High score tracking 