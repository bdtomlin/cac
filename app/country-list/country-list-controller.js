(function() {
  "use strict";

  var cacApp = angular.module('cacApp');
  cacApp.controller('CountryListCtrl', ['$scope', '$location', 'countryList', function($scope, $location, countryList){
    $scope.countries = countryList;

    $scope.goToCountry = function(country){
      $location.path('/country/' + country.countryCode);
    };
  }]);
}());
