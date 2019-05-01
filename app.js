const argv = require('./config/yargs').argv;

const site = require('./config/site');

const clima = require('./config/clima');

getInfo = async (direccion) => {

    try {
        const coords = await site.getSiteLatLng(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${coords.direccion} es de ${temp} ºC`;
    } catch (e) {
        return `No se ha podido determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);