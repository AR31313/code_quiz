
// global data
var qi = 0 //questionIndex
var ai = 0 //answerIndex
var userInitial= [];
let time = 60;
var numCorrect = 0;

const countdownEL =document.getElementById('countdown');
let interval = setInterval (updatedCountdown,1000);
//function called updatedCountdown that takes seconds as an argument:
function updatedCountdown (){
    //if statement that executes when counter is less than 0:
         if (time <= 0 ) {
             clearInterval(interval);
            console.log('Ding! Time is UP');
          }
    countdownEL.innerHTML =`${time}`;
    time--;
}

var myQuestion1 = 
    {
    question: "Which day is Earth Day?",
    answer: ["April 22","December 5","115th day of the Year","January 1"],
    correctAnswer: "April 22"
};
var myQuestion2 = 
    {
    question: "What country produces the most energy in the world?",
    answer: ['China','Iraq','USA','Geenland'],
    correctAnswer: 'China'
};
var myQuestion3 = 
    {
    question: "Which substance makes up 78% of air?",
    answer: ['Noble Gases','Nitrogen','Carbon Dioxide','Oxygen'],
    correctAnswer: 'Nitrogen'
};
var myQuestion4 =
    {
    question: "Water is found in which of the following:",
    answer: ['Plants','Animals','Fog','All of the above'],
    correctAnswer: 'All of the above'
};

var questions = [myQuestion1, myQuestion2, myQuestion3, myQuestion4]
var startbutton = document.querySelector(".start-button");
var nextQuestion =document.querySelector ("#nextBtn");
var quizContainer = document.querySelector(".quizContainer");
var answerText =document.querySelector ("#answerText");
var questionText = document.querySelector("#questionText");
var resultsContainer = document.getElementById('#results');
var score = document.querySelector('.score'); //a variable to store users Answer Choice

// var submitButton = document.querySelector("#submitButton");
// var resetButton = document.querySelector("#resetScore");

// //display the quizContainer upon hitting the START button
var toggleBtn =document.querySelector('.start-button'); 
quizContainer.style.display = "none"



//show the quiz after hitting 'Start' Button
toggleBtn.addEventListener('click',() => {
    if(quizContainer.style.display === "none") {
    quizContainer.style.display = "block" ;
    } else{
        quizContainer.style.display === 'none';
        toggleBtn.innerHTML="RESTART";
        console.log('it works!');
    }

    questionText.innerHTML=questions[qi].question;
    displayOptions();
    console.log(qi);
    console.log(ai);

});

//display next questions after clicking SHOWQUESTION button.
nextQuestion.addEventListener("click", () => {
    questionText.innerHTML=questions[qi].question;
    displayOptions();
    console.log(qi);
    console.log(ai);
});

//function to display answer choices
function displayOptions() {

    if (time <= 0 ) {
        qi = 100
        }

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
    qi++;
    answerText.appendChild(buttonA)
    answerText.appendChild(buttonB)
    answerText.appendChild(buttonC)
    answerText.appendChild(buttonD)

// when the user clicks on button,then check if answer is correct
    buttonA.addEventListener('click', function (event) {
        var userAnswer = event.target.innerHTML;
        console.log( questions[qi - 1].correctAnswer)
        if(userAnswer === questions[qi -1].correctAnswer){
            numCorrect += 10;
            score.innerHTML = numCorrect
            console.log("Correct +10pts")
        }  else { //if the answer is incorrect, then ALERT the user. 
            console.log("incorrect!")
            time -= 10; //then take away 10 seconds from the timer.
            numCorrect -= 10; //then take away 10 points from the Score.
            score.innerHTML = numCorrect
        }
    });
    buttonB.addEventListener('click', function (event) {
        var userAnswer = event.target;
        console.log(event.target.innerHTML)
        if(userAnswer === questions[qi- 1].correctAnswer){
            numCorrect += 10;
            score.innerHTML = numCorrect
            console.log("Correct +10pts")

        }  else {
            console.log("incorrect!")
            time -= 10;
            numCorrect -= 10;
            score.innerHTML = numCorrect
        }
    });
    buttonC.addEventListener('click', function (event) {
        var userAnswer = event.target;
        if(userAnswer === questions[qi- 1].correctAnswer){
            numCorrect += 10;
            score.innerHTML = numCorrect
            console.log("Correct +10pts")
        }  else {
            console.log("incorrect!")
            time -= 10;
            numCorrect -= 10;
            score.innerHTML = numCorrect
        }
        return;
    });
    buttonD.addEventListener('click', function (event) {
        var userAnswer = event.target;
        if(userAnswer === questions[qi- 1].correctAnswer){
            console.log("Correct +10pts")
        }  else {
            console.log("incorrect!")
            time -= 10;
            numCorrect -= 10;
            score.innerHTML = numCorrect
        }
        return;
    });
}

// when user answers last question, then hide quizContainer & stop coutdown timer.

//score is submitted via SUBMIT SCORE btn or score is reset to 0-0 via RESET SCORE btn.

//if user clicks SUBMIT SCORE btn then display a form input to collect user initials.

//if user clicks RESET SCORE btn then hide the quizConatiner again(& START the Game again)

// when the user clicks submit button, then open FORM to save initials+ score & STORE to localStorage.

// if user submits their Initials then hide the quizcontainer again after they click OK TO submit & START the Game again

// //Initializing of the Game
// init();
