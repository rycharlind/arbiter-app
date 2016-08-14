(function () {
  'use strict';

	function SendController($scope, $http, $filter, $location, $routeParams, arbiterService, $firebaseArray) {

		var ref = new Firebase("https://arbiter.firebaseio.com/tranfers");
		var transfers = $firebaseArray(ref);

		web3.eth.defaultAccount = web3.eth.accounts[0];

		// Accounts
		$scope.accounts = web3.eth.accounts;

		$scope.address;
		$scope.amount;

		var token = MyToken.at($routeParams.address);

		// Token Name
		$scope.tokenName;
		token.name().then(function(value) {
			$scope.tokenName = value.valueOf();
			$scope.$apply();
		});

		// My Token Balance
		$scope.balance;
		token.balanceOf(web3.eth.defaultAccount).then(function(value) {
          $scope.balance = value.valueOf();
          $scope.$apply();
        });

		$scope.send = function() {
			token.transfer($scope.address, $scope.amount, {from: web3.eth.defaultAccount}).then(function(transaction) {
				console.log(transaction);
			});
		}

		var transferEvent = token.Transfer({fromBlock: "latest"});
		transferEvent.watch(function(error, result) {
		  // This will catch all Transfer events, regardless of how they originated.
		  if (error == null) {

		    var trans = {
		    	"from": result.args.from,
		    	"to":result.args.to,
		    	"value":result.args.value.valueOf()
		    }

		    transfers.$add(trans);
		    transfers.$save();
		    
		  } else {
		  	console.log(error);
		  }
		});

	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
