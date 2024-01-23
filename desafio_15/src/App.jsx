import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import "./app.scss";
import ClimaCiudad from "./components/layout/ClimaCiudad";
import { useState } from "react";


const App = () => {

    //Por defecto carga bs as
    const [city, setCity] = useState("Buenos Aires");

    //Formulario de busqueda de ciudad
    const SearchForm = () => {

        //InputText de la ciudad a buscar
        const [inputCity, setInputCity] = useState ("");

        //Función que se ejecuta al presionar el boton Buscar
        const handleOnCLickSearchCity = ()=> {

            //Modifica el valor de City, haciendo que se re-renderice
            //ya que en el useeffect de ClimaCiudad la dependencia es city
            setCity(inputCity);
        };

        return (
            <div className="searchForm__container">
                <input className="searchForm__container--input" placeholder="Buscar ciudad" type="text" name="city" id="city" value={inputCity} onChange={(e) => setInputCity(e.target.value)}/>
                <button className="searchForm__container--btn" onClick={handleOnCLickSearchCity}>Buscar</button>
            </div>);
    };


    return (
        <>
            <Header title="Desafío semanal 15" subtitle="El clima" />
            <Main>
                <SearchForm/>
                <ClimaCiudad city={city}/>
            </Main>
            <Footer />
        </>
    );
};

export default App;