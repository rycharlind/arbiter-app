(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
		
    $scope.policyNumber;
    $scope.faceAmount;
    $scope.rententionAmount;
 
	var 	sender = web3.eth.accounts[0];

    var r1 = web3.eth.accounts[1];
    var r2 = web3.eth.accounts[2];
    var r3 = web3.eth.accounts[3];


     var meta = MetaCoin.deployed();
	


     $scope.send = function() {

      	console.log("send");
 		meta.sendCoin(r1, r2, r3, $scope.policyNumber, $scope.faceAmount, $scope.retentionAmount, {from: sender}).then(function(tranId) {

			meta.policy().then(function (policy) {
			//	console.log(policy);

				console.log("Transaction complete!"); 
				

				$location.path('/accounts').search({transactionId: tranId});
				$scope.$apply();
			});

			


		 }).catch(function(e) {
		   console.log(e);
		 });

     }

	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
