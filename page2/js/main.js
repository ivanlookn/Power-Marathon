document.getElementById("logo_one").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page1/index.html";
};


let img = document.getElementsByClassName("girl__item");

for (let i = 0; i < img.length; i++) {
    let button = img[i];
    button.addEventListener('click', goUrl);
};

function goUrl() {
    document.location.href = "../page3/index.html";
};