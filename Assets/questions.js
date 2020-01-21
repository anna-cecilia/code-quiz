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
        title: "one",
        choices: ["strings","alerts"],
        answer: "alerts"
    },
    {
        title: "two",
        choices: ["quotes","curly brackets"],
        answer:"parentheses"
    },
    {
        title: "three",
        choices: ["quotes","curly brackets"],
        answer:"parentheses"
    },
    {
        title: "four",
        choices: ["quotes","curly brackets"],
        answer:"parentheses"
    },
]

var questionTag = document.getElementById('question');

questionTag.innerText = questions[0].title;

for (var i=0; i<questions.length; i++) 
{
    questionTag.innerText = questions[i].title;


    for (var c= 0; c < questions[i].choices.length; c++);
    
}
