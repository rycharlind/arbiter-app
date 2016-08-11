

(function () {
  'use strict';

function HomeController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {

	var meta = MetaCoin.deployed(); 
	/*
	meta.LogEvent().watch(function(error, result) {
		console.log(result);
	});
	*/
	meta.LogEvent().stopWatching();
	
	$scope.transactions = [];
	for (var i=0; i < web3.eth.blockNumber; i++) {
  		web3.eth.getTransactionFromBlock(i, function(error, result) {
  			if (result) {
	  			var transaction = {
					id: result.hash,
					hash: result.hash,
					from: result.from,
					to: result.to,
					gas: result.gas,
					input: result.input,
					value: result.value
				}
				console.log(transaction);
				$scope.$apply(
					$scope.transactions.push(transaction)
				)
	  		}
  		});
	}
	


	
	
	/*
	var filter = web3.eth.filter({fromBlock:0, toBlock: 200, address: "bdbff4c780cc0846af682e8a347824cacd59ccbc"});
	//var filter = web3.eth.filter({fromBlock:0, toBlock: 'latest'});
	filter.get(function(error, result) {
		console.log(result);
	});
	*/

	

}
  
angular.module('arbiterApp').controller('HomeController', HomeController);


})();