(function() {
  "use strict";

  angular.module('cacApp.nav', []).controller('NavCtrl', ['$scope', '$location', function($scope, $location){
    $scope.$on('$routeChangeSuccess', function(){
      $scope.url = $location.path();
    });
  }]);
}());
