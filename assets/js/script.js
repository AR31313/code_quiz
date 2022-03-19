//Questions for the quiz
var myQuestion1 = 
    {
    question: "Which day is Earth Day?",
    answer: ["April 22","December 5","115th day of the Year","January 1"],
    correctAnswer: "0"
};
var myQuestion2 = 
    {
    question: "What country produces the most energy in the world?",
    answer: ['China','Iraq','USA','Geenland'],
    correctAnswer: '0'
};
var myQuestion3 = 
    {
    question: "Which substance makes up 78% of air?",
    answer: ['Noble Gases','Nitrogen','Carbon Dioxide','Oxygen'],
    correctAnswer: '1'
};
var myQuestion4 =
    {
    question: "Water is found in which of the following:",
    answer: ['Plants','Animals','Fog','All of the above'],
    correctAnswer: '3'
};

var questions = [myQuestion1, myQuestion2, myQuestion3, myQuestion4]
// var answers = [myQuestion1, myQuestion2, myQuestion3, myQuestion4];

var qi = 0 //questionIndex
var ai = 0 //answerIndex
var answerText =document.querySelector ("#answerText");
var nextQuestion =document.querySelector ("#nextBtn");
var startbutton = document.querySelector(".start-button");
var questionText = document.querySelector("#questionText");
var resultsContainer = document.getElementById('#results');
var quizContainer = document.querySelector(".quizContainer");
// var submitButton = document.querySelector("#submitButton");
// var resetButton = document.querySelector("#resetScore");

// //display the quizContainer upon hitting the START button
// startbutton.addEventListener("click", function (event) {
//     var element = event.target;
//     console.log("it works!1");


// //add eventlistner to the target container
// quizContainer.addEventListener("click", function (event){
//     var element = event.target;
//     console.log("it works!1");
//     if (element.matches (".start-button")){
//         var state = element.getAttribute("data-view");
//         if (state==="hidden"){
//             //change the data-view attribute's value
//             element.setAttribute ("data-view","visible");
//             console.log("it works!2");
//     }   else {
//         // 'Hide' the number by setting .textContent to an empty string
//         element.textContent= "";
//         // Use .setAttribute() method
//         element.setAttribute("data-state", "hidden")
//         console.log("it works!3");
//         }
//     }
// });

//show the quiz after hitting 'Start' Button
var toggleBtn =document.querySelector('.start-button');
var quizContainer = document.querySelector('.quizContainer');
quizContainer.style.display = "none"

toggleBtn.addEventListener('click',() => {
    if(quizContainer.style.display === "none") {
    quizContainer.style.display = "block" ;
    } else{
        quizContainer.style.display === 'none';
        console.log('it works!');
    }
});

//display next question after clicking NEXT the button.
nextQuestion.addEventListener("click", () => {
    questionText.innerHTML=questions[qi].question;
    qi++;
    displayOptions();
    console.log(qi);
    console.log(ai);
});

//function to display answer choices

function displayOptions() {
  //empty and create new button each time
  answerText.innerHTML= "" 
    var buttonA = document.createElement("button");
    buttonA.textContent= questions[qi].answer[0];
    console.log(questions[qi].answer[ai]);

    var buttonB = document.createElement("button");
    buttonB.textContent= questions[qi].answer[1];
    console.log(questions[qi].answer[ai]);

    var buttonC = document.createElement("button");
    buttonC.textContent= questions[qi].answer[2];
    console.log(questions[qi].answer[ai]);

    var buttonD = document.createElement("button");
    buttonD.textContent= questions[qi].answer[3];
    console.log(questions[qi].answer[ai]);

    answerText.appendChild(buttonA)
    answerText.appendChild(buttonB)
    answerText.appendChild(buttonC)
    answerText.appendChild(buttonD)

    // for (let i = 0; i < questions.length; i++) {
    //     if(question.answer === correctAnswer){
    //         console.log("correct")
    //     }  
    // }
}
// var userAnswer = '';
// var numCorrect = 0;



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
// // answer buttons submit the users response to be checked for correct / incorrect, and run the appropriate function based on that result
// ans1Btn.addEventListener("click", function () {
//     i++;
//     console.log("answer 1 picked");
//     if (answerArray[0] !== question.correct) {
//       wrongAnswerClicked();
//     } else {
//       correctAnswerClicked();
//     }
//     nextQuestion();
//   });


