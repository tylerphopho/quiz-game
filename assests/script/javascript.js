var startBtn = $("#start-btn");
var nextBtn = $("next-btn");
var answerBtn = $("answer-buttons")
var questionsContainer = $("question-container");
var questionEl = $("question")
var questionIndex = 0;
var score = 0;
var card = $("card")
var seconds = $("countdown");
var currentQuestion = questionsArray[questionIndex];

$(document).ready(function(){
    startBtn.on("click", startQuiz);
    answerBtn.on("click", selectAnswer);
    nextBtn.on("click", setNextQuestion);

function startQuiz() {
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function(){
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

    startBtn.addClass("hide");
    questionIndex = 0;
    currentQuestion = questionsArray[questionIndex];
    questionsContainer.removeClass("hide");
    showQuestion(currentQuestion);

    console.log(currentQuestion)
}

});
