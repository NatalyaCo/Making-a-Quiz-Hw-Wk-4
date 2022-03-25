var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".quiz_box")
var timeCount = quiz_box.querySelector(".timer_sec")
var results_box = document.querySelector(".results_box");
var restart_quiz = results_box.querySelector(".buttons .restart");
var quit_quiz = results_box.querySelector(".buttons .quit")
var initalSelector =document.querySelector (".initialSection");
var initalInput = document.querySelector ("#inital-input");
var savebtn = document.querySelector ("#savebtn");

var questionSelector = document.querySelector ("#question-section")
var answerNum = document.querySelector ("#right-answer")
var que_numb = 1;
var counter;
var timeValue = 75;
var userScore = 0;
var index = 0;



//var questions =document.querySelector(".que_text")


start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

function showQuestions() {

    var que_text = document.querySelector(".que_text");
    var option_list = document.querySelector(".option_list");
    var que_tag = '<span>' + questions[index].numb + "." + questions[index].question + '<span>';
    var options_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[1] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[2] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    
    option_list.innerHTML = options_tag;
    var option =document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click",  function(){
            let userAns= this.textContent
           
            if (userAns ===  questions[index].answer) {
                userScore += 1;
                console.log(userScore);
               // answer.classlist.add("correct");
               answerNum.textContent = userScore;
                console.log("answer is correct");
            } else {
               // answer.classList.add("Incorrect")
                console.log("Answer is Incorrect")
                timeValue = timeValue -10;
            }

            index++
            if(index <questions.length){
                showQuestions()
            }
            else{
                clearInterval(counter);
                initalSelector.classList.remove("hide")
                questionSelector.classList.add("hide")
                //showResultsBox()
            }
        });
    }

}


function questCounter(index) {
    var buttom_ques_counter = quiz_box.querySelector(".total_que")

    var totalQuestCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>questions</span>';
    buttom_ques_counter.innerHTML = totalQuestCountTag;
}


function startTimer() {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = timeValue;
        timeValue--;
        if (timeValue < 0) {
            clearInterval(counter);
            timeCount.textContent = "END";
        }

    }
}

continue_btn.onclick = () => {

    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");


    //showQuestions(0);
    //questCounter(1);
    startTimer();
    showQuestions();
    questCounter(que_numb);
    //startTimer(timeValue);
}




restart_quiz.onclick = () => {
    results_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");
    //let que_count = 0;
    //let que_numb = 1;
    //let timeValue = 75;
    //let userScore = 0;
    showQuestions();
    questCounter(que_numb);
    //startTimer(timeValue);

}

quit_quiz.onclick = () => {
    window.location.reload();
}


//var que_text = document.querySelector(".que_text")




function optionSelected(answer) {
    startTimer(timeValue);
    var userAns = answer.textContent;
    var correctAns = questions[que_count].answer;
    var allOptions = option.list.children.length;
    var select_button = document.querySelectorAll(".Select")


    for (let i = 0; i < select_button.length; i++) {
        select_button.addEventListener("click", () => {


        })


    }

    if (userAns === correctAns) {
        userScore += 1;
        console.log(userScore);
       // answer.classlist.add("correct");
        console.log("answer is correct");
    } else {
       // answer.classList.add("Incorrect")
        console.log("Answer is Incorrect")
        timeCount = -10;
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");

    }
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions();
        questCounter(que_numb);
        //startTimer(timeCount);
    } else {
        console.log("Questions Completed");
        //showResultsBox();
    }


   
    showResultsBox();

}

function showResultsBox() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    results_box.classList.add("activeResult");
    var scoreText = results_box.querySelector(".score_text");

    if (userScore > 3) {
        var scoreTag = '<span> EXCELLENT! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        var scoreTag = '<span> Nice...You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        var scoreTag = '<span> BummerYou got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

