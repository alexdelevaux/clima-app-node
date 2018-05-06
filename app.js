const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options( {
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let mostrarClima = async (direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLong(direccion);

        let temperatura = await clima.getClima( coordenadas.lat, coordenadas.lon);
    
        return `El clima en ${direccion} es de ${ temperatura}ºC`;
    }
    catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

mostrarClima( argv.direccion )
    .then( mensaje => console.log(mensaje))
    .catch( error => console.log(error) )