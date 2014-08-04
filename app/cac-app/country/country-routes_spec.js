describe("cacApp.coutnry.routes", function () {
  beforeEach(module('cacApp.country.routes'));
  beforeEach(module(function($provide){
    $provide.value('CountrySvc', {
      // verify that getCountry gets called (spyOn)
      getCountry: function(){
        return new Promise(function(){
          return {
            // verify that these get called...
            getCapitalPopulation: function(){},
            getNeighbors: function(){}
          };
        });
      }
    });
  }));

  describe("/country/:country", function () {
    it('loads the page and controller', inject(function($route, $location, $rootScope, $httpBackend, $rootElement, $compile){
      var view = $compile('<div ng-view></div>')($rootScope);
      $rootElement.append(view);
      $httpBackend.whenGET('cac-app/country/country.html').respond('...');
      $rootScope.$apply(function(){
        $location.path('/country/US');
      });
      expect($route.current.controller).toBe("CountryCtrl");
      expect($route.current.templateUrl).toBe("cac-app/country/country.html");
      $httpBackend.flush();
      // $httpBackend.verifyNoOutStandingRequests();
    }));
  });
});
