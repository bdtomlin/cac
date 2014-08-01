(function() {
  "use strict";

  angular.module('cacApp.home', []).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }]);

}());
