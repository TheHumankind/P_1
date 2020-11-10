var log = document.querySelector("#login");
var modalEmail = document.querySelector("#modal_email");
var modal = document.querySelector(".modal_vision");
var modalClose = document.querySelector("#close");



log.addEventListener("click", showModal);
modalClose.addEventListener("click",hideModal);

function showModal () {
    modal.classList.remove("modal_vision");
}

function hideModal () {
    modal.classList.add("modal_vision"); 
}

focusMethod = function getFocus(){
    document.querySelector("#modal_email").focus();
}

modal.addEventListener("mouseover",focusMethod);