import { useEffect, useState } from "react";
import "./productList.scss";
import CreateProduct from "./CreateProduct";
import AddProduct from "./AddProduct";
import useProducts from "./../../hooks/useProducts";
import { NavLink } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

//2.Crear un componente ProductList que se encargue de mostrar la lista de productos.
const ProductList = () => {

    //3.Utilizar el hook useState para crear un estado products que contendrá la lista de productos.
    const [ productos, setProducts ] = useState([]);

    const { products,  removeProduct} = useProducts();

    //4.Utilizar el hook useEffect para cargar los productos desde una API al cargar la página.
    useEffect(() => {
        //uso los datos de "phones" importados de data.js
        if (products?.length > 0) {
            setProducts(products);}
    }, [products]);


    return (
        <section className="products">
            <div className="productCard__Container">
                <CreateProduct/>
                {productos.map((product) => (
                    <div
                        className="productCard"
                        key={product.id}>
                        <div className="productCard__actions">
                            <IconButton
                                component={NavLink}
                                to={`/product/${product.id}`}
                                state={{ product }}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton onClick={() => removeProduct(product.id)}><DeleteIcon/></IconButton>
                        </div>
                        <div className="card__img">
                            <img
                                src={product.img}
                                alt={product.name}/>
                        </div>
                        <div className="card__details">
                            <h4 className="card__details--title">{product.name}</h4>
                            <p className="card__details--description">{product.description}</p>
                            <p className="card__details--price">{product.price}</p>
                        </div>
                        <AddProduct/>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList ;