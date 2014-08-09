(function() {
  "use strict";

  angular.module('cacApp.country.service', []).factory('CountrySvc', ['GeonamesSvc', function(GeonamesSvc){
    return {
      getCountry: function(countryCode){
        return GeonamesSvc.getCountry(countryCode);
      },
      addCapitalPopulationTo: function(country){
        return GeonamesSvc.capitalPopulation(country.countryCode, country.capital).then(function(population){
          country.capitalPopulation = population;
          return country;
        });
      },
      addNeighborsTo: function(country){
        return GeonamesSvc.neighbors(country.geonameId).then(function(neighbors){
          country.neighbors = neighbors;
          return country;
        });
      }
    };

  }]);
}());
