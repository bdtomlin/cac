(function() {
  "use strict";

  angular.module('cacApp.components.geonames', [])
  .constant('geonamesSettings', {
    geoApi: 'http://api.geonames.org/',
    geoUsername: 'bryantomlin'
  })

  .factory('GeonamesSvc', ['$http', 'geonamesSettings', function($http, geonamesSettings){
    var self = {
      getCountry: function(countryCode){
        var http = $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'countryInfoJSON',
          params: {
            username: geonamesSettings.geoUsername,
            country: countryCode
          }
        });

        return http.then(function(response){
          return response.data.geonames[0];
        }).then(function(country){
          return self.addNeighbors(country);
        }).then(function(country){
          return self.addCapitalPopulation(country);
        });
      },

      addCapitalPopulation: function(country){
        var http =  $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'searchJSON',
          params: {
            username: geonamesSettings.geoUsername,
            country: country.countryCode,
            featureCode: 'PPLC',
            name: country.capital
          }
        }).success(function(result){
          country.capitalPopulation = result.geonames[0].population;
        });
        return country;
      },

      addNeighbors: function(country){
        var http =  $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'neighboursJSON',
          params: {
            username: geonamesSettings.geoUsername,
            geonameId: country.geonameId
          }
        }).success(function(result){
          country.neighbors = result.geonames;
        });
        return country;
      },

      allCountries: function(){
        var http = $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'countryInfoJSON',
          params: {
            username: geonamesSettings.geoUsername
          }
        });
        return http.then(function (response) {
          return response.data.geonames;
        });
      }
    };
    return self;
  }]);
}());
