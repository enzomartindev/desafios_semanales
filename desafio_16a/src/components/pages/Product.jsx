import FormProduct from "./../ProductForm";
import "./product.scss";

const product = () => {

    return (
        <div className="product">
            <div
                className="product_section">
                <h3>Producto</h3>
                <FormProduct/>
            </div>
        </div>
    );
};

export default product;
