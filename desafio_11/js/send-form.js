const resumenPedido = document.getElementById("resumen-pedido");
const totalPrice = document.getElementById("total-price");
let productos = localStorage.getItem("arrayProductos");
productos = JSON.parse(productos);
let total = 0;

//por cada producto seleccionado, adjunto un p con la cantidad, el nombre y el precio
function loadRequest() {

    //por cada producto en el array productos
    productos.forEach((product) => {
        //sumo el valor total del pedido
        total += product[2];

        let p = document.createElement("p");
        //doy formato al texto con la cantidad , producto y valor
        p.innerText = `${product[0]} x ${product[1]} = $${product[2]}`;
        resumenPedido.appendChild(p);

    });

    //doy formato al precio total y lo muestro
    totalPrice.innerText += ` $${total}`;

}

loadRequest();



const inputUser = document.getElementById("username");
const inputStreet = document.getElementById("street");
const inputStNumber = document.getElementById("street-number");
const btnConfirm = document.getElementById("btn-confirm");

/*regex*/
const regexName = /\b[a-zA-Z]{2,50}\b/; //Que contenga un string de al menos 2 letras
const regexNumber = /^[0-9]+$/; //Sólo números

/*Functions*/
function validateUsername() {
    if (!regexName.test(inputUser.value)) {
        inputUser.nextElementSibling.innerText = "El usuario ingresado es inválido";
        inputUser.classList.add("input-invalid");
        return false;
    } else {
        inputUser.nextElementSibling.innerText = "";
        inputUser.classList.remove("input-invalid");
        inputUser.classList.add("input-valid");
        return true;
    }
}

function validateStreet() {
    if (!regexName.test(inputStreet.value)) {
        inputStreet.nextElementSibling.innerText = "La calle ingresada es inválida";
        inputStreet.classList.add("input-invalid");
        return false;
    } else {
        inputStreet.nextElementSibling.innerText = "";
        inputStreet.classList.remove("input-invalid");
        inputStreet.classList.add("input-valid");
        return true;
    }
}

function validateStNumber() {
    if (!regexNumber.test(inputStNumber.value)) {
        inputStNumber.nextElementSibling.innerText = "El valor ingresado es inválido";
        inputStNumber.classList.add("input-invalid");
        return false;

    } else {
        inputStNumber.nextElementSibling.innerText = "";
        inputStNumber.classList.remove("input-invalid");
        inputStNumber.classList.add("input-valid");
        return true;
    }
}

function validateRequest() {
    if (validateUsername()
        && validateStreet()
        && validateStNumber()) {
        //Muestra mensaje de éxito si todos los valores son  válidos
        //showSuccess();
        //buttonSave.disabled = true;

    } else {
        //Si hay algún valor invalido muestro alert
        //showAlert();
    }

}

function saveProduct() {
    validateUsername();
    validateStreet();
    validateStNumber();

}

btnConfirm.onclick = saveProduct;