describe("cacApp.countryList.routes", function () {
  beforeEach(function(){
    module('cacApp.countryList.routes');
    module(function($provide){
      var CountryListSvc = {
        all: function(){
          return new Promise(function(){});
        }
      };

      spyOn(CountryListSvc, 'all').and.callThrough();

      $provide.value('CountryListSvc', CountryListSvc);
    });
  });

  describe("/country-list", function () {
    it("loads the correct page and controller",
      inject(function ($route, $location, $rootScope, $httpBackend, $rootElement, $compile, CountryListSvc) {

        var view = $compile('<div ng-view></div>')($rootScope);
        $rootElement.append(view);
        $httpBackend.whenGET('cac-app/country-list/country-list.html').respond('...');

        $rootScope.$apply(function(){
          $location.path('/country-list');
        });

        expect($route.current.controller).toBe("CountryListCtrl");
        expect($route.current.templateUrl).toBe("cac-app/country-list/country-list.html");
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
        expect(CountryListSvc.all).toHaveBeenCalled();
    }));

  });
});
