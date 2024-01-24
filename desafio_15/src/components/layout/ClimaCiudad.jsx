import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

import "./climaCiudad.scss";

//recibe la ciudad desde el app como prop
const ClimaCiudad = (props) => {

    const {city} = props;

    const [temperatura, setTemperatura] = useState("");//Temperatura de la ciudad
    const [errorMsg, setErrorMsg] = useState("");//Mensaje de error en caso de haberlo
    const [iconUrl, seticonUrl] = useState("");//Imagen a mostrar
    const [mensaje, setMensaje] = useState("");//Mensaje de mucho calor/mucho frio
    const [clase, setClase] = useState("");//Clase para el mensaje, rojo si hace calor, azul si hace frio

    //Esto hace que se ejecute cada vez que la dependencia ([city]) cambie de valor
    useEffect(() => {

        //declaración de funcion asincrona
        const obtenerDatos = async () => {
            try {
                //espera la rta de obtenerTemperatura y lo guardo en datos
                const datos = await obtenerTemperatura();

                //Guarda los datos obtenidos en temperatura
                setTemperatura(datos);

                //Se arma la url con el codigo del icono que viene con la api
                seticonUrl(`http://openweathermap.org/img/w/${datos.weather[0].icon}.png`);

                //Llama a la funcion MostrarMensaje para validar si hace mas de 30° o menos de 10°
                MostrarMensaje(datos.main.temp);

            } catch (error) {
                //Si hubo un error al llamar a la api, muestra el siguiente msj
                setErrorMsg("Error al obtener el clima o la ubicación no existe");
            }
        };

        //llamo a la función
        obtenerDatos();

    }, [city]);

    //declaración de la función asincrona
    const obtenerTemperatura = async () => {

        //seteo estos valores en nulo cada vez que se ejecuta una nueva busqueda, para limpiar la pantalla
        setTemperatura("");
        setErrorMsg("");
        setMensaje("");

        const URL_API = "https://api.openweathermap.org/data/2.5/weather";
        const params = {
            q: city,
            units: "metric",
            appid: "afe8f4ea8ab33c22831dd3b19fc73ec7"
        };

        //espera la rta del get a la api y lo guarda en response
        const response = await axios.get(URL_API, { params });

        return response.data;

    };

    //funcion para el armado del mensaje de frio/calor
    const MostrarMensaje = (temp) => {

        if (temp > 30) {
            setMensaje("¡Hace mucho Calor!");
            setClase("weather__container__msg--hot");
        }
        if (temp <10) {
            setMensaje("¡Hace mucho Frío!");
            setClase("weather__container__msg--cold");
        }

    };

    //la sentencia temperatura && , ejecuta lo que esta entre parentesis siempre y cuando haya algo en temperatura, de igual forma con errorMsg y mensaje
    return (
        <div className="weather__container">
            {temperatura && (
                <>
                    <div className="weather__container__city">
                        <h2 >{temperatura.name}, {temperatura.sys.country}</h2>
                    </div>
                    <div className="weather__container__weather">
                        <div className="weather__container__weather--icon">
                            <img src={iconUrl} alt="Icono del tiempo" />
                        </div>
                        <div className="weather__container__weather--temp">
                            <p className="celsius">{temperatura.main.temp.toFixed(1)} °C</p>
                            <p className="wheater">{temperatura.weather[0].main}</p>
                        </div>
                    </div>
                </>
            )}
            {errorMsg && (
                <div className="weather__container__error">
                    <p>{errorMsg}</p>
                </div>
            )
            }
            {mensaje && (
                <div className={`weather__container__msg ${clase}`}>
                    <p>{mensaje}</p>
                </div>
            )

            }
        </div>
    );


};


ClimaCiudad.propTypes = {
    city: PropTypes.string.isRequired
};

export default ClimaCiudad;
