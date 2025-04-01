
// // These are my questions [1-10]
// //I embedded the objects property in an array

// let question = [{
//     "question": "What is 2 + 2 ?.",
//     "option1": "3",
//     "option2": "4",
//     "option3": "9",
//     "option4": "23",
//     "answer": "4"
// }, {
//     "question": "What is 8 * 2 ?.",
//     "option1": "10",
//     "option2": "16",
//     "option3": "12",
//     "option4": "212",
//     "answer": "16"
// }, {
//     "question": "What is 16 / 2 ?.",
//     "option1": "12",
//     "option2": "6",
//     "option3": "8",
//     "option4": "4",
//     "answer": "8"
// }, {
//     "question": "B in BODMAS stands for what.",
//     "option1": "Bond",
//     "option2": "Bracket",
//     "option3": "Brace",
//     "option4": "Big",
//     "answer": "Bracket"
// }, {
//     "question": "What is 2 + 9 ?.",
//     "option1": "11",
//     "option2": "4",
//     "option3": "9",
//     "option4": "23",
//     "answer": "11"
// }, {
//     "question": "What is O stands for in BODMAS ?.",
//     "option1": "Off",
//     "option2": "On",
//     "option3": "Of",
//     "option4": "Orange",
//     "answer": "Of"
// }, {
//     "question": "What is 20 * 2 ?.",
//     "option1": "31",
//     "option2": "40",
//     "option3": "22",
//     "option4": "18",
//     "answer": "40"
// }, {
//     "question": "What is the full meaning of A.P?.",
//     "option1": "Alert person",
//     "option2": "Arithmetic Progression",
//     "option3": "Arithmetic Product",
//     "option4": "Arise Pole",
//     "answer": "Arithmetic Progression"
// }, {
//     "question": "What is 1000 / 10?.",
//     "option1": "10000",
//     "option2": "1000",
//     "option3": "100",
//     "option4": "10",
//     "answer": "100"
// }, {
//     "question": "What is 300 ^ 2 ?.",
//     "option1": "3000",
//     "option2": "90000",
//     "option3": "9000",
//     "option4": "900",
//     "answer": "90000"
// }];

// //I declared all my variables first

// let currentQuestionIndex = 0;
// let score = 0;
// let totalQuestions = question.length;

// let container = document.getElementById("quizContainer");
// const questionEl = document.getElementById("question");
// let opt1 = document.getElementById("opt1");
// let opt2 = document.getElementById("opt2");
// let opt3 = document.getElementById("opt3");
// let opt4 = document.getElementById("opt4");
// let nextButton = document.getElementById("nextButton");
// let resultCont = document.getElementById("result");
// let timerDisplay = document.getElementById("timer");
// //This function will retrieve all my questions from the question array.

// function shuffleQuestions() {
//     question.sort(() => Math.random() - 0.5);
// }

// function loadQuestion(questionIndex) {
//     let q = question[questionIndex];
//     questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
//     opt1.textContent = q.option1;
//     opt2.textContent = q.option2;
//     opt3.textContent = q.option3;
//     opt4.textContent = q.option4;
//     startTimer();
// }

// function startTimer() {
//     let timeLeft = 10;
//     timerDisplay.textContent = `Time: ${timeLeft}s`;
//     timer = setTimeout(() => {
//         timeLeft--;
//         timerDisplay.textContent = `Time: ${timeLeft}s`;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             loadNextQuestion();
//         }
//     }, 1000);
// }

// //This function is when the nextQuestion is clicked.

// function loadNextQuestion() {
//     let selectedOption = document.querySelector("input[type=radio]:checked");
//     if (!selectedOption) {
//         alert("Please select your answer");
//         return;
//     }
//     let answer = selectedOption.value;
//     if (question[currentQuestionIndex].answer == getOptionText(selectedOption.nextElementSibling.id)) {
//         score += 10;
//     }
//     selectedOption.checked = false;
//     currentQuestionIndex++;

//     //This will show before the last question finish

//     if (currentQuestionIndex == totalQuestions - 1) {
//         nextButton.textContent = "Finish";
//     }

//     //Once the last question is done it will display "Your score"

