const numb = document.querySelector(".numb");
const text = document.querySelector(".circl__text");
let counter = 0;

function goUrl() {
    document.location.href = "../page17/index.html";
};

setInterval(()=>{

    if(counter == 55) {
        clearInterval();
        goUrl();
    }else{
        counter+=1;
        numb.textContent = counter + "%";
    }

    if(counter == 4) {
        text.textContent = "Обработка ваших ответов";
    }else if(counter == 15) {
        text.textContent = "Анализ вашего диетического профиля";
    }else if(counter == 30) {
        text.textContent = "Расчет вашего метаболического возраста";
    }
}, 75);