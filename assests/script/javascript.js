var startBtn = $("#start-btn");
var answerBtn = $("#answer-buttons");
var questionsContainer = $("#question-container");
var questionEl = $("#question");
var questionIndex = 0;
var score = 0;
var card = $("#card");
var seconds = $("#countdown");
var timer = $("#timer");
var quizInfo = $("#quiz-info")
var message = document.getElementById("message");
var currentQuestion = questionsArray[questionIndex];


$(document).ready(function(){
    startBtn.on("click", startQuiz);
    answerBtn.on("click", selectAnswer);


    //Function to start timer and quiz.
function startQuiz() {
    quizInfo.addClass("hide")
    timer.removeClass("hide");
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function(){
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

    startBtn.addClass("hide");
    questionIndex = 0;
    currentQuestion = questionsArray[questionIndex] ;
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
        
    }
    
    function setNextQuestion() {
        questionIndex++
        currentQuestion = questionsArray[questionIndex];
        displayQuestion(currentQuestion)
        console.log(currentQuestion)
        
    }
    
    function selectAnswer(e) {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === currentQuestion.answer){
            setMessage("Correct!", "green")
            score += 10;
            seconds += 15;
        } else { ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass("btn"))
            setMessage("Wrong!", "red")
            score -= 10
            seconds -= 15;
        }
        console.log(score)
        setNextQuestion();
    }
    //Sends message if answer is correct or wrong
    function setMessage(msg, color) {
        message.style.color = color
        message.textContent = msg;
    }

    //Game over function that will display when 

});
