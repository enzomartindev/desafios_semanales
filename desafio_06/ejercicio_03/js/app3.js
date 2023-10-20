//* EJERCICIO 3: *//
let cantidadDeGatos = Number(prompt("Ingresa la cantidad de gatos para el ejercicio 3"));
let cantidadDePasos = Number(prompt("Ingresa la cantidad de pasos para el ejercicio 3"));
let patas = "🐾";
let gatoAmarillo = "🐈"
let gatoAzul = "🐈‍⬛"
let pasosTotales = "";

while (cantidadDePasos > 0) {
    pasosTotales = pasosTotales + patas;
    cantidadDePasos--;
}

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 === 0) {
        document.write("<p>Gato #" + i + ": " + gatoAzul + " " + pasosTotales + "</p>");
        console.log("Gato #" + i + ": " + gatoAzul + " " + pasosTotales);
    }
    else {
        document.write("<p>Gato #" + i + ": " + gatoAmarillo + " " + pasosTotales + "</p>");
        console.log("Gato #" + i + ": " + gatoAmarillo + " " + pasosTotales);
    }

}

