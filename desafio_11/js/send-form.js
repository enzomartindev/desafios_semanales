const resumenPedido = document.getElementById("resumen-pedido");
const totalPrice = document.getElementById("total-price");
let productos = localStorage.getItem("arrayProductos");
productos = JSON.parse(productos);
let total = 0;
let requestNumber = 0;

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

/*Alerts*/
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");

function showAlert() {
    alert.setAttribute("class", "alert alert--show alert--danger");
    alertText.innerText = "No se envió el pedido"
}

function showSuccess() {
    alert.setAttribute("class", "alert alert--show alert--success");
    alertText.innerText = "Pedido enviado exitosamente!"
}

function closeAlert() {
    alert.setAttribute("class", "alert");
}

alertClose.onclick = closeAlert;


const inputUser = document.getElementById("username");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputStreet = document.getElementById("street");
const inputStNumber = document.getElementById("street-number");
const btnConfirm = document.getElementById("btn-confirm");
const modal = document.getElementById("id-modal");
const modalClose = document.getElementById("close-modal");
const modalSpan = document.getElementById("id-modal-span");

/*regex*/
const regexName = /\b[a-zA-Z0-9]{2,50}\b/; //Que contenga un string de al menos 2 letras
const regexNumber = /^[0-9]+$/; //Sólo números
const regexEmail = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;//valida formato de mail


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

function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El E-mail ingresado es inválido";
        inputEmail.classList.add("input-invalid");
        return false;

    } else {
        inputEmail.nextElementSibling.innerText = "";
        inputEmail.classList.remove("input-invalid");
        inputEmail.classList.add("input-valid");
        return true;
    }
}

function validatePhone() {
    if (!regexNumber.test(inputPhone.value)) {
        inputPhone.nextElementSibling.innerText = "El número ingresado es inválido";
        inputPhone.classList.add("input-invalid");
        return false;

    } else {
        inputPhone.nextElementSibling.innerText = "";
        inputPhone.classList.remove("input-invalid");
        inputPhone.classList.add("input-valid");
        return true;
    }
}




function validateRequest() {
    if (validateUsername()
        && validateStreet()
        && validateStNumber()
        && validateEmail()
        && validatePhone()
    ) {
        //Muestra mensaje de éxito si todos los valores son  válidos
        showSuccess();
        showModal();
        btnConfirm.disabled = true;

    } else {
        //Si hay algún valor invalido muestro alert
        showAlert();
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function showModal() {

    requestNumber = getRandomInt(0, 9999);

    modal.style.visibility = "visible";
    let p = document.createElement("p");
    let h3 = document.createElement("h3");
    modalSpan.innerHTML = `${resumenPedido.innerHTML}`;
    p.innerText = `Total: $${total}`;
    modalSpan.appendChild(p);
    h3.innerText = `Número de pedido: ${requestNumber}`;
    modalSpan.appendChild(h3);

}

function closeModal() {
    modal.style.visibility = "hidden";
}

function send() {
    validateUsername();
    validateStreet();
    validateStNumber();
    validateEmail();
    validatePhone();
    validateRequest();
}

btnConfirm.onclick = send;
modalClose.onclick = closeModal;

