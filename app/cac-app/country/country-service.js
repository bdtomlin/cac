(function() {
  "use strict";

  angular.module('cacApp.country').factory('CountrySvc', ['$q', 'GeonamesSvc', function($q, GeonamesSvc){
    return {
      getCountry: function(countryCode){
        return GeonamesSvc.getCountry(countryCode).then(function(country){
          country.getCapitalPopulation = function(){
            GeonamesSvc.capitalPopulation(country.countryCode, country.capital).then(function(population){
              country.capitalPopulation = population;
            });
          };
          country.getNeighbors = function(){
            GeonamesSvc.neighbors(country.geonameId).then(function(neighbors){
              country.neighbors = neighbors;
            });
          };
          return country;
        });
      }
    };
  }]);
}());
