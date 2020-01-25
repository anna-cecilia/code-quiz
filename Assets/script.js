/*
What do we need:
1. generate template using html + css
2. get information from question.js file + display it on html
3. validate user response and display if answer was right / wrong
4. keep track of correct responses
5. set timer when quiz begins and if the timer is done before the user answers all questions, user loses
6. save score on client side storage and display it to the userat the end of each game and in view high scores page.

*/

// elements

var startButton = document.getElementById('start-button');
var questionPage = document.getElementById('questionPage')
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var counter = document.getElementById("counter");
var timer = document.getElementById("timer");
var progress = document.getElementById("progress");
var scoreContainer = document.getElementById("scoreContainer")


var highscoresPage = document.getElementById('highscores-page');
var viewHighscoresButton = document.getElementById('highscores-page');

// create some variables

var lastQuestion = questions.length-1;
let runningQuestion = 0;
let count = 0;
var questionTime = 15; // 15s
var guageWidth = 150; // 150px
var guageUnit = guageWidth / questionTime;
let TIMER;
let score = 0;


//start quiz

startButton.addEventListener("click", function startQuiz()
{
    var startPage = document.getElementById('start-page');
    //hide start page
    startPage.style.display = "none";

    //show questions
    startQuestions();

    document.getElementById("question-page").style.display = "block";

    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
});

function startQuestions(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


// counter

function showCounter () {
    if (count <= questionTime){
        counter.innerHTML =count;
        timer.style.width = count * guageUnit + "px";
        count++
    }
    else {
        count = 0;
        answerIsWrong()
        if (runningQuestion < lastQuestion){
            runningQuestion++
            startQuestions();
        } 
        else{
            document.getElementById("endPage").style.display = "block";
            clearInterval(TIMER);
            scoreRender()
        }
    }
}

//Check Answer

function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        score++
    }
    else {
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        startQuestions();
    }
    else {
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is right

function answerIsRight () {


}

// answer is wrong 

function answerIsWrong () {

}

// score

function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function handleUserName() {
    var userNamePage = document.getElementById('name');
    userNamePage.style.display = 'flex';
  
    userNamePage.addEventListener('keypress', function(event) {
      if (event.key == 'Enter') {
        if (event.target.value) {
          currentUser = event.target.value; // save current user
          userNamePage.style.display = 'none'; // hide page
  
          console.log(currentUser);
        }
      }
    })
  }

