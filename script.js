const resultDisplay = document.getElementById('result-display');
const range = document.getElementById('range');
const rangeDisplay = document.getElementById('range-display');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');
const submited = document.getElementById('submited');


range.addEventListener('input', (e) => {
    rangeDisplay.textContent = range.value;
});

lowercaseString = "abcdefghijklmnopqrstuvwxyz";
uppercaseString = lowercaseString.toUpperCase();
numberString = "0123456789"
symbolsString = ",;:!?./§ù*^$%µ¨£&é(-è_çà)"

let isSomethingChecked = false;
let result = "";
const pwGenerator = function () {
    isSomethingChecked = false;
    result = "";
    let passwordSettings = "";

    if (lowercase.checked) {
        passwordSettings += lowercaseString;
        isSomethingChecked = true;
    } if (uppercase.checked) {
        passwordSettings += uppercaseString;
        isSomethingChecked = true;
    } if (symbols.checked) {
        passwordSettings += symbolsString;
        isSomethingChecked = true;
    } if (number.checked) {
        passwordSettings += numberString;
        isSomethingChecked = true;
    }
    if (isSomethingChecked == false) {
        return
    }

    console.log(passwordSettings);

    whatDoYouFuckingWantYouIdiotVSCodePasswordSettingsArray = [...passwordSettings];
    console.log(whatDoYouFuckingWantYouIdiotVSCodePasswordSettingsArray)

    for (let i = 0; i < range.value; i++) {
        result += whatDoYouFuckingWantYouIdiotVSCodePasswordSettingsArray[Math.floor((Math.random() * whatDoYouFuckingWantYouIdiotVSCodePasswordSettingsArray.length))]
    }
}


submited.addEventListener('click', (e) => {

    pwGenerator();
    console.log(result)

    if (isSomethingChecked == true) {
        resultDisplay.textContent = result;
        submited.textContent = "Copié!"

        navigator.clipboard.writeText(resultDisplay.textContent)
        setTimeout(() => {
            submited.textContent = "Générer un nouveau mot de passe!"
        }, 2000)
    } else {
        alert("You forget something... hint: check one of thoses box maybe")
    }
});
















