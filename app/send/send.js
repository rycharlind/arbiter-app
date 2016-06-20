(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
		
    $scope.policyNumber;
    $scope.faceAmount;
    $scope.rententionAmount;
 

    var sender = "0x62b04a1bbdf2175c862bad9930b180f344ab8787";

    var r1 = "0x359816d77112e6bc17732228bbd26a62ba65e67b";
    var r2 = "0x26796f1c19c84802441282aa31f27a2a56afa384";
    var r3 = "0xa242cfb9d973cd827d24884cd4b4177408dda32d";

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
