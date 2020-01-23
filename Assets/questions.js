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

//quiz questions

var questions = [
    {
        question: 'What does CSS stand for?',
        choiceA: "Class Style Settings",
        choiceB: "Class Style Sheet",
        choiceC: "Cascading Style Sheet",
        choiceD: "Cascading Style Settings",
        correct: "C"
    },
    {
        question: 'What is the element used – and hidden – in code that explains things and makes the content more readable?',
        choiceA: "Comments",
        choiceB: "Comparisons",
        choiceC: "Notes",
        choiceD: "Quotations",
        correct: "A"
    },
    {
        question: 'In JavaScript, what is a block of code called that is used to perform a specific task?',
        choiceA: "Variable",
        choiceB: "Function",
        choiceC: "Declaration",
        choiceD: "String",
        correct: "C"
    },
    {
        question: 'What is considered to be the most popular programming language in the world?',
        choiceA: "Ruby",
        choiceB: "HTML",
        choiceC: "Swift",
        choiceD: "Javascript",
        correct: "D"
    },
    {
        question: 'Where is the JavaScript placed inside an HTML document or page?',
        choiceA: "In the title section.",
        choiceB: "In the footer section.",
        choiceC: "In the meta section.",
        choiceD: "In the body and head sections.",
        correct: "D"
    },
    
]

