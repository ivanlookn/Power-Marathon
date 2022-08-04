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
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
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

    // +79261234567
    // 89261234567
    // 79261234567
    // +7 926 123 45 67
    // 8(926)123-45-67
    // 123-45-67
    // 9261234567
    // 79261234567
    // (495)1234567
    // (495) 123 45 67
    // 89261234567
    // 8-926-123-45-67
    // 8 927 1234 234
    // 8 927 12 12 888
    // 8 927 12 555 12
    // 8 927 123 8 123


    function ValidPhone() {
    let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
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










