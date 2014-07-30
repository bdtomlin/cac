'use strict';

angular.module('cacApp')
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/country/:country', {
      templateUrl: 'country/country.html',
      controller: 'CountryCtrl',
      resolve: {
        country: ['Countries', '$route', function(Countries, $route){
          return Countries.find($route.current.params.country);
        }]
      }
    });
  }]);

