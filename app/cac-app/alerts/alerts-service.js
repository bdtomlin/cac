(function() {
  "use strict";

  angular.module('cacApp.alerts').factory('AlertsSvc', ['$timeout', function($timeout){
    var self = {
      alerts: [],
      addAlert: function(alert){
        alert.ident = new Date().getTime.toString();
        alert.timeout = $timeout(function(){
          self.dismissAlert(alert);
        }, 5000);

        self.alerts.push(alert);
      },
      dismissAlert: function(alert){
        $timeout.cancel(alert.timeout);
        var index = self.alerts.indexOf(alert);
        if(index > -1){
          self.alerts.splice(index, 1);
        }
      }
    };

    return self;
  }]);
}());
