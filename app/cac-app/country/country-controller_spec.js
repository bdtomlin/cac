describe("cacApp.country", function () {
  var countryMock;

  beforeEach(module('cacApp.country.controller'));
  beforeEach(module(function($provide){
    countryMock = 'countryMock';
    $provide.value('country', countryMock);
  }));

  describe("CountryCtrl", function () {
    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('CountryCtrl',{
        $scope: scope
      });
    }));

    it("sets country scope", function () {
      expect(scope.country).toEqual(countryMock);
    });
  });

});
