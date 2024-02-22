import { useEffect, useState } from "react";
import { phones } from "./../data/data";
import "./productList.scss";
import CreateProduct from "./CreateProduct";

//2.Crear un componente ProductList que se encargue de mostrar la lista de productos.
const ProductList  = () => {

    //3.Utilizar el hook useState para crear un estado products que contendrá la lista de productos.
    const [products, setProducts] = useState([]);

    //4.Utilizar el hook useEffect para cargar los productos desde una API al cargar la página.
    useEffect(() => {
        //No uso una api, uso los datos de "phones" importados de data.js
        setProducts(phones);
    }, [products]);

    return (
        <div className="productCard__Container">
            <CreateProduct/>
            {products.map((product) => (
                <div className="productCard"
                    key={product.id}>
                    <div className="card__img">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="card__details">
                        <h4 className="card__details--title">{product.name}</h4>
                        <p className="card__details--description">{product.description}</p>
                        <p className="card__details--price">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList ;
