(function () {
  'use strict';

  function ContractController($scope, $http, $filter, $location, $routeParams, arbiterService) {

    $scope.address = $routeParams.address; 

    var token = MyToken.at($routeParams.address);

    // Policy Number
    $scope.policyNumber;
    token.policyNumber().then(function(value) {
      $scope.policyNumber = value.valueOf();
      $scope.$apply();
    });

    // Face Amount
    $scope.faceAmount;
    token.faceAmount().then(function(value) {
      $scope.faceAmount = value.valueOf();
      $scope.$apply();
    });

    // Premium
    $scope.premium;
    token.premium().then(function(value) {
      $scope.premium = value.valueOf();
      $scope.$apply();
    });

    // Effective Date
    $scope.effectiveDate;
    token.effectiveDate().then(function(value) {
      $scope.effectiveDate = value.valueOf();
      $scope.$apply();
    });

    // Expiration Date
    $scope.expirationDate;
    token.expirationDate().then(function(value) {
      $scope.expirationDate = value.valueOf();
      $scope.$apply();
    });



    // Balances
    $scope.balances = {};
    angular.forEach(web3.eth.accounts, function(account) {
      token.balanceOf(account).then(function(value) {
        $scope.balances[account] = value.valueOf();
        $scope.$apply();
      });
    });

  }

  angular.module('arbiterApp').controller('ContractController', ContractController);

})();
