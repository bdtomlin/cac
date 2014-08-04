(function() {
  "use strict";

  angular.module('cacApp.countryList.service', [])
  .factory('CountryListSvc', ['$q', 'GeonamesSvc', function($q, GeonamesSvc){
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
      }
    };

    return self;
  }]);
}());
