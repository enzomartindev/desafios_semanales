const numeroUno = document.getElementById("id-number1");
const numeroDos = document.getElementById("id-number2");
const btnSumar = document.getElementById("id-sumar");
const btnRestar = document.getElementById("id-restar");
const btnMultiplicar = document.getElementById("id-multiplicar");
const btnDividir = document.getElementById("id-dividir");
const resultado = document.getElementById("id-resultado");

btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click', resta);
btnMultiplicar.addEventListener('click', multiplicacion);
btnDividir.addEventListener('click', division);

const regexNumber = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;


function suma() {
    if (validate()) {
    resultado.innerText = parseFloat(numeroUno.value) + parseFloat(numeroDos.value);
    }

}

function resta() {
    if (validate()) {
        resultado.innerText = parseFloat(numeroUno.value) - parseFloat(numeroDos.value);
    }
}

function multiplicacion() {
    if (validate()) {
        resultado.innerText = parseFloat(numeroUno.value) * parseFloat(numeroDos.value);
    }
}

function division() {
    if (validate()) {
        resultado.innerText = parseFloat(numeroUno.value) / parseFloat(numeroDos.value);
    }
    if (parseFloat(numeroDos.value) === 0) {
        resultado.innerText = "No se puede dividir por 0";
    }
}

function validate() {
    if (!regexNumber.test(numeroUno.value) && !regexNumber.test(numeroDos.value)) {
        resultado.innerText = "Ingresa un numero";
    } else {
        return true;
    }
}

