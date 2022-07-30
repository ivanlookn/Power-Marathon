document.getElementById("logo_sx").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page16/index.html";
};


let img = document.getElementsByClassName("img__item");

for (let i = 0; i < img.length; i++) {
    let button = img[i];
    button.addEventListener('click', goUrl);
};
function goUrl() {
    document.location.href = "../progresBarTwo/index.html";
};