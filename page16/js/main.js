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

const inputi = document.querySelectorAll('.num__age[type=number]')

function replaceAge() {
  const re = /(?<=\d{2})(\d+)/g
  if (re.test(this.value)) {
    this.value = this.value.replace(re, '')
  }
}

Array.from(inputi).forEach((i) => i.addEventListener('input', replaceAge));

const inputis = document.querySelectorAll('.num__form[type=number]')

function replaceFor() {
  const re = /(?<=\d{3})(\d+)/g
  if (re.test(this.value)) {
    this.value = this.value.replace(re, '')
  }
}

Array.from(inputis).forEach((i) => i.addEventListener('input', replaceFor));


// let text = document.getElementsByClassName("target__weight")[0];
// export const val = text.value;
// console.log(val)
