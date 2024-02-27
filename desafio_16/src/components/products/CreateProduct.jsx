import Button from "../button/Button";
import { NavLink } from "react-router-dom";

const CreateProduct = () => {
    return (
        <div className="productCard">
            <Button
                component={NavLink}
                to="/product">Crear Producto
            </Button>
        </div>
    );
};

export default CreateProduct;