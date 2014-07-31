(function() {
  "use strict";

  angular.module('cacApp')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/country-list', {
        templateUrl: 'country-list/country-list.html',
        controller: 'CountryListCtrl',
        resolve: {
          countryList: ['CountrySvc', function(CountrySvc){
            return CountrySvc.all();
          }]
        }
      });
    }]);
}());
