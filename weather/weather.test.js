const weather = require('./weather');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;

//chai.use(chaiAsPromised);

describe('getWeather', () => {
    it('should return weather information from geocoded address', () => {
        // You should return the promise if you don't want anything green
        // with an hidden error
        return weather.getWeather(48.85994, 2.34157).then((weather) => {
            expect(weather).to.have.property('temperature');
            expect(weather).to.have.property('apparentTemperature');

            // TODO: use mocking here cause I can't really predict the temperature value :)
            expect(weather.temperature).to.be.a('number');
            expect(weather.apparentTemperature).to.be.a('number');
        });
    });
});
