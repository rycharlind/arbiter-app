(function () {
  'use strict';

	function ContractsController($scope, $http, $location, $filter, $routeParams, arbiterService, $firebaseArray) {

		var ref = new Firebase("https://arbiter.firebaseio.com/contracts");
		$scope.contracts = $firebaseArray(ref);

		web3.eth.defaultAccount = web3.eth.accounts[0];

		$scope.tokenName;
		$scope.initialSupply;
		$scope.decimalUnits;
		$scope.tokenSymbol;

		$scope.policyNumber;
		$scope.faceAmount;
		$scope.premium;
		$scope.effectiveDate;
		$scope.expirationDate;
	
		$scope.create = function() {
			MyToken.new(
				$scope.faceAmount, 
				$scope.policyNumber, 
				$scope.effectiveDate,
				$scope.expirationDate,
				$scope.premium,
				{
					from: web3.eth.accounts[0]
				}
			).then(function(instance) {
				console.log(instance);

				var contract = {
					"address":instance.address,
					"policyNumber":$scope.policyNumber,
					"premium":$scope.premium,
					"faceAmount":$scope.faceAmount
				}

				$scope.contracts.$add(contract);
				$scope.contracts.$save();

				$scope = $scope.$new(true);
				$scope.$apply();
				
			});
		}	
	}
  
 	angular.module('arbiterApp').controller('ContractsController', ContractsController);


})();
