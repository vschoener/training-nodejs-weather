const address = require('./address');
const expect = require('chai').expect;

describe('getGeoCodeAddress', () => {
    it("should fetch a GeoCoded address from text", () => {
        // You should return the promise if you don't want anything green
        // with an hidden error
        return address.getGeoCodeAddress("Paris").then((address) => {
            expect(address).to.have.property('address');
            expect(address).to.have.property('latitude');
            expect(address).to.have.property('longitude');

            expect(address.address).to.contain('Paris');
        });
    }); 
});
