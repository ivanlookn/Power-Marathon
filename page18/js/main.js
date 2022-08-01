document.getElementById("logo__one").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page1/index.html";
};

function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let validEm = re.test(myMail);
    if(!validEm) {
        document.getElementById('page18__button').disabled = true;
        let error = 'Ваш email или телефон введены не правельно';
        document.getElementById('masseg').textContent = error;
        setTimeout(
            function gobackUrl() {
                document.location.href = "../page18/index.html";
            }, 2000
        )
    }
    return validEm;
}

function ValidPhone() {
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let validPh = re.test(myPhone);
    if(!validPh) {
        document.getElementById('page18__button').disabled = true;
        let error = 'Ваш email или телефон введены не правельно';
        document.getElementById('masseg').textContent = error;
        setTimeout(
            function gobackUrl() {
                document.location.href = "../page18/index.html";
            }, 2000
        )
    }
    return validPh;
}

function BColor() {
    if(document.getElementById("myText").value !== "") {
       document.getElementById("myButton").style.background = "red";
    } else {
       document.getElementById("myButton").style.background = "blue";
    }
  }