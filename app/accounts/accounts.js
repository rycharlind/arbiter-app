(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
    
    $scope.accounts = web3.eth.accounts;

    $scope.create = function() {
    	
    }

  }


  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();
