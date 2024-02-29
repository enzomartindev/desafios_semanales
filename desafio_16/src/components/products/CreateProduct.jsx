import Button from "../button/Button";
import { NavLink } from "react-router-dom";

import "./createProduct.scss";

const CreateProduct = () => {
    return (
        <div className="productCard productCard--create">
            <img 
                className="productCard--create--img"
                src="./images/addphone.jpg" alt="Imagen de agregar producto" />
            <Button
                component={NavLink}
                to="/product">Crear Producto
            </Button>
        </div>
    );
};

export default CreateProduct;