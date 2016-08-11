

(function () {
  'use strict';

  function ContractController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {

    var vm = this;
    
    $scope.isLoading = false;
    $scope.accounts = {};

    $scope.policyNumber = arbiterService.getPolicy();
    $scope.faceAmount = arbiterService.getFaceAmount();
    $scope.retentionAmount = arbiterService.getRetentionAmount();


    $scope.send = function() {

      $scope.isLoading = true;
      setTimeout(function(){
        
        MetaCoin.deployed().sendCoin.sendTransaction(web3.eth.accounts[1], web3.eth.accounts[2], web3.eth.accounts[3], $scope.policyNumber, 
        parseInt($scope.faceAmount), parseInt($scope.retentionAmount), 
        {from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: parseInt($scope.faceAmount)}).then(function(tranId, status) {
            $scope.isLoading = false;
            $location.path('/accounts').search({transactionId: tranId});
            $scope.$apply();
        });

      }, 5000);
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

          if (accounts.length > 1) {
            getAccountBalance(meta, names, accounts, percents);
          }

        }).catch(function(e) {
          console.log(e);
      });
    
    }    


  }


  angular.module('arbiterApp').controller('ContractController', ContractController);

})();
