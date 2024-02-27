import "./addProduct.scss";

const AddProduct = () => {
    return (
        <div className="cardProductActions">
            <button className="btn buttonRemoveFromCart">-</button>
            <span className="item__quantity">0</span>
            <button className="btn buttonAddtoCart">+</button>
        </div>
    );
};

export default AddProduct;