document.getElementById("logo_fv").addEventListener('click', gobackUrl, false);
function gobackUrl() {
    document.location.href = "../page15/index.html";
};

let inputs = document.querySelectorAll("input");
let buttonSend = document.getElementById("page16__button");

let inputValidator = {
  "age": false,
  "growth": false,
  "heft": false,
  "Targetheft": false
};

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let name = event.target.getAttribute('name');
    if (event.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    };

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true
    });

    if (allTrue) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }
  })
})