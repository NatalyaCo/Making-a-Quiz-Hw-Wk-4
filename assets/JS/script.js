var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".quiz_box")

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {

    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    questCounter (1);
}

let que_count = 0;
let que_numb = 1;


var select_button =document.querySelector(".quiz_box .options select")

select_button.onclick = ()=> {
    if(que_count < questions.length -1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    questCounter(que_numb);
}else{
    console.log("Questions Completed");
}

function showQuestions(index){
    var que_text = document.querySelector(".que_text");
    var option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+questions[index].numb + "." + question[index].question +'<span>';
    let options_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[3] + '<span></span></div>'   
    que_text.innerHTML = que_tag;
    option_list.innerHTML = options_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i =0; index < option_list.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    
} }

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option.list.chidren.length;
    if(userAns === correctAns){
        answer.classlist.add("correct");
        console.log("answer is correct");
    }else{
        answer.classList.add("Incorrect")
        console.log("Answer is Incorrect")
    }

    for (let i = 0; i<allOptions; ii++) {
        option_list.chidren[i].classList.add("disabled");
        
    }

function questCounter(index){
var buttom_ques_counter = quiz_box.querySelector(".total_que")

let totalQuestCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>questions</span>';
buttom_ques_counter.innerHTML = totalQuestCountTag;
} }