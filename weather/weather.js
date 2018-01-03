const request = require('request');
const axios = require('axios');

module.exports = {
    url: `https://api.darksky.net/forecast`,
    units: 'auto',
    key: process.env.DARK_SKY_API || '',

    getWeather (lat, lng) {
        let url = `${this.url}/${this.key}/${lat},${lng}?units=${this.units}`
        return axios.get(url).then((response) => {
            if (response.status != 200) {
                throw new Error(`Error HTTP ${response.status} ${response.request.url} ${response.statusText}`);
            } 
            
            return { 
                temperature: response.data.currently.temperature,
                apparentTemperature: response.data.currently.apparentTemperature
            };
        }).catch((error) =>  {
            if (error.response) {
                throw `${error.response.status} ${error.config.url} ${error.response.statusText}`;
            }
            
            throw error;
        });
    }
};
