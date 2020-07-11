var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() 
{
    msec++
    msecHeading.innerHTML =   msec;
    if (msec >= 100)
     { 
        sec++
        secHeading.innerHTML = sec;
        msec = 0;

    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
        min / 60;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("txt").innerHTML = "Your time is <b>Start </b> Now";
}

function pause() {
    clearInterval(interval)
    document.getElementById("start").innerHTML = "Resume";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("txt").innerHTML = "Your time is<b>Pause</b> Now";

}

function reset() {
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
    hourHeading.innerHTML = 0;
    clearInterval(interval); 
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("txt").innerHTML = "To Start again: Press the <b>Start</b> Button" ;

}
