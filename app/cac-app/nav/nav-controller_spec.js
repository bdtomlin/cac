describe("cacApp.nav", function () {
  var ctrl, scope, location, httpBackend;

  beforeEach(function(){
    module('cacApp.nav');

    inject(function($controller, $rootScope, $location, $httpBackend){
      scope = $rootScope.$new();
      location = $location;
      httpBackend = $httpBackend;
      ctrl = $controller('NavCtrl',{
        $scope: scope
      });
    });
  });

  it("sets the $scope.url to the $location.path", function () {
    location.path('whwhat');
    scope.$broadcast('$routeChangeSuccess');
    expect(scope.url).toBe('/whwhat');
  });
});
