const request = require('request');
const yargs = require('./init-cli')();
const geoCode = require('./geocode/address');
const weather = require('./weather/weather');
const argv = yargs.argv;
const lookingForAddress = argv.address;
weather.units = argv.units || 'auto';
weather.key = process.env.DARK_SKY_API || '';

console.log(`Looking for address ${lookingForAddress}`);
geoCode.getGeoCodeAddress(lookingForAddress, (error, address) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Address found: ${address.address}`);
        weather.getWeather(address.latitude, address.longitude, (error, weather) => {
            if (error) {
               console.log(error);
               return;
            } 
            console.log(`Temperature there is ${weather.temperature} and it feels like ${weather.apparentTemperature}`);
        });
    }
});
