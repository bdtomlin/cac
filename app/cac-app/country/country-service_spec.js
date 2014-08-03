describe("cacApp.country.service", function () {
  var GeonamesSvcMock;
  var countryFromGeonames = JSON.parse('{"countryName":"Andorra","currencyCode":"EUR","fipsCode":"AN","countryCode":"AD","isoNumeric":"020","north":42.65604389629997,"capital":"Andorra la Vella","continentName":"Europe","areaInSqKm":"468.0","languages":"ca","isoAlpha3":"AND","continent":"EU","south":42.42849259876837,"east":1.7865427778319827,"geonameId":3041565,"west":1.4071867141112762,"population":"84000"}');
  beforeEach(function(){
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
          return Promise.resolve([]);
        }
      };
      $provide.value('GeonamesSvc', GeonamesSvcMock);
    });
  });

  describe("CountrySvc", function () {
    it("returns a country object", function(){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          expect(country).toBe(countryFromGeonames );
        });
      });
    });
  });

  describe("country.getCapitalPopulation", function () {
    it("calls the geonames service to get the population", function(){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          country.getCapitalPopulation().then(function(population){
            expect(population).toBe(100);
          });
        });
      });
    });
  });

  describe("country.getNeighbors", function () {
    it("calls the geonames service to get the population", function(){
      inject(function (CountrySvc) {
        CountrySvc.getCountry().then(function(country){
          country.neighbors().then(function(neighbors){
            expect(neighbors).toBe([]);
          });
        });
      });
    });
  });
});
