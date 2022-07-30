document.getElementById("logo__one").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page1/index.html";
};

function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    return valid;
}
 
function ValidPhone() {
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    return valid;
}  