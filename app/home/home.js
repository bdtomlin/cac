'use strict';

angular.module('cacApp')
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
  }]);
