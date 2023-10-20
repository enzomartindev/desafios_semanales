
let idestilo = 1;

function cambiarEstilo() {

    let estilos = ["css/estilos.css", "css/estilos-futuro.css", "css/estilos-retro.css"]

    css = document.getElementById("id-estilo");
    css.setAttribute("href", estilos[idestilo]);

    if (idestilo == 2) {
        idestilo = 0;
    } else {
        idestilo++;
    }

}