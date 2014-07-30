'use strict';

angular.module('cacApp', ['ngRoute', 'ngAnimate'])
  .constant('appSettings', {
    geoApi: 'http://api.geonames.org/',
    geoUsername: 'bryantomlin'
  })

  .run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
      $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function(){
      $rootScope.isLoading = false;
    });
    $rootScope.$on('$routeChangeError', function(){
      $rootScope.isLoading = false;
      $location.$broadcast('alert', {type: 'error', message: 'There was an error loading the page'});
    });
  })

  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
