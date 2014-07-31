(function() {
  "use strict";

  angular.module('cacApp').factory('CountrySvc', ['$q', 'GeonamesSvc', function($q, GeonamesSvc){
    var self = {
      all: function(){
        if(self.cache){
          var deferred =  $q.defer();
          deferred.resolve(self.cache);
          return deferred.promise;
        }else{
          self.cache = GeonamesSvc.allCountries();
          return self.cache;
        }
      },

      find: function(countryCode){
        return GeonamesSvc.getCountry(countryCode);
      }
    };

    return self;
  }]);
}());
