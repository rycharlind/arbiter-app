

(function () {
  'use strict';

  function ContractController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {

    var vm = this;
    
    $scope.accounts = {};

    $scope.policyNumber = arbiterService.getPolicy();
    $scope.faceAmount = arbiterService.getFaceAmount();
    $scope.retentionAmount = arbiterService.getRetentionAmount();

    var sender = web3.eth.accounts[0];
    var r1 = web3.eth.accounts[1];
    var r2 = web3.eth.accounts[2];
    var r3 = web3.eth.accounts[3];

 
    var meta = MetaCoin.deployed();


    $scope.send = function() {

      meta.sendCoin(r1, r2, r3, $scope.policy, $scope.faceAmount, $scope.retentionAmount, {from: sender}).then(function(tranId, status) {

        console.log("Transaction complete!"); 
        console.log(tranId);
        console.log(status);

        meta.policy().then(function (policy) {

          $location.path('/accounts').search({transactionId: tranId});
          $scope.$apply();
        
        });

      
       }).catch(function(e) {
         console.log(e);
       });

    }

    web3.eth.getAccounts(function(err, accs) {
      
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      
      var names = [
        "Life Insurnace Company",
        "Reinsurance Company A",
        "Reinsurance Company B",
        "Reinsurance Company C"
      ];

      var percents = [
        "50%",
        "35%",
        "15%"
      ];

      $scope.accountList = [];
      
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      var meta = MetaCoin.deployed();      
      getAccountBalance(meta, names, accs, percents);
      
    });

    function getAccountBalance(meta, names, accounts, percents) {
      meta.exchangeAmt(accounts[1]).then(function(value) {
          console.log(value);

          $scope.accountList.push({
            name: names[1],
            address: accounts[1],
            percent: percents[0]
          });

          $scope.$apply();
          
          accounts.shift();
          names.shift();
          percents.shift();

          if (accounts.length > 0){
            getAccountBalance(meta, names, accounts, percents);
          }
          
        }).catch(function(e) {
          console.log(e);
      });
    
    }    


  }


  angular.module('arbiterApp').controller('ContractController', ContractController);

})();
