const display = document.getElementById("display");
const btnSumar = document.getElementById("add");
const btnRestar = document.getElementById("subtract");
const btnMultiplicar = document.getElementById("multiply");
const btnDividir = document.getElementById("divide");
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("decimal");
const btnClear = document.getElementById("clear");
const btnNumbers = document.querySelectorAll(".btn__number");
let numberSaved = 0;
let numberEntered = "";
let operation = "";
let result = 0;

btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click', resta);
btnMultiplicar.addEventListener('click', multiplicacion);
btnDividir.addEventListener('click', division);
btnDot.addEventListener('click', dot);
btnClear.addEventListener('click', clear);
btnEqual.addEventListener('click', equal);

document.addEventListener("keydown", function (e) {



    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":

            if (parseInt(display.innerText) == 0) {

                display.innerText = "";
            }
            display.innerText += e.key;
            numberEntered += e.key;

            break;
        case "+":
            suma();
            break;
        case "-":
            resta();
            break;
        case "*":
            multiplicacion();
            break;
        case "/":
            division();
            break;
        case ".":
            dot();
            break;
        case "Enter":
            e.preventDefault();
            equal();
            break;

    }

});

const regexNumber = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;

for (let i = 0; i < btnNumbers.length; i++) {

    btnNumbers[i].addEventListener('click', () => {

        if (parseInt(display.innerText) == 0) {

            display.innerText = "";
        }
        display.innerText += btnNumbers[i].innerText;
        numberEntered += btnNumbers[i].innerText;
    });

}

function suma() {

    display.innerText += "+";
    operation = "+";
    numberSaved = numberEntered;
    numberEntered = "";
    disableButtons()

}

function resta() {
    display.innerText += "-";
    operation = "-";
    numberSaved = numberEntered;
    numberEntered = "";
    disableButtons()
}

function multiplicacion() {

    display.innerText += "*";
    operation = "*";
    numberSaved = numberEntered;
    numberEntered = "";
    disableButtons()

}

function division() {

    display.innerText += "/";
    operation = "/";
    numberSaved = numberEntered;
    numberEntered = "";
    disableButtons()

}

function dot() {
    display.innerText += ".";
    numberEntered += ".";
}

function clear() {

    display.innerText = "0";
    numberSaved = 0;
    numberEntered = "";
    operation = "";
    result = 0;
    enableButtons();

}

function equal() {

    numberSaved = BigInt(numberSaved);
    numberEntered = BigInt(numberEntered);

    if (validate()) {

        switch (operation) {
            case "+":
                result = parseFloat(numberSaved) + parseFloat(numberEntered);

                break;
            case "-":
                result = parseFloat(numberSaved) - parseFloat(numberEntered);

                break;
            case "*":
                result = parseFloat(numberSaved) * parseFloat(numberEntered);

                break;
            case "/":
                if (numberEntered == "0") {
                    result = "No se puede dividir por 0";
                } else {
                    result = parseFloat(numberSaved) / parseFloat(numberEntered);
                }
                break;

        }
        display.innerText = result;
        console.log(result);

    }

}

function disableButtons() {

    btnSumar.disabled = true;
    btnRestar.disabled = true;
    btnMultiplicar.disabled = true;
    btnDividir.disabled = true;

}

function enableButtons() {

    btnSumar.disabled = false;
    btnRestar.disabled = false;
    btnMultiplicar.disabled = false;
    btnDividir.disabled = false;

}


function validate() {
    /*if (!regexNumber.test(numberSaved) && !regexNumber.test(numberEntered)) {
        display.innerText = "Ingresa un número válido";
    }

    else {*/
    return true;
    //}
}

