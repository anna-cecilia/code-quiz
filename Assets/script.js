/*
What do we need:
1. generate template using html + css
2. get information from question.js file + display it on html
3. validate user response and display if answer was right / wrong
4. keep track of correct responses
5. set timer when quiz begins and if the timer is done before the user answers all questions, user loses
6. save score on client side storage and display it to the userat the end of each game and in view high scores page.

*/

var startPage = document.getElementById('start-page');
var startButton = document.getElementById('start-button');
var highscoresPage = document.getElementById('highscores-page');
var viewHighscoresButton = document.getElementById('highscores-page');

var currentQuestion = 0;
var user = '';

//start quiz

startButton.addEventListener('click', function () {
    var startPage = document.getElementById('start-page');

    // hide start page
    startPage.style.display = 'none';

    // show questions
    showQuestions();
})

// question page
var questionPage = document.getElementById('question-page');
var questionTitle = document.getElementById('question-title');
var questionsContainer = document.getElementById('choices');

function showQuestions() {
    var question = questions[currentQuestion];
    questionPage.style.display = 'block';

    questionTitle.innerText = question.title; // sets title 
    
    var choices = question.choices;
    questionsContainer.innerHTML = '';
    choices.forEach(generateListItem);
}

function generateListItem(item, index) {
    var li = document.createElement('li');
    // index = index+1;
    li.innerText = (index + 1) + '. ' + item;

    questionsContainer.appendChild(li);
}

// showQuestions() {
//     question++
//     generateListItem()
// }