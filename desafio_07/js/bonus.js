//declaro los arrays donde voy a guardar los datos de los integrantes
let primerIntegrante = [];
let segundoIntegrante = [];

function completarA() {
    //boton completar del primer integrante

    //Lo limpio en caso de volver a cargar datos o de apretar el boton mas de 1 vez no se sigan adicionando al array
    primerIntegrante = [];
    //guardo cada nombre y cada apellido en variables, llamando a los elementos por id y guardando el valor de cada uno
    let primerNombre = document.getElementById("id-nombre1").value;
    let segundoNombre = document.getElementById("id-nombre2").value;
    let primerApellido = document.getElementById("id-apellido1").value;
    let segundoApellido = document.getElementById("id-apellido2").value;

    //guardo los datos en orden en el array
    primerIntegrante.push(primerNombre);
    primerIntegrante.push(segundoNombre);
    primerIntegrante.push(primerApellido);
    primerIntegrante.push(segundoApellido);

    console.log(primerIntegrante);
    
    //Deshabilito el botòn
    let btnA = document.getElementById("completar-A");
    btnA.disabled= true;
}
function completarB() {

    //idem completar a
    segundoIntegrante = [];

    let primerNombre = document.getElementById("id-nombre1b").value;
    let segundoNombre = document.getElementById("id-nombre2b").value;
    let primerApellido = document.getElementById("id-apellido1b").value;
    let segundoApellido = document.getElementById("id-apellido2b").value;

    segundoIntegrante.push(primerNombre);
    segundoIntegrante.push(segundoNombre);
    segundoIntegrante.push(primerApellido);
    segundoIntegrante.push(segundoApellido);

    console.log(segundoIntegrante);

    //Deshabilito el botòn
    let btnB = document.getElementById("completar-B");
    btnB.disabled = true;

}
function Submit() {
    //este boton lo primero que hace es validar si hay nombres duplicados, llamando a la funcion validaNombreDuplicado();
    validaNombreDuplicado();

    //si se desea validar apellidos duplicados, llamo a la funcion validaApellidoDuplicado(), caso contrario no hago nada
    let rta = confirm("Desea comparar los apellidos?");
    if (rta) {
        validaApellidoDuplicado()
    }
}
function validaNombreDuplicado() {

    //dejo mi variable en null cada vez que llamo la funcion para no generar conflictos
    duplicados = [];


    //comparo cada dato usando los indices de los vectores primerIntegrante y segundoIntegrante
    //Tambien valido que el dato no este vacio, para que no tome como coincidencia cuando no se ingresa algun nombre o apellido en ambos integrantes
    if (primerIntegrante[0] == segundoIntegrante[0] && primerIntegrante[0] != "" && segundoIntegrante[0] != "") {

        //Si hay coincidencia, guardo los id de los input que coinciden
        id1 = "id-nombre1";
        id2 = "id-nombre1b";
        //guardo los ids que coinciden en el vector duplicados
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[0] == segundoIntegrante[1] && primerIntegrante[0] != "" && segundoIntegrante[1] != "") {
        id1 = "id-nombre1";
        id2 = "id-nombre2b";
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[1] == segundoIntegrante[0] && primerIntegrante[1] != "" && segundoIntegrante[0] != "") {
        id1 = "id-nombre2";
        id2 = "id-nombre1b";
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[1] == segundoIntegrante[1] && primerIntegrante[1] != "" && segundoIntegrante[1] != "") {
        id1 = "id-nombre2";
        id2 = "id-nombre2b";
        duplicados.push(id1, id2);
    }

    //si la longitud del vector duplicados es mayor a 0, quiere decir que efectivamente hay nombres repetidos.
    //entonces muestro por consola el mensaje que hay coincidencias
    if (duplicados.length > 0) {
        console.log("Hay coincidencias de nombres");
        //pido el color para resaltar los duplicados
        let color = prompt("Hay coincidencias de nombres. Ingresa un color deseado para identificarlos");

        //recorro el vector duplicados, obteniendo en cada iteracion el id que tenga repetición del dato, y le cambio el color a cada uno
        for (let i = 0; i < duplicados.length; i++) {
            let nombresDuplicados = document.getElementById(duplicados[i]);
            nombresDuplicados.style.color = color;
        }

    } else {
        console.log("No hay coincidencias de nombres");
    }

}
function validaApellidoDuplicado() {
    //idem validaNombreDuplicado, pero con los indices y ids de los apellidos 

    duplicados = [];
    if (primerIntegrante[2] == segundoIntegrante[2] && primerIntegrante[2] != "" && segundoIntegrante[2] != "") {

        id1 = "id-apellido1";
        id2 = "id-apellido1b";
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[2] == segundoIntegrante[3] && primerIntegrante[2] != "" && segundoIntegrante[3] != "") {
        id1 = "id-apellido1";
        id2 = "id-apellido2b";
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[3] == segundoIntegrante[2] && primerIntegrante[3] != "" && segundoIntegrante[2] != "") {
        id1 = "id-apellido2";
        id2 = "id-apellido1b";
        duplicados.push(id1, id2);
    }
    if (primerIntegrante[3] == segundoIntegrante[3] && primerIntegrante[3] != "" && segundoIntegrante[3] != "") {
        id1 = "id-apellido2";
        id2 = "id-apellido2b";
        duplicados.push(id1, id2);
    }

    if (duplicados.length > 0) {
        console.log("Hay coincidencias de Apellidos");
        let color2 = prompt("Hay coincidencias de apellidos. Ingresa un color deseado para identificarlos");

        for (let i = 0; i < duplicados.length; i++) {
            let nombresDuplicados = document.getElementById(duplicados[i]);
            nombresDuplicados.style.color = color2;
        }

    } else {
        console.log("No hay coincidencias de Apellidos");
    }

}
function limpiar() {

    //limpia los campos y los devuelve al color original
    campos = ["id-nombre1", "id-nombre2", "id-apellido1", "id-apellido2", "id-nombre1b", "id-nombre2b", "id-apellido1b", "id-apellido2b"]
    for (let i = 0; i < campos.length; i++) {

        let dato = document.getElementById(campos[i]);
        dato.style.color = "black";
        dato.value = "";
    }

    //limpia los vectores
    primerIntegrante = [];
    segundoIntegrante = [];
    console.log("Se limpiaron los datos");

    //vuelvo a habilitar los botones de completar a y b
    let btnA = document.getElementById("completar-A");
    let btnB = document.getElementById("completar-B");
    
    
    btnA.disabled = false;
    btnB.disabled = false;

}