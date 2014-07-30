'use strict';

angular.module('cacApp').factory('Countries', ['$q', 'geonames', function($q, geonames){
  var self = {
    all: function(){
      if(self.cache){
        var deferred =  $q.defer();
        deferred.resolve(self.cache);
        return deferred.promise;
      }else{
        return geonames.allCountries().then(function(response){
          self.cache = response.data.geonames;
          return self.cache;
        });
      }
    },

    find: function(countryCode){
      return geonames.getCountry(countryCode).then(function(response){
        return response.data.geonames[0];
      }).then(function(country){
        return geonames.addNeighbors(country);
      }).then(function(country){
        return geonames.addCapitalPopulation(country);
      });
    }
  };

  return self;
}]);
