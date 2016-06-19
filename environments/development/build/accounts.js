

(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;
    
    $scope.accounts = {};

    var params = {
      username: "rycharlind"
    }

    /*
    $http.get('http://192.168.2.10:3000/account', {params: params}).then(function success(resp) {
      console.log(resp);
    }, function error(err) {
      console.log(err);
    });
    */


    web3.eth.getAccounts(function(err, accs) {
      
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      
      for (var i = 0; i < accs.length; i++) {
      
        var acc = accs[i];
        var balance = web3.eth.getBalance(acc);

        console.log(acc + " - " + balance.toNumber());
        $scope.accounts[acc] = balance.toNumber();
      
      }

      $scope.$apply();

      
    });
    

  }

  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();