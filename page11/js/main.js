document.getElementById("logo_ten").addEventListener('click', gobackUrl, false);

function gobackUrl() {
    document.location.href = "../page10/index.html";
};


let img = document.getElementsByClassName("page11img__list");

for (let i = 0; i < img.length; i++) {
    let button = img[i];
    button.addEventListener('click', goUrl);
};
function goUrl() {
    document.location.href = "../page12/index.html";
};