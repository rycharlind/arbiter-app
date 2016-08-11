(function () {
  'use strict';

	function ContractsController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {

		web3.eth.defaultAccount = web3.eth.accounts[0];

		$scope.tokenName;
		$scope.initialSupply;
		$scope.decimalUnits;
		$scope.tokenSymbol;
	
		$scope.create = function() {

			console.log($scope.tokenName);
			console.log($scope.initialSupply);
			console.log($scope.decimalUnits);
			console.log($scope.tokenSymbol);

			MyToken.new($scope.initialSupply, $scope.tokenName, $scope.decimalUnits, $scope.tokenSymbol).then(function(instance) {
				console.log(instance);
			});
		}	
	}
  
 	angular.module('arbiterApp').controller('ContractsController', ContractsController);


})();
