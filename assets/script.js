var save1 = document.querySelector("#save1");
var save2 = document.querySelector("#save2");
var save3 = document.querySelector(".save3");
var save4 = document.querySelector(".save4");
var save5 = document.querySelector(".save5");
var save6 = document.querySelector(".save6");
var save7 = document.querySelector(".save7");
var save8 = document.querySelector(".save8");
var save9 = document.querySelector(".save9");


var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var text4 = document.querySelector("#text4");
var text5 = document.querySelector("#text5");
var text6 = document.querySelector("#text6");
var text7 = document.querySelector("#text7");
var text8 = document.querySelector("#text8");
var text8 = document.querySelector("#text9");


var hours = document.querySelector(".hour")

var today = moment();
$("#currentDay").text(today.format("LLLL"));


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




$("#text1").val(localStorage.getItem("stored1"));
$("#text2").val(localStorage.getItem("stored2"));
$("#text3").val(localStorage.getItem("stored3"));
$("#text4").val(localStorage.getItem("stored4"));
$("#text5").val(localStorage.getItem("stored5"));
$("#text6").val(localStorage.getItem("stored6"));
$("#text7").val(localStorage.getItem("stored7"));
$("#text8").val(localStorage.getItem("stored8"));
$("#text9").val(localStorage.getItem("stored9"));


var timeNow = moment().format('HH');

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
        $("#text2").addClass("persent");

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
hour9();
hour10();
hour11();
hour12();
hour13();
hour14();
hour15();
hour16();
hour17();