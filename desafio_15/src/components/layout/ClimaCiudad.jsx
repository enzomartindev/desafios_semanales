import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const ClimaCiudad = (props) => {

    const {city} = props;

    const [temperatura, setTemperatura] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    //const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const datos = await obtenerTemperatura();
                setTemperatura(datos);
            } catch (error) {
                setErrorMsg("Error al obtener el clima o la ubicación no existe");
            }
        };

        obtenerDatos();
    }, [city]);

    const obtenerTemperatura = async () => {

        setTemperatura("");
        setErrorMsg("");

        const URL_API = "https://api.openweathermap.org/data/2.5/weather";
        const params = {
            q: city,
            units: "metric",
            appid: "afe8f4ea8ab33c22831dd3b19fc73ec7"
        };

        const response = await axios.get(URL_API, { params });
        return response.data;

    };

    return (
        <div className="weather__container">
            {temperatura && (
                <>
                    <h2 className="weather__container--city">{city}</h2>
                    <p className="weather__container--temp">{temperatura.main.temp} °C</p>
                    <p className="weather__container--weather">{temperatura.weather[0].main}</p>
                </>
            )}
            {errorMsg && (
                <>
                    <p className="weather__container--error">{errorMsg}</p>
                </>
            )
            }
        </div>
    );


};


ClimaCiudad.propTypes = {
    city: PropTypes.string.isRequired
};

export default ClimaCiudad;
