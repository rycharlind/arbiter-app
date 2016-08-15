(function () {
  'use strict';

	function SendController($scope, $http, $filter, $location, $routeParams, arbiterService, $firebaseArray) {

		web3.eth.defaultAccount = web3.eth.accounts[0];

		// Accounts
		$scope.accounts = web3.eth.accounts;

		$scope.address;
		$scope.amount;

		var token = MyToken.at($routeParams.address);

		// Token Name
		$scope.policyNumber;
		token.policyNumber().then(function(value) {
			$scope.policyNumber = value.valueOf();
			$scope.$apply();
		});

		// My Token Balance
		$scope.balance;
		token.balanceOf(web3.eth.defaultAccount).then(function(value) {
          $scope.balance = value.valueOf();
          $scope.$apply();
        });


        var ref = new Firebase("https://arbiter.firebaseio.com/transfers");
		var transfers = $firebaseArray(ref);
		var transferEvent = token.Transfer({fromBlock: "latest", address: web3.eth.defaultAccount});

		$scope.send = function() {
			token.transfer($scope.address, $scope.amount, {from: web3.eth.defaultAccount}).then(function(transaction) {
				console.log(transaction);

				transferEvent.watch(function(error, result) {

					transferEvent.stopWatching(); // Stop watching before the miner events get called (only need to capture it once)
	 
					if (error == null) {

						console.log(result);

						var trans = {
							"transaction":transaction,
							"from": result.args.from,
							"to":result.args.to,
							"value":result.args.value.valueOf(),
							"policyNumber":result.args.policyNumber
						}

						transfers.$add(trans);
						transfers.$save();

					} else {
						console.log(error);
					}
				
				});

			});
		}


	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
