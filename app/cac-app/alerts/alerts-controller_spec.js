describe("cacApp.alerts", function () {
  var AlertsSvcMock;

  beforeEach(module('cacApp.alerts'));
  beforeEach(module(function($provide) {
    AlertsSvcMock = {
      alerts: [],
      addAlert: jasmine.createSpy('addAlert'),
      dismissAlert: jasmine.createSpy('dismissAlert')
    };
    $provide.value('AlertsSvc', AlertsSvcMock);
  }));


  describe("AlertsCtrl", function () {
    var ctrl,
        scope,
        alert = {type: 'error', message: 'some message'};
    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('AlertsCtrl',{
        $scope: scope
      });
    }));

    it("loads up the AlertSvc.alerts array", function(){
      expect(scope.alerts).toBe(AlertsSvcMock.alerts);
    });

    it("listens for alerts and adds them to alerts array", function () {
      scope.$broadcast('alert', alert);
      expect(AlertsSvcMock.addAlert.argsForCall[0][0]).toBe(alert);
      expect(AlertsSvcMock.addAlert).toHaveBeenCalled();
    });

    it("dismisses alerts", function () {
      var alert = {type: 'error', message: 'some message'};
      scope.$broadcast('alert', alert);
      scope.dismissAlert(alert);
      expect(AlertsSvcMock.dismissAlert.argsForCall[0][0]).toBe(alert);
      expect(AlertsSvcMock.dismissAlert).toHaveBeenCalled();
    });
  });
});
