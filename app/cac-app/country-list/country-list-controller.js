(function() {
  "use strict";

  angular.module('cacApp.countryList.controller', [])
  .controller('CountryListCtrl', ['$scope', '$location', 'countryList', function($scope, $location, countryList){
    $scope.countries = countryList;

    $scope.goToCountry = function(country){
      $location.path('/country/' + country.countryCode);
    };
  }]);
}());
