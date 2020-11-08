var log = document.querySelector("#login");
var mod_email = document.querySelector("#modal_email");
var modal = document.querySelector(".modal_vision");
var disable_modal = document.querySelector("#close");



log.addEventListener("click", add_modal);
disable_modal.addEventListener("click",remove_modal);

function add_modal () {
    modal.classList.remove("modal_vision");
}

function remove_modal () {
    modal.classList.add("modal_vision"); 
}

focusMethod = function getFocus(){
    document.querySelector("#modal_email").focus();
}

modal.addEventListener("mouseover",focusMethod);