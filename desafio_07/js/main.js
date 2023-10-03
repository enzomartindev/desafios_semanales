/*Ejercicio 1*/
let titulo = document.querySelector("title");
console.log(titulo.innerHTML);

/*Ejercicio 3*/
const NOMBRESCOMPLETOS = [["", "", "", ""], ["", "", "", ""]]//matriz donde guardo  los nombres y apellidos
let integrantes = document.querySelectorAll("dd");//Datos
let cantIntegrantes = document.querySelectorAll("dl").length;//Cantidad de integrantes
let cantDatos = document.querySelectorAll("dd").length; //Cantidad de campos dd en total
let nombreCompleto = "";//String donde se van a ir concatenando los nombres y apellidos
let texto = "";//El texto que se va a imprimir por consola
let total = (cantIntegrantes + 1)//El total de iteraciones que va a recorrer el primer for, agregando 2 iteraciones(contemplando el 0) para imprimir los renglones
let inicio = 0;//Primer indice de la matriz de los datos
let limite = 3;//'Último indice de la matriz de los datos, al ser 2 nombres y 2 apellidos son 4 indices en total contemplando el 0.
let duplicados = [];
let id = "";

for (let i = 0; i <= total; i++) {
    //Si es la primer o última iteraciòn, el texto a imprimir son los renglones.
    if (i == 0 || i == total) {
        texto = "-----";
    }
    //Si no es la primera ni la última, armo el nombre y apellido del integrante llamando a la funcion concatenarNombre();
    else {

        nombreCompleto = concatenarNombre(i);

        //Armo el texto que se va a mostrar por consola, sacandole los espacios al principio y al final con la funcion trim()
        texto = "Integrante " + i + ": \"" + nombreCompleto.trim() + "\"";
    }

    //único llamado al console.log, con el texto armado.
    console.log(texto);
}

//busco nombres duplicados
validaNombreDuplicado();

//pregunto si se desea buscar apellidos duplicados
let rta = confirm("Desea validar si hay apellidos duplicados?")

//si la rta es true (aceptar), valido llamando a la funcion validaApellidoDuplicado();
if (rta) {
    validaApellidoDuplicado();
}


/*Ejercicio 4*/
function validaNombreDuplicado() {
    duplicados = [];

    //Itero 1 vez menos, para no comparar doble
    for (let j = 0; j < (cantIntegrantes - 1); j++) {

        if (NOMBRESCOMPLETOS[j][0] == NOMBRESCOMPLETOS[j + 1][0]) {

            id1 = "id1";
            id2 = "id5";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][0] == NOMBRESCOMPLETOS[j + 1][1]) {
            id1 = "id1";
            id2 = "id6";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][1] == NOMBRESCOMPLETOS[j + 1][0]) {
            id1 = "id2";
            id2 = "id5";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][1] == NOMBRESCOMPLETOS[j + 1][1]) {
            id1 = "id2";
            id2 = "id6";
            duplicados.push(id1, id2);
        }
    }

    if (duplicados.length > 0) {
        console.log("Hay coincidencias de nombres");
        let color = prompt("Hay coincidencias de nombres. Ingresa un color deseado para identificarlos");

        for (let i = 0; i < duplicados.length; i++) {
            let nombresDuplicados = document.getElementById(duplicados[i]);
            nombresDuplicados.style.color = color;
        }

    } else {
        console.log("No hay coincidencias de nombres");
    }

}
function validaApellidoDuplicado() {

    duplicados = [];
    //Itero 1 vez menos, para no comparar doble
    for (let j = 0; j < (cantIntegrantes - 1); j++) {

        if (NOMBRESCOMPLETOS[j][2] == NOMBRESCOMPLETOS[j + 1][2]) {

            id1 = "id3";
            id2 = "id7";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][2] == NOMBRESCOMPLETOS[j + 1][3]) {
            id1 = "id3";
            id2 = "id8";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][3] == NOMBRESCOMPLETOS[j + 1][2]) {
            id1 = "id4";
            id2 = "id7";
            duplicados.push(id1, id2);
        }
        if (NOMBRESCOMPLETOS[j][3] == NOMBRESCOMPLETOS[j + 1][3]) {
            id1 = "id4";
            id2 = "id8";
            duplicados.push(id1, id2);
        }
    }

    if (duplicados.length > 0) {
        console.log("Hay coincidencias de apellidos");
        let color = prompt("Hay coincidencias de apellidos. Ingresa un color deseado para identificarlos");

        for (let i = 0; i < duplicados.length; i++) {
            let nombresDuplicados = document.getElementById(duplicados[i]);
            nombresDuplicados.style.color = color;

        }

    } else {
        console.log("No hay coincidencias de apellidos");
    }

}
function concatenarNombre(l) {
    //Seteo el nombre completo en nulo al principio de la iteraciòn.
    nombreCompleto = "";
    l = (l - 1);

    for (k = 0; k <= limite; k++) {
        //Si algún campo NO es nulo, ya sea porque no tiene 2do nombre o 2do apellido, lo concateno.
        if (integrantes[inicio].innerText != "") {
            //Si el índice es el anteúltimo(1er Apellido) o último(2do Apellido) lo paso a mayúsculas.
            if (inicio == limite - 1 || inicio == limite) {

                NOMBRESCOMPLETOS[l][k] = integrantes[inicio].innerText.toUpperCase();
                nombreCompleto += NOMBRESCOMPLETOS[l][k] + " ";
            }
            //Caso contrario simplemente lo concateno
            else {
                NOMBRESCOMPLETOS[l][k] = integrantes[inicio].innerText;
                nombreCompleto += NOMBRESCOMPLETOS[l][k] + " ";
            }
        }
        if (inicio == limite && k < (cantDatos - 1)) {
            limite += 4;
            inicio++;
            break;
        }

        inicio++;

    }

    return nombreCompleto;
}
