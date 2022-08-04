const startingMinutes = 1;

let time = startingMinutes * 60;

const constdownM = document.getElementById('timer__min');
const constdownS = document.getElementById('timer__sec');

const constdownCount = document.getElementById('timer__two__count');

setInterval(updateCoutdown, 1000);

function updateCoutdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (time != '0') {
        time--;
    };

    constdownM.innerHTML = `${minutes}`;
    constdownS.innerHTML = `${seconds}`;

    constdownCount.innerHTML = `${minutes} : ${seconds}`;
};