$(document).ready(function(){

    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
})

var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 15,
    timerOn: false,
    timerId: "",
};

var questions = {
    q1:"question 1",
    q2:"question 2",
    q3:"question 3",
    q4:"question 4",
},

var options = {
    q1:["A","B","C","D"],
    q2:["A","B","C","D"],
    q3:["A","B","C","D"],
    q4:["A","B","C","D"]
},

var answer = {
    q1:["A"],
    q2:["A"],
    q3:["A"],
    q4:["A"]
};

function StartGame () {

    game.correct =  0,
    game.incorrect =  0,
    game.unanswered =  0,
    game.currentSet =  0,
    clearInterval(game.timerId);
    
    $("#game").show();
    $("#results").html("");
    $("#timer").text(game.timer);
    $("#start").hide();
    $("rem-time").show();
    game.nextQuestion();

};

function nextQuestion (){

    game.time = 15;
    $("#timer").removeClass("last-sec");
    $("#timer").text(game.timer);

    if (!trivia.timerOn) {
        game.timerId = setInterval(game.timer,1000);
    }

    var questContent = Object.value(questions)[game.currentSet];
    $("#question").text(questContent);

    var trivOption =Object.value(trivOption)[game.currentSet];

    $.each(options, function(index,key)
        {$.each(options).append($('<button class="option-buttons">"+key+"</button>'));
    })

};

function timerRunning (){

    if (game.timer > -1 && game.currentSet < Object.key(questions).length){
        $("#timer").text(game.timer);
        game.time--;
            if(game.time ===4) {
            $("#timer").addClass("last-second");
        };
    }
    else if (game.timer ===-1){
        game.unanswered++
        game.result = false;
        clearInterval(game.timeId);
        resultId = setTimeout(game.guessResult,1000);
        $("#result").html("<h3>Out of Time! The correct answer was : " + object(answer)+"</h3>")
    }
    else if (game.currentSet ===Object.keys(questions).length){
        $("#result")
        .html(
        "<h3>Hope you had a lot of fun! </h3>"+
        "<p>CORRECT: "+ game.correct + "</p>" +
        "<p>INCORRECT: "+ game.incorrect + "</p>" +
        "<p>UNANSWERED: "+ game.unanswered + "</p>" +
        "<p> TRY AGAIN </p>"
        );

        $("#game").hide ();
        $("#start").show();
    };

};

function guessChecker (){

    var result;
    var currentAns = object (ans);
        
    if ($(this).text() ===currentAns) {
        $(this).addClass("success-btn").removeClass("info-button")
    };

    game.correct++;
        clearInterval(game.timerId);
        resultId = setTimeout(game.guessResult,1000);
        $("#result").html("<h3>Better luck next try!" + currentAns + "</h3>");  
    };


function guessResult() {
    game.currentSet++;

    $(".option").remove();
    $("#results h3").remove();

    game.nextQuestion();
}