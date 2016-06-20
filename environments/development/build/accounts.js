

(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;
    
    $scope.accounts = {};

    web3.eth.getAccounts(function(err, accs) {
      
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      var meta = MetaCoin.deployed();
      getAccountBalance(meta, accs);
      
    });

    function getAccountBalance(meta, accounts) {
      meta.getBalance.call(accounts[0]).then(function(value) {
          console.log(value);
          $scope.accounts[accounts[0]] = value.valueOf();
          $scope.$apply();
          accounts.shift();
          if (accounts.length > 0){
            getAccountBalance(meta, accounts);
          }
        }).catch(function(e) {
          console.log(e);
      });
    }    


  }


  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();