/*
What do we need:
1. generate template using html + css
2. get information from question.js file + display it on html
3. validate user response and display if answer was right / wrong
4. keep track of correct responses
5. set timer when quiz begins and if the timer is done before the user answers all questions, user loses
6. save score on client side storage and display it to the userat the end of each game and in view high scores page.

*/

// variables

var startButton = document.getElementById('start-button');
var questionPage = document.getElementById('questionPage')
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var highscoresPage = document.getElementById('highscores-page');
var viewHighscoresButton = document.getElementById('end-button');
var score = 0;

var lastQuestion = questions.length - 1;
let runningQuestion = 0;


//start quiz

startButton.addEventListener("click", function startQuiz() {
  var startPage = document.getElementById('start-page');
  //hide start page
  startPage.style.display = "none";

  //show questions
  startQuestions();
  startTimer();

  document.getElementById("question-page").style.display = "block";
});


function startQuestions() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

}


//Check Answer

function checkAnswer(answer) {

  if (runningQuestion == lastQuestion) {
    scoreShow(event.target.innerText);
  }

  else {
    response(answer);

    runningQuestion++;
    startQuestions();
  }
}

// check answer

function response(answer) {
  if (answer == questions[runningQuestion].correct) {
    score += 10;
    document.getElementById("right").style.display = "block";
  }
  else {
    document.getElementById("wrong").style.display = "block"
  }
};


// score

function scoreShow() {
  document.getElementById("right").style.display = "none";
  document.getElementById("wrong").style.display = "none";
  document.getElementById("endPage").style.display = "block";
  document.getElementById("question-page").style.display = "none";

  showUserName();
  clearInterval(totalTime);

}

function showUserName() {
  var userNamePage = document.getElementById('name-page');
  userNamePage.style.display = 'flex';

  userNamePage.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
      if (event.target.value) {
        window.localStorage.setItem('user', JSON.stringify(username));

        userNamePage.style.display = 'none'; // hide page
      }
    }
  })
}

//timer
// start timer 
var quizStart;
	function startTimer(){  
    quizStart = setTimeout(alertFunc, 20000);
  }
  
	function alertFunc(){    
    alert("Time's up!");
    scoreShow();
	}
	startTimer();



