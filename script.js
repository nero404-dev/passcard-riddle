const domDiv = document.getElementById("domDiv");
const changeTextBtn = document.getElementById("changeTextBtn");

let toggled = false;

changeTextBtn.addEventListener("click", () => {
  if (!toggled) {
    domDiv.textContent = "1. https://www.dcode.fr/caesar-cipher";
    domDiv.style.color = "white";
    domDiv.style.backgroundColor = "black";
    domDiv.style.padding = "10px 0";
    toggled = true;
  } else {
    domDiv.textContent = "2. https://www.textreverse.com/";
    domDiv.style.color = "red";
    toggled = false;
  }
});

// -------------------------------------------------------------

// TRUE CHARACTERS ARRAYS
const truePasscard = [
    '%','d','r','@','c','$','$','@','P','3','h','t','d','n','!',
    'F','1','1','!','w','u','0','Y','&','$','r','3','b','m','u','n',
    '1','@','t','0','T','3','h','t','y','1','p','!','t','1','u','M',
    '&','3','M','3','$','r','3','v','3','r','#'
  ];
const truePin = ['2', '1', '8', '7'];

const passcardInput = document.getElementById('passcard');
const pinInput = document.getElementById('pin');
const submitBtn = document.getElementById('submitBtn');

let passcardValid = false;
let pinValid = false;

function compareInput(inputValue, trueArray) {
    const inputArray = inputValue.split('');

    if (inputArray.length !== trueArray.length) return false;

    for (let i = 0; i < trueArray.length; i++) {
        if (inputArray[i] !== trueArray[i]) {
            return false;
        }
    }
    return true;
}

function updateSubmit() {
    if (passcardValid && pinValid) {
        submitBtn.disabled = false;
        submitBtn.style.cursor = "pointer";
        submitBtn.style.backgroundColor = "#dfdfdf";
        submitBtn.style.color = "black";
        submitBtn.style.border = "1px solid green";
    } else {
        submitBtn.disabled = true;
        submitBtn.style.cursor = "";
        submitBtn.style.color = "";
    }
}

passcardInput.addEventListener('input', function () {
    if (compareInput(this.value, truePasscard)) {
        passcardValid = true;
        this.style.border = "1px solid green";
    } else {
        passcardValid = false;
        this.style.border = "";
    }
    updateSubmit();
});

pinInput.addEventListener('input', function () {
    if (compareInput(this.value, truePin)) {
        pinValid = true;
        this.style.border = "1px solid green";
    } else {
        pinValid = false;
        this.style.border = "";
    }
    updateSubmit();
});