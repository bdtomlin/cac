describe("cacApp.countryList.controller", function () {
  var ctrl, scope, location;

  beforeEach(function(){
    module('cacApp.countryList.controller');
    module(function($provide){
      var countryListMock = ['CountryListHere'];
      $provide.value('countryList', countryListMock);
    });

    inject(function($controller, $rootScope, $location){
      scope = $rootScope.$new();
      location = $location;
      ctrl = $controller('CountryListCtrl', {
        $scope: scope
      });
    });
  });

  it("sets $scope.coutries to countryList", function () {
    expect(scope.countries).toEqual(['CountryListHere']);
  });

  it("has a function $scope.goToCountry that navigates to ...", function () {
    scope.goToCountry({countryCode: 'US'});
    expect(location.path()).toEqual('/country/US');
  });
});
