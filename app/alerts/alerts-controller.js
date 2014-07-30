'use strict';

angular.module('cacApp').controller('AlertsCtrl', ['$scope', '$timeout', function($scope, $timeout){
  $scope.alerts = [];

  $scope.$on('alert', function(event, alert){
    var index = $scope.alerts.push(alert) - 1;
    $timeout(function(){
      $scope.dismissAlert(index);
    }, 5000);
  });

  $scope.dismissAlert = function(index){
    $scope.alerts.splice(index, 1);
  };

}]);
