(function() {
  "use strict";

  angular.module('cacApp.home', []).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'cac-app/home/home.html',
      controller: 'HomeCtrl'
    });
  }]);

}());
