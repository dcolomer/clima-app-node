const axios = require('axios');

const getClima = async (lat, lng) => {
    //const apiKey = 'e04d347b6af8282b2981ef5ce5a901d6';
    const apiKey = 'f369635965b00ad16ced5da4da4b9f3b'; // la del profe, hasta que se active la mia
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${urlBase}?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

    const resp = await axios.get(url);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}