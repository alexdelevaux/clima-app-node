

const axios = require('axios');


const getClima = async (lat, lon) => {

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4e3b901502380515e0ab3538cdca1327`);

    if (respuesta.data.status === "ZERO_RESULTS") {
        throw new Error (`No hay resultados para la ciudad ${direccion}`)
    }

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}