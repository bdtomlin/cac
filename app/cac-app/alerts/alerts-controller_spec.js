describe("cacApp.alerts", function () {
  beforeEach(module('cacApp.alerts'));

  describe("AlertsCtrl", function () {
    var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('AlertsCtrl',{
        $scope: scope
      });
    }));

    it("listens for alerts and adds them to alerts array", function () {
      var alert = {type: 'error', message: 'some message'};
      scope.$broadcast('alert', alert);
      expect(scope.alerts.length).toBe(1);
      expect(scope.alerts[0]).toBe(alert);
    });

    it("dismisses alerts", function () {
      var alert = {type: 'error', message: 'some message'};
      scope.$broadcast('alert', alert);
      scope.dismissAlert(alert);

      expect(scope.alerts.length).toBe(0);
    });
  });
});
