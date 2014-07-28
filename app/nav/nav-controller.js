angular.module('cacApp').controller('NavCtrl', ['$scope', '$location', function($scope, $location){
  $scope.$on('$routeChangeSuccess', function(){
    $scope.url = $location.path();
  });
}]);
