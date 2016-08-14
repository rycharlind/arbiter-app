(function () {
  'use strict';

	function ContractsController($scope, $http, $location, $routeParams, arbiterService, $firebaseObject, $firebaseArray) {

		var ref = new Firebase("https://arbiter.firebaseio.com/contracts");
		$scope.contracts = $firebaseArray(ref);

		web3.eth.defaultAccount = web3.eth.accounts[0];

		$scope.tokenName;
		$scope.initialSupply;
		$scope.decimalUnits;
		$scope.tokenSymbol;
	
		$scope.create = function() {
			MyToken.new($scope.initialSupply, $scope.tokenName, $scope.decimalUnits, $scope.tokenSymbol).then(function(instance) {
				console.log(instance);

				var contract = {
					"address":instance.address,
					"tokenName":$scope.tokenName,
					"decimalUnits":$scope.decimalUnits,
					"tokenSymbol":$scope.tokenSymbol,
					"initialSupply":$scope.initialSupply
				}

				$scope.contracts.$add(contract);
				$scope.contracts.$save();
				
			});
		}	
	}
  
 	angular.module('arbiterApp').controller('ContractsController', ContractsController);


})();
