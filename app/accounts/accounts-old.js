(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;
    
    $scope.accounts = {};

    $scope.transId = $routeParams.transactionId;

    web3.eth.getAccounts(function(err, accs) {
      
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      
      var names = [
        "Life Insurance Company",
        "Reinsurance Company A",
        "Reinsurance Company B",
        "Reinsurance Company C"
      ];

      $scope.accountList = [];
      
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      var meta = MetaCoin.deployed();     
      getAccountBalanceAlt(meta, names, accs);

      meta.policy().then(function(policy){
        $scope.policy = policy;
        $scope.$apply();
      });
      
    });

    function getAccountBalanceAlt( meta, names, accounts) {
      meta.exchangeAmt(accounts[0]).then(function(value) {
          console.log(value);

          $scope.accountList.push({
            name: names[0],
            address: accounts[0],
            balance: value.valueOf()
          });

          $scope.$apply();
          accounts.shift();
          names.shift();
          if (accounts.length > 0) {
            getAccountBalanceAlt(meta, names, accounts);
          }
        }).catch(function(e) {
          console.log(e);
      });
    }    


  }


  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();
