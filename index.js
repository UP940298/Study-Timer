const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");

var mCounter = 0;
var sCounter = 0;

function timer() {
    document.querySelector("#title").innerHTML = "Study time!";
    start.style.display = "none";

    if (mCounter != 50) {
        console.log(mCounter);
        console.log(sCounter);

        if (sCounter < 10) {
            seconds.innerHTML = "0" + sCounter;
        } else {
            seconds.innerHTML = sCounter;
        }

        if (sCounter == 59) {

            sCounter = 0;
            mCounter += 1;

            if (mCounter < 10) {
                minutes.innerHTML = "0" + mCounter;
            } else {
                minutes.innerHTML = mCounter;
            }
        }

        sCounter += 1;

        setTimeout(timer, 1000);
    } else {
        document.querySelector("#title").innerHTML = "Break time!";
        mCounter = 0;
        sCounter = 0;
        minutes.innerHTML = 00;
        seconds.innerHTML = 00;
        start.style.display = "block";
    }
}

start.addEventListener("click", timer);