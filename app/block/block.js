(function () {
  'use strict';

  function BlockController($scope, $filter, $location, $routeParams, $firebaseArray) {

    $scope.hash = $routeParams.hash;

    var block = web3.eth.getBlock($routeParams.hash);

    console.log(block);

    $scope.number = block.number;
    $scope.difficulty = block.difficulty.valueOf();
    $scope.gasLimit = block.gasLimit;
    $scope.miner = block.miner;
    $scope.parentHash = block.parentHash;
    $scope.receiptRoot = block.receiptRoot;
    $scope.stateRoot = block.stateRoot;
    $scope.size = block.size;
    $scope.transactionsRoot = block.transactionsRoot;
    $scope.transactions = block.transactions;
    $scope.uncles = block.uncles;

  }

  angular.module('arbiterApp').controller('BlockController', BlockController);

})();
