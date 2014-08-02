describe("cacApp.alerts", function () {
  var mockedAlertsSvc;

  beforeEach(module('cacApp.alerts'));
  beforeEach(module(function($provide) {
    mockedAlertsSvc = {
      alerts: [],
      addAlert: jasmine.createSpy('addAlert'),
      dismissAlert: jasmine.createSpy('dismissAlert')
    };
    $provide.value('AlertsSvc', mockedAlertsSvc);
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
      expect(scope.alerts).toBe(mockedAlertsSvc.alerts);
    });

    it("listens for alerts and adds them to alerts array", function () {
      scope.$broadcast('alert', alert);
      expect(mockedAlertsSvc.addAlert.argsForCall[0][0]).toBe(alert);
      expect(mockedAlertsSvc.addAlert).toHaveBeenCalled();
    });

    it("dismisses alerts", function () {
      var alert = {type: 'error', message: 'some message'};
      scope.$broadcast('alert', alert);
      scope.dismissAlert(alert);
      expect(mockedAlertsSvc.dismissAlert.argsForCall[0][0]).toBe(alert);
      expect(mockedAlertsSvc.dismissAlert).toHaveBeenCalled();
    });
  });
});
