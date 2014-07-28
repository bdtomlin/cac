'use strict';

angular.module('cacApp', ['ngRoute', 'ngAnimate'])
  .constant('appSettings', {
    geoApi: 'http://api.geonames.org/',
    geoUsername: 'bryantomlin'
  })
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/countries', {
      templateUrl: 'countries/index.html',
      controller: 'CountriesIndexCtrl'
    })
    .when('/country/:country', {
      templateUrl: 'countries/show.html',
      controller: 'CountriesShowCtrl'
    });
  }]);
