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
var viewHighscoresButton = document.getElementById('highscores-page');

var lastQuestion = questions.length-1;
let runningQuestion = 0;


//start quiz

startButton.addEventListener("click", function startQuiz()
{
    var startPage = document.getElementById('start-page');
    //hide start page
    startPage.style.display = "none";

    //show questions
    startQuestions();

    document.getElementById("question-page").style.display = "block";
});

function startQuestions(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}



//Check Answer

function checkAnswer(answer){
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        startQuestions();
    }
    else {

        if (runningQuestion == lastQuestion) {
          scoreShow(event.target.innerText);
        }
    }
}

// answer is right

// function answerIsRight () {
// alert.innerText = "Correct!"

// }

// answer is wrong 

function answerIsWrong () {
document.createElement("Wrong :(")
}

// score

function scoreShow(){
    document.getElementById("endPage").style.display = "block";
    document.getElementById("question-page").style.display="none";
    showUserName();
    
    // calculate the amount of question percent answered by the user
    // const scorePerCent = Math.round(100 * score/questions.length);
    
    
    // scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function showUserName() {
    var userNamePage = document.getElementById('name-page');
    userNamePage.style.display = 'flex';
  
    userNamePage.addEventListener('keypress', function(event) {
      if (event.key == 'Enter') {
        if (event.target.value) {
            window.localStorage.setItem('user', JSON.stringify(username));
        //   User = event.target.value; // save current user
          userNamePage.style.display = 'none'; // hide page
  
          console.log(currentUser);
          window.localStorage.setItem('user', JSON.stringify(person));
        }
      }
    })
  }

