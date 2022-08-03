document.getElementById("btn_start").addEventListener('click', goUrl, false);

function goUrl() {
    document.location.href = "../page2/index.html";
}

document.addEventListener('DOMContentLoaded', function() {

/* Записываем в переменные массив элементов-кнопок и подложку.
   Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
let modalButtons = document.querySelectorAll('.js-open-modal');
let overlay = document.querySelector('.js-overlay-modal');
let closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function(e) {

       /* Предотвращаем стандартное действие элемента. Так как кнопку разные
          люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
          Нужно подстраховаться. */
       e.preventDefault();

       /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
          и будем искать модальное окно с таким же атрибутом. */
    let modalId = this.getAttribute('data-modal');
    let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


       /* После того как нашли нужное модальное окно, добавим классы
          подложке и окну чтобы показать их. */
       modalElem.classList.add('active');
       overlay.classList.add('active');

       let boxElement = document.querySelector('.active');
       let animation = boxElement.animate([
         {opacity: '0'},
         {transform: 'translate(0px)'},
        {transform: 'translate(0px, 200px)'}
       ], 800);
       animation.addEventListener('finish', function() {
         boxElement.style.transform = 'translate(0px, 200px)';
       });

    }); // end click

 }); // end foreach

 closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
       let parentModal = this.closest('.modal');

       let boxElement = document.querySelector('.active');
       let animation = boxElement.animate([
         {transform: 'translate(200)'},
         {opacity: '0'},
         {transform: 'translate(0px, 500px)'},
         {opacity: '0'},
       ], 500);
       animation.addEventListener('finish', function() {
        boxElement.style.transform = 'translate(0px, 0px)';
         parentModal.classList.remove('active');
         overlay.classList.remove('active')
       });

    });

 }); // end foreach

});