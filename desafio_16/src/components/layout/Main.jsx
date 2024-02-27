import PropTypes from "prop-types";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import ProductList from "../products/ProductList ";
import Product from "../pages/Product";

const Main = () => {

    return (
        <main
            className="main">
            <Routes>
                <Route
                    path="/"
                    element={<ProductList/>}/>
                <Route
                    path="/product"
                    element={<Product/>}/>
                <Route
                    path="/product/:id"
                    element={<Product/>}/>
            </Routes>
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
