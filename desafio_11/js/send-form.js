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