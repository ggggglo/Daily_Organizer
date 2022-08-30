var save = document.querySelector(".saveBtn");
var text = document.querySelector("textarea")

var today = moment();
$("#currentDay").text(today.format("LLLL"));

save.addEventListener('click', function(){
    var textContent = text.value;
    localStorage.setItem("eventStored", textContent);
    text = localStorage.getItem("eventStored");
    console.log(text);
});

console.log(text.content);
console.log(save);