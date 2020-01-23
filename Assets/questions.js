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
        title: 'What does CSS stand for?',
        choices: [
            'Class Style Settings',
            'Class Style Sheet',
            'Cascading Style Sheet',
            'Cascading Style Settings'
        ],
        answer: 'Cascading Style Sheet'
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

