var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo")
}
