document.getElementById("logo_nine").addEventListener('click', gobackUrl, false);

function gobackUrl() {
    document.location.href = "../page9/index.html";
};


let img = document.getElementsByClassName("img__item");

for (let i = 0; i < img.length; i++) {
    let button = img[i];
    button.addEventListener('click', goUrl);
};
function goUrl() {
    document.location.href = "../page11/index.html";
};