

(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams, web3) {

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

    
    web3.getAccounts(function(accs) {
    	//$scope.accounts = accs;

    	for (var i = 0; i < accs.length; i++) {
        console.log(accs[i]);
      }

      //$scope.$apply();
    });
    

  }

  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();