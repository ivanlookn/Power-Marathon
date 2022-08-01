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

const inputi = document.querySelectorAll('input[type=number]');

Array.from(inputi).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) { input.value = max}
        else if (value < min) { input.value = min }
    })
});