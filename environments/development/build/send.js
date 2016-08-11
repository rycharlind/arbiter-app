

(function () {
  'use strict';

	function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {

		web3.eth.defaultAccount = web3.eth.accounts[0];

		// Accounts
		$scope.accounts = web3.eth.accounts;

		$scope.address;
		$scope.amount;

		$scope.send = function() {
			MyToken.at("0xc1f0b5b90975c55bdd614ad999a54a001006ea61").transfer(web3.eth.accounts[4], 10, {from: web3.eth.defaultAccount}).then(function(transaction) {
				console.log(transaction);
			});
		}

		/*
		$scope.send = function() {
			arbiterService.setPolicy($scope.policyNumber);
			arbiterService.setFaceAmount($scope.faceAmount);
			arbiterService.setRetentionAmount($scope.retentionAmount);
			$location.path('/contract');
			
		  	//MetaCoin.deployed().sendCoin.sendTransaction(web3.eth.accounts[1], web3.eth.accounts[2], web3.eth.accounts[3], $scope.policyNumber, 
		  	//parseInt($scope.faceAmount), parseInt($scope.rententionAmount), {from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: parseInt($scope.faceAmount)});
		}
		*/

	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
