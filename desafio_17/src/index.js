const fs = require("fs");
const path = require("path");

const operacion = process.argv[2];
const nombreArchivo = process.argv[3];
const contenido = process.argv[4];

const rutaDelArchivo = path.join(__dirname, "files", nombreArchivo);

const escribirContenido = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile(rutaDelArchivo, contenido, "utf8", (error) => {
            if (error) {
                reject(new Error("Error al escribir contenido en el archivo"));
            }

            console.log("\n--Archivo " + nombreArchivo + " creado--");
            resolve(true);
        });
    });
};

const modificarArchivo = () => {

    return new Promise((resolve, reject) => {

        fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
            if (error) {
                reject(new Error("Error al modificar el archivo"));
            }
            else{
                fs.writeFile(rutaDelArchivo, contenido, "utf8", (error) => {
                    if (error) {
                        reject(new Error("Error al escribir contenido en el archivo"));
                    }

                    console.log("\n--Archivo " + nombreArchivo + " modificado--");
                    resolve(true);
                });
            }

        });

    });
};

const leerContenido = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
            if (error) {
                reject(new Error("Error al leer el archivo"));
            }

            console.log(result + "\n\n--Contenido leído--" );
            resolve(result);
        });
    });
};

const eliminarArchivo = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(rutaDelArchivo, (error) => {
            if (error) {
                reject(new Error("Error al eliminar el archivo"));
            }

            console.log("\nArchivo " + nombreArchivo + " eliminado");
            resolve(true);
        });
    });
};

const ejecutar = async (funcion) => {

    try {

        switch (funcion) {

        case "crearArchivo" :

            await escribirContenido();
            break;

        case "modificarArchivo":

            await modificarArchivo();
            break;

        case "leerArchivo":

            await leerContenido();
            break;

        case "eliminarArchivo":
            await eliminarArchivo();
            break;

        default:
            break;
        }

    } catch (error) {
        console.log(error.message);
    }
};

ejecutar(operacion);