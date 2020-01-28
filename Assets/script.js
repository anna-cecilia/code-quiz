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
var user = '';
var score = 0;

var lastQuestion = questions.length - 1;
let runningQuestion = 0;

var done = false;


//start quiz + questions

startButton.addEventListener("click", function startQuiz() {
  var startPage = document.getElementById('start-page');
  //hide start page
  startPage.style.display = "none";

  //show questions
  startQuestions();
  handleTimer();

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

// end of questions

// Check Answer

function checkAnswer(answer) {

  if (runningQuestion == lastQuestion) {
    
    response(answer);
    done = true;
    scoreShow(event.target.innerText);
  }

  else {
    response(answer);

    runningQuestion++;
    startQuestions();
  }
}

function response(answer) {
  if (answer == questions[runningQuestion].correct) {
    showAlert('Right', 400);
    score++;
    

  console.log(score);
  }
  else {
    showAlert('Wrong', 400);
    

  }
};

function showAlert(text, time, bcolor) {
  $('#alert').show();
  $('#alert').text(text);

  setTimeout(function () {
    $('#alert').hide();
  }, time);

}

// end of check answer

// score
function scoreShow() {
  document.getElementById("endPage").style.display = "block";
  document.getElementById("question-page").style.display = "none";

  $('#score').text('You got '+score+' out of 5.');

  var userNamePage = document.getElementById('name-page');
  userNamePage.style.display = 'flex';

  // showUserName();
}

// function showUserName() {
//   var userNamePage = document.getElementById('name-page');
//   userNamePage.style.display = 'flex';
// }

// function FinalScore() {

//   var secondsRemaining = timerDisplay.textContent;

//   if (secondsRemaining > 10) {
//     score += 50;
//   } else if (secondsRemaining > 5) {
//     score += 20;
//   }

//   score.innerText = score;
//   return score;
// };

//end of score


// timer
function handleTimer() {
  var time = 20;

  var interval = setInterval(function() {
    time--
    $('#timer').html(time);

    if (time == 0) {
      clearInterval(interval);
      scoreShow()
    }
  
    if (done) {
      clearInterval(interval);
    }
  }, 1000);
}

// var quizStart;
// function startTimer() {
//   quizStart = setTimeout(alertFunc, 10000);
// }

// function alertFunc() {
//   alert("Time's up!");
//   scoreShow();
// }
// end of timer

// store highscores
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  // while (ul.firstChild) {
  //   ul.removeChild(ul.firstChild)
  // }
})

// store highscores ends