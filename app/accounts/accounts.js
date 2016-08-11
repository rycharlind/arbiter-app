(function () {
  'use strict';

  function AccountsController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
    
    $scope.accounts = web3.eth.accounts;

  }


  angular.module('arbiterApp').controller('AccountsController', AccountsController);

})();
