(function() {
  "use strict";

  angular.module('cacApp.countryList.routes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/country-list', {
        templateUrl: 'cac-app/country-list/country-list.html',
        controller: 'CountryListCtrl',
        resolve: {
          countryList: ['CountryListSvc', function(CountrySvc){
            return CountrySvc.all();
          }]
        }
      });
    }]);
}());
