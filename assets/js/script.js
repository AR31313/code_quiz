//Questions for the quiz
var myQuestion1 = {
    question: "Which day is Earth Day?",
    answer: {
        a: 'April 22',
        b: 'December 5',
        c: '115th day of the Year',
        d: 'January 1'
    },
    correctAnswer: 'a'
};
var myQuestion2 = {
    question: "What country produces the most energy in the world?",
    answer: {
        a: 'China',
        b: 'Iraq',
        c: 'USA',
        d: 'Geenland'
    },
    correctAnswer: 'a'
};
var myQuestion3 = {
    question: "Which substance makes up 78% of air?",
    answer: {
        a: 'Noble Gases',
        b: 'Nitrogen',
        c: 'Carbon Dioxide',
        d: 'Oxygen'
    },
    correctAnswer: 'b'
};
var myQuestion4 = {
    question: "Water is found in which of the following:",
    answer: {
        a: 'Plants',
        b: 'Animals',
        c: 'Fog',
        d: 'All of the above'
    },
    correctAnswer: 'd'
};

var questions = [myQuestion1, myQuestion2, myQuestion3, myQuestion4]
var answers = [myQuestion1, myQuestion2, myQuestion3, myQuestion4];
var userAnswer = '';
var numCorrect = 0;

// for (let i = 0; i < questions.length; i++) {
//     if(questions[i].correctAnswer == "b"){
//         console.log("correct")
//     }
    
// }

var qi = 0 //questionIndex
var ai = 0 //answerIndex
var answerText =document.querySelector ("#answerText");
var nextQuestion =document.querySelector ("#nextBtn");
var startbutton = document.querySelector(".start-button");
// var quizContainer = document.getElementById('quiz');
var questionText = document.querySelector("#questionText");
var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

//display next question after clicking NEXT the button.
nextQuestion.addEventListener("click", () => {
    questionText.innerHTML=questions[qi].question;
    qi++;
});
//display next answer after clicking NEXT the button.
nextQuestion.addEventListener("click", () => {
    answerText.innerHTML=questions[qi].answer;
    qi++;
});


// // The startGame function is called when the start button is clicked
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startbutton.disabled = true;
//     // renderBlanks()
//     questionText.innerHTML=questions[qi].question;
//     qi++;
//     // startTimer()
// }
// // on start, show the quiz
// startbutton.addEventListener("click", startGame);
// console.log("it works!");

