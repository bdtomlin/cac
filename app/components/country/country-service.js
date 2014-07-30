'use strict';

angular.module('cacApp').factory('CountrySvc', ['$q', 'GeonamesSvc', function($q, GeonamesSvc){
  var self = {
    all: function(){
      if(self.cache){
        var deferred =  $q.defer();
        deferred.resolve(self.cache);
        return deferred.promise;
      }else{
        return GeonamesSvc.allCountries().then(function(response){
          self.cache = response.data.geonames;
          return self.cache;
        });
      }
    },

    find: function(countryCode){
      return GeonamesSvc.getCountry(countryCode).then(function(response){
        return response.data.geonames[0];
      }).then(function(country){
        return GeonamesSvc.addNeighbors(country);
      }).then(function(country){
        return GeonamesSvc.addCapitalPopulation(country);
      });
    }
  };

  return self;
}]);
