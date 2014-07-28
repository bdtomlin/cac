'use strict';

angular.module('cacApp').controller('AlertsCtrl', ['$scope', function($scope){
  $scope.alerts = [];

  $scope.$on('alert', function(event, alert){
    $scope.alerts.push(alert);
    console.log($scope.alerts);
  });

  $scope.dismissAlert = function(index){
    $scope.alerts.splice(index, 1);
  };

}]);
