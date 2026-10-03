const button =
document.querySelector(".dropdown-button");
const list =
document.querySelector(".dropdown-list");
const valueText =
document.querySelector(".dropdown-value");
const hiddenInput =
document.getElementById("eventType");
const options =
document.querySelectorAll(".dropdown-option");

button.addEventListener("click", function () 
{
list.hidden= !list.hidden;
});

options.forEach(function (option) {
option.addEventListener("click", function (){
valueText.textContent=
option.textContent;
hiddenInput.value=
option.dataset.value;
button.classList.add("dropdown-button--selected");
list.hidden= true;
});
});