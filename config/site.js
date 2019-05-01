const axios = require('axios');

const getSiteLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'X-RapidAPI-Key': 'dae7294b56mshd3f083fa1c20587p17ba75jsncece297d1536',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const datos = resp.data.Results[0];

    const direccion = datos.name;
    const latitud = datos.lat;
    const longitud = datos.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getSiteLatLng
}
