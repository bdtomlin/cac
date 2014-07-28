'use strict';

angular.module('cacApp')

.controller('CountriesIndexCtrl', ['$rootScope', '$scope', '$location', 'Countries', function($rootScope, $scope, $location, Countries){
  Countries.all().then(function(countries){
    $scope.countries = countries;
  }, function(){
    $rootScope.$broadcast('alert', {type: 'error', message: 'There was an error loading the countries.'});
  });

  $scope.goToCountry = function(country){
    $location.path('/country/' + country.countryCode);
  };
}])

.controller('CountriesShowCtrl', ['$rootScope', '$scope', '$routeParams', 'Countries', function($rootScope, $scope, $routeParams, Countries){
  Countries.find($routeParams.country).then(function(country){
    $scope.country = country;
  }, function(data){
    $rootScope.$broadcast('alert', {type: 'error', message: 'There was an error loading the country.'});
  });
}]);
