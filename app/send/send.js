(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
		
    $scope.policyNumber;
    $scope.faceAmount;
    $scope.rententionAmount;

    var sender = "0x56c33953c27f33fc37c5daaef95e603a28ad27e5";

    var r1 = "0xfbb2941483f1bff2f1da46c31cd3e89331b9e4de";
    var r2 = "0x69961a8034f694fe870820c3198044c240d0e33d";
    var r3 = "0x9ffbffb765a6a126a75ec238f746b95e381cf04d";

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
