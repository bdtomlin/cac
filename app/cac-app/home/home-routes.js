(function() {
  "use strict";

  angular.module('cacApp.home.routes', ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'cac-app/home/home.html',
      controller: 'HomeCtrl'
    });
  }]);

}());
