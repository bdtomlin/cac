(function() {
  "use strict";

  angular.module('cacApp', [
    'ngAnimate',
    'cacApp.alerts',
    'cacApp.components.geonames',
    'cacApp.country',
    'cacApp.countryList',
    'cacApp.home',
    'cacApp.nav'
    ])

    .run(['$rootScope', function($rootScope){
      $rootScope.$on('$routeChangeStart', function(){
        $rootScope.isLoading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.isLoading = false;
      });
      $rootScope.$on('$routeChangeError', function(){
        $rootScope.isLoading = false;
        $rootScope.$broadcast('alert', {type: 'error', message: 'There was an error loading the page'});
      });
    }]);
}());
