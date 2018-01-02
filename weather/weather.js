const request = require('request');

module.exports = {
    url: `https://api.darksky.net/forecast`,
    units: 'auto',
    key: '',

    getWeather (lat, lng) {
        return new Promise((resolve, reject) =>  {
            let url = `${this.url}/${this.key}/${lat},${lng}?units=${this.units}`
            request.get(url, {
                json: true
            }, (error, response, body) => {
                let customError;
                if (error) {
                    customError = 'Unable to connect to the weather API service';
                } else if (response.statusCode != 200) {
                    customError = `API error with status ${body.status} and message ${body.error_message}`;
                }

                if (customError) {
                    reject(customError);
                } 
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                })
            })
        });
    }
};
