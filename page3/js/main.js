document.getElementById("logo_two").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page2/index.html";
};

let img = document.getElementsByClassName("img__list");

for (let i = 0; i < img.length; i++) {
    let button = img[i];
    button.addEventListener('click', goUrl);
};
function goUrl() {
    document.location.href = "../page4/index.html";
};