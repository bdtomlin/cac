(function() {
  "use strict";

  angular.module('cacApp.country')

  .controller('CountryCtrl', ['$rootScope', '$scope', 'country', function($rootScope, $scope, country){
    $scope.country = country;
  }]);
}());
