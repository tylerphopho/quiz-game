var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");
var answerBtn = $("#answer-buttons");
var questionsContainer = $("#question-container");
var questionEl = $("#question");
var questionIndex = 0;
var score = 0;
var card = $("#card");
var seconds = $("#countdown");
var message = document.getElementById("message");
var currentQuestion = questionsArray[questionIndex];


$(document).ready(function(){
    startBtn.on("click", startQuiz);
    answerBtn.on("click", selectAnswer);
    nextBtn.on("click", setNextQuestion);


    //Function to start timer and quiz.
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
    displayQuestion(currentQuestion);

    console.log(currentQuestion)
}
    //Function to display the questions.
    function displayQuestion() {
        answerBtn.empty();
    
        questionEl.text(currentQuestion.title);
        $.each(currentQuestion.choices, function (index, choice){
            var newBtn = $("<button>");
            newBtn.text(choice);
            newBtn.addClass("btn btn-info");
            answerBtn.append(newBtn);
        })

        nextBtn.removeClass("hide")
    }
    
    function setNextQuestion() {
        questionIndex++
        displayQuestion(currentQuestion);
        currentQuestion = questionsArray[questionIndex];
    }
    
    function selectAnswer(e) {
        console.log(e.target.innerHTML)
        console.log(currentQuestion)
        if (e.target.innerHTML === currentQuestion.answer){
            setMessage("Correct!", "green")
        } else { ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass("btn"))
            setMessage("Wrong!", "red")
        };
        setNextQuestion();
    }

    function setMessage(msg, color) {
        message.style.color = color
        message.textContent = msg;
    }

});
