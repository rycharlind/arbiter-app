

(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
		
    $scope.policyNumber;
    $scope.faceAmount;
    $scope.rententionAmount;

    var sender = "0x76c233baa22f407daf98cfc878dbee53d55fbc81";

    var r1 = "0x2e983649c43d1c3be0ca7d595fdc0051a97a2a04";
    var r2 = "0xe61a183403b36ec3e18e65b10d6de02db10aad32";
    var r3 = "0xcef863238e76f0dafa60ddeab5d09c3a1a5cdbf1";

     var meta = MetaCoin.deployed();

     $scope.send = function() {

      console.log("send");

      meta.sendCoin(r1, r2, r3, $scope.faceAmount, $scope.retentionAmount, {from: sender}).then(function() {

       console.log("Transaction complete!");

       $location.path('/accounts');
       $scope.$apply();


     }).catch(function(e) {
       console.log(e);
     });

     }

	}
  
 	angular.module('arbiterApp').controller('SendController', SendController);


})();
