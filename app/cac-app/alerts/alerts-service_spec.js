describe('AlertsSvc', function () {
  var alert = {type: 'error', message: 'my message'};
  
  beforeEach(module('cacApp.alerts'));

  it('should return an empty array for alerts', inject(function(AlertsSvc){
      expect(Array.isArray(AlertsSvc.alerts)).toBe(true);
      expect(AlertsSvc.alerts.length).toBe(0);
  }));

  it('.addAlert should add an alert to the alerts array', inject(function(AlertsSvc){
    AlertsSvc.addAlert(alert);
    expect(AlertsSvc.alerts.length).toBe(1);
    expect(AlertsSvc.alerts[0]).toBe(alert);
  }));

  it('.dismissAlert should remove the alert from the alerts array', inject(function(AlertsSvc){
    AlertsSvc.addAlert(alert);
    AlertsSvc.dismissAlert(alert);
    expect(AlertsSvc.alerts.length).toBe(0);
  }));
});
