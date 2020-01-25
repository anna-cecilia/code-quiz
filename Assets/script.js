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
    showAlert('Right', 400);
    score += 10;
  }
  else {
    showAlert('Wrong', 400);
  }
};

function showAlert(text, time, bcolor) {
  $('#alert').show();
  $('#alert').text(text);

  // timer done show background in red
  $('#alert').css('background-color', bcolor);

  setTimeout(function () {
    $('#alert').hide();
  }, time);
}


// score

function scoreShow() {
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

// timer
var quizStart;
function startTimer() {
  quizStart = setTimeout(alertFunc, 20000);
}

function alertFunc() {
  alert("Time's up!");
  scoreShow();
}

  // function quizStart() {
  //   var sec = 20;
  //   var interval = setInterval(function functionName() {
  //     sec--
  //     $('#timer').html(sec);

  //     if (sec == 0) {
  //       clearInterval(interval);
  //       showAlert('Time is over!', 1200);

  //       scoreShow();
  //     }
  //   }, 1000)
  // }


