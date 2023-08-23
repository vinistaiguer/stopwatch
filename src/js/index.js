window.onload = function() {
    const MAX_THOUSANDTH = 99;
    const MAX_SECOND = 59;
    const MAX_MINUTE = 59;

    let minutes = "00";
    let seconds = "00";
    let thousandth = "00";

    let appendThousandth = document.getElementById("thousandth");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");

    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");

    let Interval ;

    buttonStart.onclick = function() {

        clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    function updateTimerDisplay() {
        appendMinutes.innerHTML = minutes.toString().padStart(2, '0');
        appendSeconds.innerHTML = seconds.toString().padStart(2, '0');
        appendThousandth.innerHTML = thousandth.toString().padStart(2, '0');
    }

    function resetTimer() {
        minutes = 0;
        seconds = 0;
        thousandth = 0;
        updateTimerDisplay();
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        resetTimer();
    }

    function startTimer() {
        thousandth++;
        
        if (thousandth > MAX_THOUSANDTH) {
            seconds++;
            thousandth = 0;
        }

        if (seconds > MAX_SECOND) {
            minutes++;
            seconds = 0;
        }

        updateTimerDisplay();
    }
}