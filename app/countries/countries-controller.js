'use strict';

angular.module('cacApp')

.controller('CountriesIndexCtrl', ['$scope', '$location', 'Countries', function($scope, $location, Countries){
  Countries.all(function(countries){
    $scope.countries = countries;
  });

  $scope.goToCountry = function(country){
    $location.path('/country/' + country.countryCode);
  };
}])

.controller('CountriesShowCtrl', ['$scope', '$routeParams', 'Countries', function($scope, $routeParams, Countries){
  Countries.find($routeParams.country).then(function(country){
    $scope.country = country;
  }, function(data){
    console.log(data);
  });
}]);
