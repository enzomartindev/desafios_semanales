import { useLocation } from "react-router-dom";

import "./product.scss";

import FormProduct from "../products/ProductForm";
import { useRef } from "react";

const Product = () => {

    const location = useLocation();
    const productRef = useRef(location?.state?.product);

    return (
        <div className="product">
            <div
                className="product_section">
                <h3>Producto</h3>
                <FormProduct initialValues={productRef.current} />
            </div>
        </div>
    );
};

export default Product;
