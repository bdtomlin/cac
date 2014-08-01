(function() {
  "use strict";

  angular.module('cacApp.alerts').
  controller('AlertsCtrl', ['$scope', 'AlertsSvc', function($scope, AlertsSvc) {
    $scope.alerts = AlertsSvc.alerts;

    $scope.$on('alert', function(event, alert){
      AlertsSvc.addAlert(alert);
    });

    $scope.dismissAlert = function(alert){
      AlertsSvc.dismissAlert(alert);
    };

  }]);
}());
