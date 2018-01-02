const request = require('request');
const yargs = require('./init-cli')();
const geoCode = require('./geocode/address');
const weather = require('./weather/weather');
const argv = yargs.argv;
const lookingForAddress = argv.address;
weather.units = argv.units || 'auto';
weather.key = process.env.DARK_SKY_API || '';

console.log(`Looking for address ${lookingForAddress}`);
geoCode.getGeoCodeAddress(lookingForAddress)
    .then((address) => {
        console.log(`Address found: ${address.address}`);
        return weather.getWeather(address.latitude, address.longitude);
    })
    .then((weather) => {
         console.log(`Temperature there is ${weather.temperature} and it feels like ${weather.apparentTemperature}`);
    })
    .catch((error) => {
        console.log(error);
    });
