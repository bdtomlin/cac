(function() {
  "use strict";

  angular.module('cacApp.components.geonames', ['ngRoute'])
  .constant('geonamesSettings', {
    geoApi: 'http://api.geonames.org/',
    geoUsername: 'bryantomlin'
  })
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])

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
        });
      },

      capitalPopulation: function(countryCode, countryCapital){
        return $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'searchJSON',
          params: {
            username: geonamesSettings.geoUsername,
            country: countryCode,
            featureCode: 'PPLC',
            name: countryCapital
          }
        }).then(function(response){
          return response.data.geonames[0].population;
        });
      },

      neighbors: function(geonameId){
        return $http({
          method: 'GET',
          url: geonamesSettings.geoApi + 'neighboursJSON',
          params: {
            username: geonamesSettings.geoUsername,
            geonameId: geonameId
          }
        }).then(function(response){
          return response.data.geonames;
        });
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
