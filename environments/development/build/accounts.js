

(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;
    
    $scope.accounts;

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

      //console.log(accs);

      //var acc = accs[0];

      //var bal = web3.eth.getBalance(acc);
      //console.log(bal.toNumber());

      console.log("hello");
      
      for (var i = 0; i < accs.length; i++) {
        var acc = accs[i];
        console.log(acc);
        web3.eth.getBalance(acc, function(err, balance) {
          console.log(balance.toNumber());
        }); 
      }
      


    });
    

  }

  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();