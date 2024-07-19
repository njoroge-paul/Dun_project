const modal = document.querySelector("#modal");
const cancelButton = document.querySelector("#cancel-button");
const addButton = document.querySelector("#create-button");
function hideModal(){
    modal.classList.add("hidden");
}
function showModal(){
    modal.classList.remove("hidden");

}
addButton.addEventListener("click",showModal);
cancelButton.addEventListener("click",hideModal);
