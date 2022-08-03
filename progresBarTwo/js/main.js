const numb = document.querySelector(".numb");
const text = document.querySelector(".circl__text");
let counter = 55;

function goUrl() {
    document.location.href = "../page18/index.html";
};

setInterval(()=>{

    if(counter == 100){
        clearInterval();
        goUrl();
    }else{
        counter+=1;
        numb.textContent = counter + "%";
    }

    if(counter == 60) {
        text.textContent = "Адаптация плана Марафона к Вашему плотному графику ";
    }else if(counter == 75) {
        text.textContent = "Подбор подходящих Вам рецептов и тренировок";
    }else if(counter == 85) {
        text.textContent = "Ваша индивидуальная программа похудения готова!";
    }
}, 75);