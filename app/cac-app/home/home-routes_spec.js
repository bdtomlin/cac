describe("cacApp.home.routes", function () {
  beforeEach(function(){
    module('cacApp.home.routes', 'cacApp.home.controller');
  });

  describe("navigating to '/'", function () {
    it("uses HomeCtrl and the home template", inject(function ($route, $location, $rootScope, $httpBackend, $rootElement, $compile) {
        var view = $compile('<div ng-view></div>')($rootScope);
        $rootElement.append(view);
        $httpBackend.whenGET('cac-app/home/home.html').respond('...');

        $rootScope.$apply(function(){
          $location.path('/');
        });

        expect($route.current.controller).toBe("HomeCtrl");
        expect($route.current.templateUrl).toBe("cac-app/home/home.html");
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    }));
  });
});
