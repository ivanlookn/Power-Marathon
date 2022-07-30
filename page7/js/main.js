document.getElementById("logo_six").addEventListener('click', gobackUrl, false);
    function gobackUrl() {
        document.location.href = "../page6/index.html";
    };

document.getElementById("page7_button").addEventListener('click', goUrl, false);
    function goUrl() {
        document.location.href = "../page8/index.html";
    }

function check(){
    let chek = document.querySelectorAll(".chek");
    let len = chek.length-1;
    let bool = true;
    let elem1 = document.querySelectorAll("img");

    for(; len>=0; len--){
        if (chek[len]['type']=='checkbox' && chek[len]['checked']==true){
            bool=!bool; 
            break;
        }
    };
    document.getElementById("page7_button").disabled = bool;
};