(function() {
  "use strict";

  angular.module('cacApp.components.geonames', []).factory('GeonamesSvc', ['$http', 'appSettings', function($http, appSettings){
    var self = {
      getCountry: function(countryCode){
        var http = $http({
          method: 'GET',
          url: appSettings.geoApi + 'countryInfoJSON',
          params: {
            username: appSettings.geoUsername,
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
          url: appSettings.geoApi + 'searchJSON',
          params: {
            username: appSettings.geoUsername,
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
          url: appSettings.geoApi + 'neighboursJSON',
          params: {
            username: appSettings.geoUsername,
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
          url: appSettings.geoApi + 'countryInfoJSON',
          params: {
            username: appSettings.geoUsername
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
