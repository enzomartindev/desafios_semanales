let idestilo = 0;   //por defecto css/estilos.css
let botonApretado = false;//valor del boton recordar. Por defecto false (no presionado)
let estilos = ["css/estilos.css", "css/estilos-retro.css", "css/estilos-futuro.css", ""]//estilos disponibles
let iconos = ["./images/musculo.png", "./images/biceps-retro-64.png", "./images/biceps-futu.png", "./images/musculo.png"] //iconos de cada estilo
let css = document.getElementById("id-estilo");
let icon = document.getElementById("id-h1icon");
let btnRecordar = document.getElementById("id-recordar");

function btnPressed() {

    //solo cambia el style del boton recordar
    //mismo estilo de boton presionado para cualquier .css
    btnRecordar.style.color = "grey";
    btnRecordar.style.boxShadow = "0 0 3px rgba(0, 0, 0, 0.3), inset 2px 2px   #212121";
    btnRecordar.style.border = "1px solid transparent";
    botonApretado = true;
}

function btnNotPressed(id) {

    /*colores del boton recordar de cada estilo */
    colorboton = ["#d6e2de", "#e8e1d7", "azure", "black"]
    colorborder = ["#4d6d63", "#4d6d63", "#b7094cff", "black"]

    /*Le devuelvo el estilo original al boton segun el estilo que le llega como parametro*/
    btnRecordar.style.color = colorboton[id];
    btnRecordar.style.boxShadow = "none"
    btnRecordar.style.border = "1px solid";
    btnRecordar.style.borderColor = colorborder[id];
    botonApretado = false;
 
    /*No es lo ideal pero no lo pude hacer funcionar con el addClASS*/

}

function cambiarEstilo() {

    switch (idestilo) {
        //Si el estilo es 0 (clasico) lo paso al siguiente (estilo retro)
        case 0:
            estiloRetro();
            btnNotPressed(1);
            idestilo = 1;
            break;
        //Si el estilo es 1 (retro) lo paso al siguiente (estilo futu)
        case 1:
            estiloFuturo();
            btnNotPressed(2);
            idestilo = 2;
            break;
        //Si el estilo actual es 2 (futu) o 3 (vacio) lo paso al  estilo clasico
        default:
            estiloClasico();
            btnNotPressed(0);
            idestilo = 0;
            break;
    }
}

function btnRestablecer() {

    //borra todos los datos ingresados
    let datos = document.querySelectorAll("textarea , input , select");

    for (let i = 0; i < datos.length; i++) {

        if (datos[i].type == "radio") {

            if (datos[i].id == "id-masculino") {

                datos[i].checked = true;
            }

        }
        if (datos[i].type == "checkbox") {

            if (datos[i].id == "id-recibir-novedades") {

                datos[i].checked = true;
            }
            else {

                datos[i].checked = false;
            }
        }
        else {
            datos[i].value = "";
        }

    }

}

function cambiarEstiloRandom() {

    //busco un numero aleatorio entre 0 y 4 (excluyendo el 4)
    let idestiloRandom = getRandomInt(0, 4);
    //si el numero aleatorio es igual al indice del estilo actual, busco de nuevo para que aplique un estilo diferente si o si
    while (estilos.indexOf(css.getAttribute("href")) == idestiloRandom) {
        idestiloRandom = getRandomInt(0, 3);
    }

    //seteo los atributos con el indice generado aleatoriamente
    css.setAttribute("href", estilos[idestiloRandom]);
    icon.setAttribute("src", iconos[idestiloRandom]);

    //Dejo el boton recordar como no presionado
    btnNotPressed(idestiloRandom);
}
//funcion que devuelve un valor entero entre un minnimo y un maximo
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function recordar() {

    //si el boton no esta presionado, lo presiono y guardo los valores de los atributos en localstorage
    if (!botonApretado) {

        //Lo dejo con estilo "presionado"
        btnPressed();

        //guardo los valores en localStorage
        localStorage.setItem("style", css.getAttribute("href"));
        localStorage.setItem("icon", icon.getAttribute("src"));
        localStorage.setItem("idestilo", idestilo);
        localStorage.setItem("btnPressed", "true");

    }
    else {
        //Si el boton està presionado, lo dejo no presionado y borro los atributos guardados en localStorage
        let idestiloGuardado = localStorage.getItem("idestilo");
        //Dejo el boton recordar con estilo "no presionado"
        btnNotPressed(idestiloGuardado);
        //revierto y borro los valores en localStorage
        localStorage.setItem("btnPressed", "false");
        localStorage.removeItem("style");
        localStorage.removeItem("icon");

    }

}

function estiloAlCargar() {

    //carga el estilo guardado en localstorage    
    let btnApretado = localStorage.getItem("btnPressed");
    //si el boton esta presionado
    if (btnApretado == "true") {

        //busco los estilos guardados en localstorage
        let localStyle = localStorage.getItem("style");
        let localIcon = localStorage.getItem("icon");

        //busco los elementos a manipular
        let css = document.getElementById("id-estilo");
        let icon = document.getElementById("id-h1icon");

        //seteo los atributos guardados en localstorage a los elementos
        css.setAttribute("href", localStyle);
        icon.setAttribute("src", localIcon);

        //dejo el boton presionado indicando que se esta recordando el estilo
        btnPressed();


    }
}

function selectEstilo() {

    //obtengo el valor seleccionado
    let estilo = document.getElementById("id-select-estilos");
    valor = estilo.options[estilo.selectedIndex].value;
    //buscdo el estilo y le aplico el valor seleccionado
    let css = document.getElementById("id-estilo");
    css.setAttribute("href", valor);

    //le resto 1 para que coincidan los indices, ya que en el index 0 tengo el valor "seleccionar estilo"
    idestilo = estilo.selectedIndex - 1;

    btnNotPressed(idestilo);


}

function estiloClasico() {
    css.setAttribute("href", estilos[0]);
    icon.setAttribute("src", iconos[0]);
}

function estiloRetro() {
    css.setAttribute("href", estilos[1]);
    icon.setAttribute("src", iconos[1]);
}

function estiloFuturo() {
    css.setAttribute("href", estilos[2]);
    icon.setAttribute("src", iconos[2]);
}

function estiloVacio() {
    css.setAttribute("href", "");
    icon.setAttribute("src", iconos[0]);
}

estiloAlCargar();