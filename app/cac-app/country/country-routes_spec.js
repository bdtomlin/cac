describe("cacApp.country.routes", function () {
  beforeEach(module('cacApp.country.routes'));
  beforeEach(module(function($provide){
    var countrySvc = {
      getCountry: function(){
        return new Promise(function(){
          return {
            getCapitalPopulation: function(){},
            getNeighbors: function(){}
          };
        });
      }
    };

    spyOn(countrySvc, 'getCountry').and.callThrough();

    $provide.value('CountrySvc', countrySvc);
  }));

  describe("/country/:country", function () {
    it('loads the page and controller', inject(function($route, $location, $rootScope, $httpBackend, $rootElement, $compile, CountrySvc){
      var view = $compile('<div ng-view></div>')($rootScope);
      $rootElement.append(view);
      $httpBackend.whenGET('cac-app/country/country.html').respond('...');
      $rootScope.$apply(function(){
        $location.path('/country/US');
      });
      expect($route.current.controller).toBe("CountryCtrl");
      expect($route.current.templateUrl).toBe("cac-app/country/country.html");
      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.verifyNoOutstandingExpectation();
      expect(CountrySvc.getCountry).toHaveBeenCalled();
    }));
  });
});
