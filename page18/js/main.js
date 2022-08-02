document.getElementById("logo__one").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page1/index.html";
};

  let phone = document.querySelector('.js-input-phone');
  let names = document.querySelector('.js-input');
  let email = document.querySelector('.js-input-email');
  
  
  phone.addEventListener('input', changeBackground);
  names.addEventListener('input', changeBackground);
  email.addEventListener('input', changeBackground);
  
  function changeBackground() {
    if (names.value !== '' && phone.value !== '' && email.value !== '') {
        document.getElementById('page18__button').style.background = '#FF9A89';
    } else {
        document.getElementById('page18__button').style.background = '#FF9A89';
    }
  }


  function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (valid){
        output = 'Адрес эл. почты введен правильно!';
        document.getElementById('page18__button').disabled = false;
    }
    else{
        output = 'Адрес электронной почты введен неправильно!';
        document.getElementById('page18__button').style.background = '#ccc';
        document.getElementById('page18__button').disabled = true;
    }
    document.getElementById('message').innerHTML = output;
    return valid;
    }

    function ValidPhone() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    if (valid){
        // output = 'Номер телефона введен правильно!';
        document.getElementById('page18__button').disabled = false;
    }
    else{
        output = 'Номер телефона введен неправильно!';
        document.getElementById('page18__button').style.background = '#ccc';
        document.getElementById('page18__button').disabled = true;
    };
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
    }










