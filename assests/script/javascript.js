
$(document).ready(function(){
    $("#startBtn").on("click", function(){
        $("#startMenu").hide();
    })
})


// Tyler's Code //
var startBtn = $("#start-btn");
var  questionsboxEl = $("#questions-box");
var questionEl = $("#questions");
var answerBtn = $("#answer-buttons");
var nextBtn = $("next-btn");
var questionIndex = 0;
var score = 0;
var card = $(".card");
var seconds = $("#countdown");
var currentQuestion = questionsArray[questionIndex];

var countdown = setInterval(function(){
    timer--;
    document.getElementById("timer").textContent = timer;
    if (timer <= 0) clearInterval(countdown);
}, 1000);

// $(document).ready(function(){
// startBtn.click(startQuiz);
// answerBtn.click(selectAnswer);
// nextBtn.click(setNextQuestion);

// function startQuiz() {
    
//     var seconds = document.getElementById("countdown").textContent;
//     var countdown = setInterval(function(){
//         seconds--;
//         document.getElementById("countdown").textContent = seconds;
//         if (seconds <= 0) clearInterval(countdown);
//     }, 1000);
    
//     startBtn.addClass("hide");
//     questionIndex = 0;
//     currentQuestion = questionsArray[questionIndex];
//     questionsboxEl.removeClass("hide");
//     setNextQuestion(currentQuestion);
// }

// function showQuestion() {
//     answerBtn.empty();

//     questionEl.text(currentQuestion.title);
//     $.each(currentQuestion.choices, function(index, choice){
//         var newBtn = $("<button>");
//         newBtn.text(choice);
//         newBtn.addClass("btn btn-info");
//         answerBtn.append(newBtn);
//     })

//     nextBtn.removeClass("hide")
// }

// function setNextQuestion() {
//     questionIndex++
//     showQuestion(currentQuestion);

//     currentQuestion
// }

// })