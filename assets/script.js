var save = document.querySelector(".saveBtn");
var text = document.querySelector("textarea");
var hours = document.querySelector(".hour")

var today = moment();
$("#currentDay").text(today.format("LLLL"));

save.addEventListener('click', function(){
    var textContent = text.value;
    localStorage.setItem("eventStored", textContent);
});

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

hour9();
hour10();
hour11();
hour12();
hour13();
hour14();
hour15();
hour16();
hour17();

console.log(timeNow);
