document.getElementById("logo_th").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page13/index.html";
};

document.getElementById("page14__button").addEventListener('click', goUrl, false);
function goUrl() {
    document.location.href = "../page15/index.html";
}


function check(){
    let chek = document.getElementsByClassName("chek");
    let len = chek.length-1;
    let bool = true;

    for(; len>=0; len--){
        if (chek[len]['type']=='checkbox' && chek[len]['checked']==true){
            bool=!bool; break;
        }
    };
    document.getElementById("page14__button").disabled = bool;
};