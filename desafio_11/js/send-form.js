let resumenPedido = document.getElementById("resumen-pedido");
resumenPedido.innerHTML = localStorage.getItem("arrayProductos");

let productos = localStorage.getItem("arrayProductos");

console.dir(productos);