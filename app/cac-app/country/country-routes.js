(function() {
  "use strict";

  angular.module('cacApp.country.routes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/country/:country', {
      templateUrl: 'cac-app/country/country.html',
      controller: 'CountryCtrl',
      resolve: {
        country: ['CountrySvc', '$route', function(CountrySvc, $route){
          return CountrySvc.getCountry($route.current.params.country).then(function(country){
            CountrySvc.addCapitalPopulationTo(country);
            return country;
          }).then(function(country){
            CountrySvc.addNeighborsTo(country);
            return country;
          });
        }]
      }
    });
  }]);
}());
