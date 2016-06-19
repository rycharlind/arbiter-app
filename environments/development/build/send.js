

(function () {
  'use strict';

function SendController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {
		$scope.sendCoin = function() {

           var meta = MetaCoin.deployed();


           meta.sendCoin($scope.receiver1, $scope.receiver2, $scope.receiver3, $scope.faceAmount, $scope.retention, {from: $scope.sender}).then(function() {
     
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
