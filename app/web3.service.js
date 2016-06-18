(function () {
  'use strict';

  function Web3Service($rootScope, $http, $q, $log, $filter) {
    
    var EVENTS = {
    };

    return {
      getAccounts: getAccounts, 
      EVENTS: EVENTS,
      subscribe: function (scope, event, callback) {
        scope.$on(event, callback);
      }
    };

    function getAccounts(callBack) {
      web3.eth.getAccounts(function(err, accs) {
        if (err != null) {
          alert("There was an error fetching your accounts.");
          return;
        }
        if (accs.length == 0) {
          alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
          return;
        }
        callBack(accs);
      });
    }

    function broadcastAppEvent(event, application) {
      $rootScope.$broadcast(event, application);
    }

    function subscribe(scope, event, callback) {
      scope.$on(event, callback);
    }
  
  }

  angular.module('arbiterApp').factory('web3', Web3Service);

})();