
var myQuestions = [
    {
      question: "Which day is Earth Day?",
      answers: {
        a: 'April 22',
        b: 'December 5',
        c: '115th day of the Year',
        d: 'January 1'
      },
      correctAnswer: 'a'
    },
    {
      question: "What country produces the most energy in the world?",
      answers: {
        a: 'China',
        b: 'Iraq',
        c: 'USA',
        d: 'Geenland'
      },
      correctAnswer: 'a'
    },
    {
        question: "Which substance makes up 78% of air?",
        answers: {
          a: 'Noble Gases',
          b: 'Nitrogen',
          c: 'Carbon Dioxide',
          d: 'Oxygen'
        },
        correctAnswer: 'b'
    },
    {
        question: "Water is found in which of the following:",
        answers: {
          a: 'Plants',
          b: 'Animals',
          c: 'Fog',
          d: 'All of the above'
        },
        correctAnswer: 'd'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
// on start, show the quiz
startButton.onclick = function(){
    myQuestions(questions, quizContainer);
  }
  //create a function to generate a quiz.
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // local.Storage. GET OR SET?
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }