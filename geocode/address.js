const request = require('request');
const axios = require('axios');

module.exports = {
    url: 'http://maps.google.com/maps/api/geocode/json',

    getGeoCodeAddress (address, callback) {
        const encodedAddress = encodeURIComponent(address);

        return axios.get(`${this.url}?address=${encodedAddress}`)
            .then((response) => {
                if (!response.headers['content-type'] || response.headers['content-type'].indexOf('application/json') !== 0) {
                    throw new Error(`Bad content type response: ${response.headers['content-type']}. application/json required`);
                } else if (response.status != 200 || response.statusText != 'OK') {
                    throw new Error(`API error with status ${response.status} and message ${response.error_message}`);
                } else if (response.data.error_message) {
                    throw new Error(response.data.error_message);
                }

                return {
                    address: response.data.results[0].formatted_address,
                    latitude: response.data.results[0].geometry.location.lat,
                    longitude: response.data.results[0].geometry.location.lng
                };
            });
        }
}
