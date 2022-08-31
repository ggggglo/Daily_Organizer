// Variables for save buttons
var save1 = document.querySelector("#save1");
var save2 = document.querySelector("#save2");
var save3 = document.querySelector(".save3");
var save4 = document.querySelector(".save4");
var save5 = document.querySelector(".save5");
var save6 = document.querySelector(".save6");
var save7 = document.querySelector(".save7");
var save8 = document.querySelector(".save8");
var save9 = document.querySelector(".save9");

// Variables for text areas
var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var text4 = document.querySelector("#text4");
var text5 = document.querySelector("#text5");
var text6 = document.querySelector("#text6");
var text7 = document.querySelector("#text7");
var text8 = document.querySelector("#text8");
var text9 = document.querySelector("#text9");

// Var for the time-blocks that hold the hours
var hours = document.querySelector(".hour")

// Variable that shows the current date and time in the header of the page
var today = moment();
$("#currentDay").text(today.format("LLLL"));

// Line 30-74.
//Event listeners to save into local storage what is input in the text areas for each time-block
save1.addEventListener('click', function(){
    var textContent1 = text1.value;
    localStorage.setItem("stored1", textContent1);
});

save2.addEventListener('click', function(){
    var textContent2 = text2.value;
    localStorage.setItem("stored2", textContent2);
});

save3.addEventListener('click', function(){
    var textContent3 = text3.value;
    localStorage.setItem("stored3", textContent3);
});

save4.addEventListener('click', function(){
    var textContent4 = text4.value;
    localStorage.setItem("stored4", textContent4);
});

save5.addEventListener('click', function(){
    var textContent5 = text5.value;
    localStorage.setItem("stored5", textContent5);
});

save6.addEventListener('click', function(){
    var textContent6 = text6.value;
    localStorage.setItem("stored6", textContent6);
});

save7.addEventListener('click', function(){
    var textContent7 = text7.value;
    localStorage.setItem("stored7", textContent7);
});

save8.addEventListener('click', function(){
    var textContent8 = text8.value;
    localStorage.setItem("stored8", textContent8);
});

save9.addEventListener('click', function(){
    var textContent9 = text9.value;
    localStorage.setItem("stored9", textContent9);
});

// Get items from local storage to display in each of the text areas for each time-block
$("#text1").val(localStorage.getItem("stored1"));
$("#text2").val(localStorage.getItem("stored2"));
$("#text3").val(localStorage.getItem("stored3"));
$("#text4").val(localStorage.getItem("stored4"));
$("#text5").val(localStorage.getItem("stored5"));
$("#text6").val(localStorage.getItem("stored6"));
$("#text7").val(localStorage.getItem("stored7"));
$("#text8").val(localStorage.getItem("stored8"));
$("#text9").val(localStorage.getItem("stored9"));

// Varible for the time now in 24 hour format
var timeNow = moment().format('HH');

//Line 92-198
//Functions for each time block to set present, past, future classes depending on the current time
function hour9(){
    if (("09") < timeNow) {
        $("#text1").addClass("past");

    } else if (("09") === timeNow) {
        $("#text1").addClass("present");

    } else if (("09") > timeNow) {
        $("#text1").addClass("future");
    }
};
        
function hour10(){        
    if (("10") < timeNow) {
        $("#text2").addClass("past");

    } else if (("10") === timeNow) {
        $("#text2").addClass("present");

    } else if (("10") > timeNow) {
        $("#text2").addClass("future");
    }  
};

function hour11(){        
    if (("11") < timeNow) {
        $("#text3").addClass("past");

    } else if (("11") === timeNow) {
        $("#text3").addClass("present");

    } else if (("11") > timeNow) {
        $("#text3").addClass("future");
    }  
};

function hour12(){        
    if (("12") < timeNow) {
        $("#text4").addClass("past");

    } else if (("12") === timeNow) {
        $("#text4").addClass("present");

    } else if (("12") > timeNow) {
        $("#text4").addClass("future");
    }  
};

function hour13(){        
    if (("13") < timeNow) {
        $("#text5").addClass("past");

    } else if (("13") === timeNow) {
        $("#text5").addClass("present");

    } else if (("13") > timeNow) {
        $("#text5").addClass("future");
    }  
};

function hour14(){        
    if (("14") < timeNow) {
        $("#text6").addClass("past");

    } else if (("14") === timeNow) {
        $("#text6").addClass("present");

    } else if (("14") > timeNow) {
        $("#text6").addClass("future");
    }  
};

function hour15(){        
    if (("15") < timeNow) {
        $("#text7").addClass("past");

    } else if (("15") === timeNow) {
        $("#text7").addClass("present");

    } else if (("15") > timeNow) {
        $("#text7").addClass("future");
    }  
};

function hour16(){        
    if (("16") < timeNow) {
        $("#text8").addClass("past");

    } else if (("16") === timeNow) {
        $("#text8").addClass("present");

    } else if (("16") > timeNow) {
        $("#text8").addClass("future");
    }  
};

function hour17(){        
    if (("17") < timeNow) {
        $("#text9").addClass("past");

    } else if (("17") === timeNow) {
        $("#text9").addClass("present");

    } else if (("17") > timeNow) {
        $("#text9").addClass("future");
    }  
};


console.log(timeNow);

//Declaration of functions
hour9();
hour10();
hour11();
hour12();
hour13();
hour14();
hour15();
hour16();
hour17();