// 15 seconds per question- 5 questions would be 75 seconds

/*
What do we need:
1. generate template using html + css
2. get information from question.js file + display it on html
3. validate user response and display if answer was right / wrong
4. keep track of correct responses
5. set timer when quiz begins and if the timer is done before the user answers all questions, user loses
6. save score on client side storage and display it to the userat the end of each game and in view high scores page.

*/

var questions = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        choices: [
            'posible solution',
            'posible solution',
            'posible solution',
            'posible solution'
        ],
        answer: 'to be determined'
    },
    {
        title: 'Question 2',
        choices: [
            'posible solution',
            'posible solution',
            'posible solution',
            'posible solution'
        ],
        answer: 'to be determined'
    },
    {
        title: 'Question 3',
        choices: [
            'posible solution',
            'posible solution',
            'posible solution',
            'posible solution'
        ],
        answer: 'to be determined'
    },
    {
        title: 'Question 4',
        choices: [
            'posible solution',
            'posible solution',
            'posible solution',
            'posible solution'
        ],
        answer: 'to be determined'
    },
]

// handle start page
var startPage = document.getElementById('start-page');
var startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    // hide start page
    startPage.style.display = 'none';

    // show questions
    handleQuestion();
})


// handle question page
var questionPage = document.getElementById('question-page');
var questionTitle = document.getElementById('question-title');
var questionsContainer = document.getElementById('questions-container');

function handleQuestion() {
    questionPage.style.display = 'block';

    questionTitle.innerText = questions[0].title;

    var choices = ['posible solution', 'posible solution', 'posible solution', 'posible solution'];

    choices.forEach(generateListItem);
}

function generateListItem(item, index) {
    var li = document.createElement('li');
    // index = index+1;
    li.innerText = (index + 1) + '. ' + item;

    questionsContainer.appendChild(li);
}
