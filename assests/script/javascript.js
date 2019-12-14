var startBtn = $("#start-btn");
var answerBtn = $("#answer-buttons");
var questionsContainer = $("#question-container");
var questionEl = $("#question");
var scoreboard = $("#score-board");
var scoreboardBtn = $("#scoreboard-btn");
var highscore = $("#highscores");
var questionIndex = 0;
var score = 0;
var card = $("#card");
var quizInfo = $("#quiz-info")
var userScore = $("#user-score");
var userForm = $("#user-form");
var userList = $("#user-list");
var userName = $("#user-name");
// var lastUser = JSON.parse(localStorage.getItem("userArr"));
var userInput = document.querySelector("#user-list");
var submitBtn = $("#submit-button")
var gameOverDV = $("#game-over");
var gameOverHeader = $("#game-over-header");
var usersArray = [];
var Timer = $("#timer");
var runningTimer;
var message = document.getElementById("message");
var currentQuestion = questionsArray[questionIndex];


$(document).ready(function(){
    startBtn.on("click", startQuiz);
    answerBtn.on("click", selectAnswer);
    submitBtn.on("click", submitUser);


    //Function to start timer
function startTimer() {
    var seconds = $("#countdown").text();
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) {
            gameOver();
        } else {
            runningTimer = setTimeout(startTimer, 1000);
        }
    }
    
    
    function startQuiz() {  
    quizInfo.addClass("hide")
    Timer.removeClass("hide")
    scoreboardBtn.addClass("hide");
    startTimer();    
    startBtn.addClass("hide");
    questionIndex = 0;
    currentQuestion = questionsArray[questionIndex] ;
    questionsContainer.removeClass("hide");
    displayQuestion(currentQuestion);
        
    }

    console.log(currentQuestion)
    //Function to display the questions.
    function displayQuestion() {
        answerBtn.empty();

        questionIndex++
        questionEl.text(currentQuestion.title);
        $.each(currentQuestion.choices, function (index, choice){
            var newBtn = $("<button>");
            newBtn.text(choice);
            newBtn.addClass("btn btn-info");
            answerBtn.append(newBtn);
        })
        //     if(currentQuestion >= questionsArray.length) {
        //     gameOver();
        // }
        
    }
    
    function setNextQuestion() {
        currentQuestion = questionsArray[questionIndex];
        displayQuestion(currentQuestion)
        if(currentQuestion >= questionsArray.length) {
            gameOver();
        }

        console.log(currentQuestion)
        
        
    }
    
    function selectAnswer(e) {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === currentQuestion.answer){
            setMessage("Correct!", "green")
            score += 10;
        } else { ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass("btn"))
            setMessage("Wrong!", "red")
            score -= 10
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
    function gameOver() {
        questionEl.empty();
        answerBtn.empty();
        $("#message-container").addClass("hide")
        runningTimer = clearInterval(runningTimer);
        userScore.removeClass("hide")
        userScore.text(`Score: ${score} points`)
        gameOverHeader.removeClass("hide")
        userForm.removeClass("hide")

    }

    function submitUser (e) {
        localStorage.setItem("userArr", JSON.stringify(userArr));
        $.each(userArr, function (index, options) {
            let newItem = $("<li>");
            newItem.text(`${userName} - ${score}`);
            userList.append(newItem);

            userArr.push(userName);
            userArr.sort((a,b) => b.score - a.score );
            userArr.splice(5);
            // var lastUser = JSON.parse(localStorage.getItem("userArr"));
            // userInputSpan.textContent = lastUser.userInput;
        })
        e.preventDefault()
    };
});
