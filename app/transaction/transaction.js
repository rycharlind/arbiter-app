(function () {
  'use strict';

  function TransactionController($scope, $filter, $location, $routeParams, $firebaseArray) {

    $scope.hash = $routeParams.hash;

    var transaction = web3.eth.getTransaction($routeParams.hash);

    $scope.blockHash = transaction.blockHash;
    $scope.blockNumber = transaction.blockNumber;
    $scope.from = transaction.from;
    $scope.to = transaction.to;
    $scope.value = transaction.value.valueOf();
    $scope.nonce = transaction.nonce;
    $scope.gas = transaction.gas;
    $scope.gasPrice = transaction.gasPrice.valueOf();
    $scope.input = transaction.input;

  }

  angular.module('arbiterApp').controller('TransactionController', TransactionController);

})();
