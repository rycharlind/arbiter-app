(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams, arbiterService) {
		
    $scope.policyNumber;
    $scope.faceAmount;
    $scope.rententionAmount;
 
	var sender = web3.eth.accounts[0];

    var r1 = web3.eth.accounts[1];
    var r2 = web3.eth.accounts[2];
    var r3 = web3.eth.accounts[3];

 
	var meta = MetaCoin.deployed();

	$scope.send = function() {
		arbiterService.setPolicy($scope.policyNumber);
		arbiterService.setFaceAmount($scope.faceAmount);
		arbiterService.setRetentionAmount($scope.retentionAmount);
		$location.path('/contract');
	}

	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
