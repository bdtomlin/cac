describe("cacApp.country.service", function () {
  var GeonamesSvcMock;
  var countryFromGeonames = JSON.parse('{"countryName":"Andorra","currencyCode":"EUR","fipsCode":"AN","countryCode":"AD","isoNumeric":"020","north":42.65604389629997,"capital":"Andorra la Vella","continentName":"Europe","areaInSqKm":"468.0","languages":"ca","isoAlpha3":"AND","continent":"EU","south":42.42849259876837,"east":1.7865427778319827,"geonameId":3041565,"west":1.4071867141112762,"population":"84000"}');
  beforeEach(function(done){
    module('cacApp.country.service');
    module(function($provide){
      GeonamesSvcMock = {
        getCountry: function(){
          return Promise.resolve(countryFromGeonames);
        },
        capitalPopulation: function(){
          return Promise.resolve(100);
        },
        neighbors: function(){
          return Promise.resolve(['one', 'two']);
        }
      };
      $provide.value('GeonamesSvc', GeonamesSvcMock);
      spyOn(GeonamesSvcMock, 'getCountry').and.callThrough();
      spyOn(GeonamesSvcMock, 'capitalPopulation').and.callThrough();
      spyOn(GeonamesSvcMock, 'neighbors').and.callThrough();
    });
    done();
  });

  describe("CountrySvc", function () {
    it("returns a country object", function(done){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          expect(country).toBe(countryFromGeonames);
          expect(GeonamesSvcMock.getCountry).toHaveBeenCalled();
          done();
        });
      });
    });
  });

  describe("country.getCapitalPopulation", function () {
    it("calls the geonames service to get the population", function(done){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          CountrySvc.addCapitalPopulationTo(country).then(function(country){
            expect(country.capitalPopulation).toBe(100);
            expect(GeonamesSvcMock.capitalPopulation).toHaveBeenCalled();
            done();
          });
        });
      });
    });
  });

  describe("country.getNeighbors", function () {
    it("calls the geonames service to get the population", function(done){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          CountrySvc.addNeighborsTo(country).then(function(country){
            expect(country.neighbors).toEqual(['one', 'two']);
            expect(GeonamesSvcMock.neighbors).toHaveBeenCalled();
            done();
          });
        });
      });
    });
  });
});
