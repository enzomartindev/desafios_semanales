import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

//import { useState } from "react";

import "./app.scss";
import ProductList from "./components/products/ProductList ";

const App = () => {


    return (
        <>
            <Header title="Desafío semanal 16" subtitle="Productos" />
            <Main>
                <ProductList/>
            </Main>
            <Footer />
        </>
    );
};

export default App;