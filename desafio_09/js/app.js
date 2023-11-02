let span = document.querySelector("span");
let nombreValido = false;
let btnPresentar = document.getElementById("btnPresentar");
let pjActual = "";

//relaciono los nombres con los nombres completos en un vector bidimensional
let nombresCompletos =
    [
        ["mario", "Mario"],
        ["luigi", "Luigi"],
        ["bowser", "Bowser Morton Koopa"],
        ["peach", "Princesa Peach Toadstool"],
        ["yoshi", "T.Yoshisaur Munchakoopas"],
        ["toad", "Toad"],
        ["toadette", "Toadette"],
        ["daisy", "Princesa Daisy"]
    ];

//función que busca si el valor ingresado coincide con el nombre de algun personaje
function buscaNombreCompleto(pj) {

    for (let i = 0; i < nombresCompletos.length; i++) {

        if (nombresCompletos[i][0] == pj.toLowerCase()) {

            //si hay coincidencia, muestro el nombre completo que esta en el indice [i][1]
            span.innerText = nombresCompletos[i][1];
            nombreValido = true;
            break;

        } else {
            // Si no se ingresó un personaje válido, el texto resultante dirá "Hoy se presenta (desconocido)".
            span.innerText = "(desconocido)";
            nombreValido = false;

        }

    }

    //si se ingreso un nombre valido
    if (nombreValido) {

        //busco el elemento html con el id del nombre ingresado y  lo guardo en la variable id
        let id = document.getElementById(pj.toLowerCase());

        //si el personaje que se muestra actualmente no es "" (primera vez que se ejecuta) le borro el atributo title para que se esconda
        if (pjActual != "") {

            let id = document.getElementById(pjActual);
            id.removeAttribute("title");

        }

        //agrego el atributo title para que se presente el personaje ingresado
        id.setAttribute("title", "Presentado");
        pjActual = pj.toLowerCase();

    }

}

function btnApretado() {

    let personaje = prompt("¿Quién se presenta hoy ? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

    console.log(personaje);

    if (personaje != null) {
        buscaNombreCompleto(personaje);

        //btnPresentar.classList.remove("boton");
        //btnPresentar.classList.add("btnPresionado");
        //btnPresentar.hidden = true;

    }

}

function mostrarPj() {

    //obtengo los children del contenedor cajas
    let cajas = document.getElementById("cajas");
    let figura = cajas.children;

    //a cada children (cada div de personaje) le agrego un eventlistener para que al hacer click, ejecute la  funcion buscaNombreCompleto

    for (let i = 0; i < cajas.children.length; i++) {

        if (cajas.children[i].id == nombresCompletos[i][0]) {

            figura[i].addEventListener("click", function () {
                buscaNombreCompleto(cajas.children[i].id);
            });

        }

    }

}

mostrarPj();




