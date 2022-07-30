const startingMinutes = 20;

let time = startingMinutes * 60;

const constdownEl = document.getElementById('timer__min');

setInterval(updateCoutdown, 1000);

function updateCoutdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    constdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
};