'use strict';

angular.module('cacApp').factory('Countries', ['$http', '$q', 'appSettings', function($http, $q, appSettings){
  var self = {
    all: function(){
      if(self.cache){
        var deferred =  $q.defer();
        deferred.resolve(self.cache);
        return deferred.promise;
      }else{
        var url = appSettings.geoApi + 'countryInfoJSON';
        var params = {
          username: appSettings.geoUsername,
        };
        return $http({
          method: 'GET',
          url: url,
          params: params
        }).then(function(response){
          self.cache = response.data.geonames;
          return self.cache;
        });
      }
    },

    find: function(countryCode){
      return self.getCountry(countryCode).then(function(response){
        return response.data.geonames[0];
      }).then(function(country){
        return self.addNeighbors(country);
      });
    },

    getCountry: function(countryCode){
      return $http({
        method: 'GET',
        url: appSettings.geoApi + 'countryInfoJSON',
        params: {
          username: appSettings.geoUsername,
          country: countryCode
        }
      });
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
    }
  };

  return self;
}]);
