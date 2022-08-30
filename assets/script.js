var save = document.querySelector(".saveBtn");
var text = document.querySelector("textarea");
var hours = document.querySelector(".hour")

var today = moment();
$("#currentDay").text(today.format("LLLL"));

save.addEventListener('click', function(){
    var textContent = text.value;
    localStorage.setItem("eventStored", textContent);
    text = localStorage.getItem("eventStored");
    console.log(text);
});

var time = moment().format('LT');

console.log(time);

var olds = hours < time;
var nows = hours = time;
var news = hours > time;

console.log(olds);
console.log(nows);
console.log(news);




hourcolors();

console.log(text.content);
console.log(save);