(function() {
  "use strict";

  angular.module('cacApp').config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/country/:country', {
      templateUrl: 'country/country.html',
      controller: 'CountryCtrl',
      resolve: {
        country: ['CountrySvc', '$route', function(CountrySvc, $route){
          return CountrySvc.find($route.current.params.country);
        }]
      }
    });
  }]);
}());
