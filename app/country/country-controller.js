'use strict';

angular.module('cacApp')

.controller('CountryCtrl', ['$rootScope', '$scope', 'country', function($rootScope, $scope, country){
  $scope.country = country;
}]);
