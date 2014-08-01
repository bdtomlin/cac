(function() {
  "use strict";

  angular.module('cacApp.countryList', [])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/country-list', {
      templateUrl: 'country-list/country-list.html',
      controller: 'CountryListCtrl',
      resolve: {
        countryList: ['CountryListSvc', function(CountrySvc){
          return CountrySvc.all();
        }]
      }
    });
  }]);
}());
