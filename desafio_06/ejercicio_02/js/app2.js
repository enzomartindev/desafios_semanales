//* EJERCICIO 2: *//
let cantidadDeGatos = Number(prompt("Ingresa la cantidad de gatos para el ejercicio 2"));
let cantidadDePasos = Number(prompt("Ingresa la cantidad de pasos para el ejercicio 2"));
let patas = "🐾";
let pasosTotales="";

while (cantidadDePasos > 0) {
    pasosTotales = pasosTotales + patas;
    cantidadDePasos--;
}

for (let i = 1; i <= cantidadDeGatos; i++) {

    document.write("<p>Gato #" + i + ": 🐈 " + pasosTotales + "</p>");
    console.log("Gato #" + i + ": 🐈 " + pasosTotales);

}

