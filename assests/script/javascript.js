var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");
var answerBtn = $("#answer-buttons");
var questionsContainer = $("#question-container");
var questionEl = $("#question");
var questionIndex = 0;
var score = 0;
var card = $("#card");
var seconds = $("#countdown");
var currentQuestion = questionsArray[questionIndex];

$(document).ready(function(){
    startBtn.on("click", startQuiz);
    answerBtn.on("click", selectAnswer);
    nextBtn.on("click", setNextQuestion);

function startQuiz() {
    var seconds = document.getElementById("countdown").textContent;
    seconds.removeClass("hide");
    var countdown = setInterval(function(){
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

    startBtn.addClass("hide");
    questionIndex = 0;
    currentQuestion = questionsArray[questionIndex];
    questionsContainer.removeClass("hide");
    displayQuestion(currentQuestion);

    console.log(currentQuestion)
}

});

function displayQuestion() {
    answerBtn.empty();

    questionEl.text(currentQuestion.title);
    $.each(currentQuestion.choices, function(index, choice){
        var newBtn = $("<button>");
        nextBtn.text(choice);
        newBtn.addClass("btn btn-info");
        answerBtn.append(newBtn);
        questionIndex++
    })
    nextBtn.removeClass("hide")
}

function setNextQuestion() {
    showQuestion(currentQuestion);
    currentQuestion = questionsArray[questionIndex];

}