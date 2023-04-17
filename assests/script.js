// Create questions,answers and correct answer for quiz
let questions = [
    {
    question: "What is the capital city of Australia?",
    answers: ["Perth", "Canberra", "Darwin", "Sydney"],
    correct: "Canberra",
  },
  {
    question: "Which is the largest continent?",
    answers: ["Africa", "Canada", "Europe", "Asia"],
    correct: "Asia",
  },
  {
    question: "What is the sum of 9 and 10?",
    answers: ["21", "10", "910", "19"],
    correct: "19",
  },
  {
    question: "Which one is the mammal?",
    answers: ["Whale", "Stone", "Tree", "Snake"],
    correct: "Whale",
  },
  {
    question: "Which is the light of Asia?",
    answers: [
      "Gautam Buddha", "Mahatma Gandhi", "Aangchang Suki", "Dalai lama"],
    correct: "Gautam Buddha",
  },
];
// Declare global variable
let Ql = 0;
let clockId;
let time = 59;
let clock = document.getElementById("time");
let prompt = document.querySelector("main");
let randomQuestions = questions.sort(() => Math.random() - 0.5);
let score = 0;
//start Quiz Operation
document.getElementById("start").addEventListener("click", clickStart);
function clickStart() {
  clockId = setInterval(handleTime, 1000);
  handleQuestion();
}
// 
function handleQuestion() {
  if (Ql < questions.length) {
    let {
      question,
      answers,
      correct
    } = questions[Ql];
    Ql++;
    //Display Quiz Section
    prompt.innerHTML = `<p>${question}</p>`;
    answers.forEach((answer) => {
      let answerBtn = document.createElement("button");
      answerBtn.innerText = answer;

      prompt.appendChild(answerBtn);
      answerBtn.addEventListener("click", () => {
        checkAnswer(answer, correct);
      });
    });
  } else {
    //Display message after the end of quiz
    prompt.innerHTML = `
    <p>Your final score is ${score}</p>
    <p>Thanks for playing</p>`;
    Gameover();
  }
}
// Check wether the answer is correct
function checkAnswer(answer, correct) {
  if (answer === correct) {
    score++;
    handleQuestion();
  } else {
    time -= 10;
    clock.innerHTML = time;
    handleQuestion();
  }
}
//Timer operation
function handleTime() {
  time--;
  time > 0 ? (clock.innerHTML = time) : Gameover();
}

function Gameover() {
  clearInterval(clockId);
  time = 0;
  clock.innerHTML = time;  
}

