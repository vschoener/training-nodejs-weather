const request = require('request');
const axios = require('axios');

module.exports = {
    url: `https://api.darksky.net/forecast`,
    units: 'auto',
    key: '',

    getWeather (lat, lng) {
        let url = `${this.url}/${this.key}/${lat},${lng}?units=${this.units}`
        return axios.get(url).then((response) => {
            if (response.status != "200") {
                throw new Error("statusCode is not OK");
            } 
            
            return { 
                temperature: response.data.currently.temperature,
                apparentTemperature: response.data.currently.apparentTemperature
            };
        });
    }
};
