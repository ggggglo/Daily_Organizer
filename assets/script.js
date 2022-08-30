var save = document.querySelector(".saveBtn");

var today = moment();
$("#currentDay").text(today.format("LLLL"));

save.addEventListener('click', function(){
    window.prompt("Hello");
});

