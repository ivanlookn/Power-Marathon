document.getElementById("btn_start").addEventListener('click', goUrl, false);

function goUrl() {
    document.location.href = "../page2/index.html";
}

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(let t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(let t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
let modalButtons = document.querySelectorAll('.js-open-modal');
let overlay      = document.querySelector('.js-overlay-modal');
let closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
        e.preventDefault    ();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        let modalId = this.getAttribute('data-modal');
        let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');

        }); // end click

   }); // end foreach


closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
      });

}); // end foreach


    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready



// let boxElement = document.querySelector('.active');
// let animation = boxElement.animate([
//     {opacity: '0'},
//     {transform: 'translate(0px)'},
//     {transform: 'translate(0px, 200px)'}
// ], 800);

//     animation.addEventListener('finish', function() {
//         boxElement.style.transform = 'translate(0px, 200px)';
//     });

//     boxElement.style.transform = 'translate(0px, 0px)';



// let boxElement = document.querySelector('.active');
//        let animation = boxElement.animate([
//          {transform: 'translate(200)'},
//          {opacity: '0'},
//          {transform: 'translate(0px, 500px)'},
//          {opacity: '0'},
//        ], 500);
//          animation.addEventListener('finish', function() {
//          boxElement.style.transform = 'translate(0px, 600px)';})





document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
let modalButtons = document.querySelectorAll('.open-modal-link');
let overlay      = document.querySelector('.overlay-link');
let closeButtons = document.querySelectorAll('.modal-close-link');


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
         let modalElem = document.querySelector('.modal-link[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('activ');
         overlay.classList.add('activ');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         let parentModal = this.closest('.modal-link');

         parentModal.classList.remove('activ');
         overlay.classList.remove('activ');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal-link.activ').classList.remove('activ');
            document.querySelector('.overlay-link').classList.remove('activ');
        };
    }, false);

}); // end ready




 document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
 let modalButtons = document.querySelectorAll('.open-modal-delet');
 let overlay      = document.querySelector('.overlay-modal-delet');
 let closeButtons = document.querySelectorAll('.modal-close-delet');
 
 
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
          let modalElem = document.querySelector('.modal-delet[data-modal="' + modalId + '"]');
 
 
          /* После того как нашли нужное модальное окно, добавим классы
             подложке и окну чтобы показать их. */
          modalElem.classList.add('actived');
          overlay.classList.add('actived');
       }); // end click
 
    }); // end foreach
 
 
    closeButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
          let parentModal = this.closest('.modal-delet');
 
          parentModal.classList.remove('actived');
          overlay.classList.remove('actived');
       });
 
    }); // end foreach
 
 
     document.body.addEventListener('keyup', function (e) {
         let key = e.keyCode;
 
         if (key == 27) {
 
             document.querySelector('.modal-delet.actived').classList.remove('actived');
             document.querySelector('.overlay-link6').classList.remove('actived');
         };
     }, false);
 
 
     overlay.addEventListener('click', function() {
         document.querySelector('.modal-delet.actived').classList.remove('actived');
         this.classList.remove('actived');
     });
 
 
 
 
 }); // end ready





























