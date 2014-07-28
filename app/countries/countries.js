'use strict';

angular.module('cacApp').factory('Countries', ['$http', '$q', 'appSettings', function($http, $q, appSettings){
  var self = {
    all: function(callback){
      if(self.cache){
       callback(self.cache);
      }else{
        var url = appSettings.geoApi + 'countryInfoJSON';
        var params = {
          username: 'bryantomlin'
        };
        var http =  $http({
          method: 'GET',
          url: url,
          params: params
        })
        .success(function(response){
          self.cache = response.geonames;
          callback(self.cache);
        })
        .error(function(){
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
      var url = appSettings.geoApi + 'countryInfoJSON';
      var params = {
        username: 'bryantomlin',
        country: countryCode
      };
      return $http({
        method: 'GET',
        url: url,
        params: params
      });
    },

    addNeighbors: function(country){
      var url = appSettings.geoApi + 'neighboursJSON';
      var params = {
        username: 'bryantomlin',
        geonameId: country.geonameId
      };
      var http =  $http({
        method: 'GET',
        url: url,
        params: params
      }).success(function(result){
        country.neighbors = result.geonames;
      });
      return country;
    }
  };

  return self;
}]);
