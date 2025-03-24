const questions = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: 0 },
    { question: "What is 5 + 3?", options: ["5", "8", "12", "7"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;

function login() {
    let name = document.getElementById("student-name").value;
    if (name.trim() !== "") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        loadQuestion();
    } else {
        alert("Please enter your name");
    }
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion].question;
        const buttons = document.querySelectorAll(".option");
        buttons.forEach((button, index) => {
            button.textContent = questions[currentQuestion].options[index];
        });
    } else {
        document.getElementById("quiz-container").innerHTML = `<h2>Game Over!</h2><p>Your final score is: ${score}</p>`;
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score += 10;
        document.getElementById("score").textContent = "Score: " + score;
    }
    currentQuestion++;
    loadQuestion();
}
