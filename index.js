const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
var ender;

var mCounter = 0;
var sCounter = 0;

function studyTimer() {
    const studyMin = document.getElementById('studyMin');
    const breakMin = document.getElementById('breakMin');

    document.querySelector("#title").innerHTML = "Study for " + studyMin.value + " minutes!";

    if (mCounter != studyMin.value) {

        if (sCounter < 10) {
            seconds.innerHTML = "0" + sCounter;
        } else {
            seconds.innerHTML = sCounter;
        }

        if (sCounter >= 58) {

            sCounter = 0;
            mCounter += 1;
            seconds.innerHTML = '00';
            minutes.innerHTML = '00';

            if (mCounter < 10) {
                minutes.innerHTML = "0" + mCounter;
            } else {
                minutes.innerHTML = mCounter;
            }
        }

        sCounter += 1;

        ender = setTimeout(studyTimer, 1000);

    } else {
        document.querySelector("#title").innerHTML = "Break time for " + breakMin.value + " minutes";
        mCounter = 0;
        sCounter = 0;
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        breakTime();
    }
}

function breakTime() {

    const studyMin = document.getElementById('studyMin');
    const breakMin = document.getElementById('breakMin');

    if (mCounter != breakMin.value){

        if (sCounter < 10) {
            seconds.innerHTML = "0" + sCounter;
        } else {
            seconds.innerHTML = sCounter;
        }

        if (sCounter >= 59) {

            sCounter = 0;
            mCounter += 1;

            if (mCounter < 10) {
                minutes.innerHTML = "0" + mCounter;
            } else {
                minutes.innerHTML = mCounter;
            }
        }

        sCounter += 1;

        ender = setTimeout(breakTime, 1000);

    } else {
        mCounter = 0;
        sCounter = 0;
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        studyTimer();
    }
}

function endTimer() {
    clearTimeout(ender);
    document.querySelector("#title").innerHTML = "Stopped, please click start to restart.";
    mCounter = 0;
    sCounter = 0;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    start.style.display = "block";
}

start.addEventListener("click", studyTimer);

end.addEventListener("click", endTimer);