//     if (currentQuestionIndex == totalQuestions) {
//         container.style.display = "none";
//         resultCont.style.display = "";
//         resultCont.textContent = "Your score: " + score;
//         return;
//     }
//     loadQuestion(currentQuestionIndex);
// }
// function getOptionText(elementID){
//     return document.getElementById(elementID).textContent
// }

// //This method is to display the first question when the page loads.

// loadQuestion(currentQuestionIndex);
// //This is a button .
// nextButton.addEventListener("click", loadNextQuestion);


// // These are my questions [1-10]
// //I embedded the objects property in an array

let question = [{
    "question": "What is 2 + 2 ?.",
    "option1": "3",
    "option2": "4",
    "option3": "9",
    "option4": "23",
    "answer": "4"
}, {
    "question": "What is 8 * 2 ?.",
    "option1": "10",
    "option2": "16",
    "option3": "12",
    "option4": "212",
    "answer": "16"
}, {
    "question": "What is 16 / 2 ?.",
    "option1": "12",
    "option2": "6",
    "option3": "8",
    "option4": "4",
    "answer": "8"
}, {
    "question": "B in BODMAS stands for what.",
    "option1": "Bond",
    "option2": "Bracket",
    "option3": "Brace",
    "option4": "Big",
    "answer": "Bracket"
}, {
    "question": "What is 2 + 9 ?.",
    "option1": "11",
    "option2": "4",
    "option3": "9",
    "option4": "23",
    "answer": "11"
}, {
    "question": "What is O stands for in BODMAS ?.",
    "option1": "Off",
    "option2": "On",
    "option3": "Of",
    "option4": "Orange",
    "answer": "Of"
}, {
    "question": "What is 20 * 2 ?.",
    "option1": "31",
    "option2": "40",
    "option3": "22",
    "option4": "18",
    "answer": "40"
}, {
    "question": "What is the full meaning of A.P?.",
    "option1": "Alert person",
    "option2": "Arithmetic Progression",
    "option3": "Arithmetic Product",
    "option4": "Arise Pole",
    "answer": "Arithmetic Progression"
}, {
    "question": "What is 1000 / 10?.",
    "option1": "10000",
    "option2": "1000",
    "option3": "100",
    "option4": "10",
    "answer": "100"
}, {
    "question": "What is 300 ^ 2 ?.",
    "option1": "3000",
    "option2": "90000",
    "option3": "9000",
    "option4": "900",
    "answer": "90000"
}];

// //I declared all my variables first

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = question.length;
let timer;

let container = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let nextButton = document.getElementById("nextButton");
let resultCont = document.getElementById("result");
let restartButton = document.getElementById("restartButton");
let timerDisplay = document.getElementById("timer");

//This function is to pick it randomly

function shuffleQuestions() {
    question.sort(() => Math.random() - 0.5);
}

 //This function will retrieve all my questions from the question array.

function loadQuestion(questionIndex) {
    let q = question[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    startTimer();
}

//This function is to set the Timeout.

function startTimer() {
    let timeLeft = 10;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    timer = setTimeout(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            loadNextQuestion();
        }
    }, 1000);
}


//This function is when the nextQuestion is clicked.

function loadNextQuestion() {
    clearInterval(timer);
    
    let selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption){
        alert ("Please enter your answer!");
        return;
    }
    if (selectedOption) {
        let answer = selectedOption.value;
        if (question[currentQuestionIndex].answer == getOptionText(selectedOption.nextElementSibling.id)) {
            score += 10;
        }
        selectedOption.checked = false;
    }
    currentQuestionIndex++;

    
//     //This will show before the last question finish

    if (currentQuestionIndex == totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }

    //Once the last question is done it will display "Your score"
    if (currentQuestionIndex == totalQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = `Your score: ${score}`.toUpperCase();
        restartButton.style.display = "block";
        return;
    }
    loadQuestion(currentQuestionIndex);
}

function getOptionText(elementID) {
    return document.getElementById(elementID).textContent;
}

//This function is to restart the quiz once its clicked.
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    loadQuestion(currentQuestionIndex);
    container.style.display = "block";
    resultCont.style.display = "none";
    nextButton.textContent = "Next Question";
    restartButton.style.display = "block";
}

shuffleQuestions();


// //This method is to display the first question when the page loads.

loadQuestion(currentQuestionIndex);
nextButton.addEventListener("click", loadNextQuestion);
restartButton.addEventListener("click", restartQuiz);