const request = require('request');

module.exports = {
    url: 'http://maps.google.com/maps/api/geocode/json',

    getGeoCodeAddress (address, callback) {
        return new Promise((resolve, reject) => {
            const encodedAddress = encodeURIComponent(address);

            request(`${this.url}?address=${encodedAddress}`, {
                json: true
            }, (error, response, body) => {
                let customError;
                let geoCodeAddress;
    
                if (error) {
                    customError = `Technical Error: ${error}`;
                } else if (!response) {
                    customError = `No response available`;
                } else if (!response.headers['content-type'] || response.headers['content-type'].indexOf('application/json') !== 0) {
                    customError = `Bad content type response: ${response.headers['content-type']}. application/json required`;
                } else if (response.statusCode == 200 && body.status == 'OK') {
                    geoCodeAddress = {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    };
                } else {
                    customError = `API error with status ${body.status} and message ${body.error_message}`;
                }
    
                if (customError) {
                    reject(customError);
                }
    
                resolve(geoCodeAddress);
            });
        });
    }
}
