(function() {
  "use strict";

  angular.module('cacApp.country').factory('CountrySvc', ['$q', 'GeonamesSvc', function($q, GeonamesSvc){
    var self = {
      find: function(countryCode){
        return GeonamesSvc.getCountry(countryCode);
      }
    };

    return self;
  }]);
}());
