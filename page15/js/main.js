document.getElementById("logo_fr").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page14/index.html";
};

document.getElementById("page15__button").addEventListener('click', goUrl, false);
function goUrl() {
    document.location.href = "../page16/index.html";
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
    document.getElementById("page15__button").disabled = bool;
};