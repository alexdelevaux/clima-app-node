
// Obtener el lugar usando la librería axios

const axios = require('axios');

const getLugarLatLong = async (direccion) => {

    let urlEncoded = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncoded}&key= AIzaSyApqgf9VJzF1t_7EogSIKTU3loRnZHgMXM `)
    
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error (`No hay resultados para la ciudad ${direccion}`)
    }
        
        let dir = resp.data.results[0].formatted_address;

        let lat = resp.data.results[0].geometry.location.lat;

        let lon = resp.data.results[0].geometry.location.lng;        

    return {
        dir, 
        lat,
        lon
    }

}


module.exports = {
    getLugarLatLong
}

