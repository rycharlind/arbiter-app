

(function () {
  'use strict';

function RegisterController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

	$scope.username;
	$scope.password;
	$scope.verifyPassword;

  $scope.register = function() {
  	
    var accounts = new Accounts({minPassphraseLength: 6});
  	var account = accounts.new($scope.password);

  	var user = {
  		username: $scope.username,
  		password: $scope.password,
  		eth_account: account
  	};
    	
    $http.post('http://192.168.2.10:3000/register', user).then(function success(resp) {
      console.log(resp);
    }, function error(err) {
      console.log(err);
    });
  
  }

  
  }

  angular.module('arbiterApp').controller('RegisterController', RegisterController);


})();