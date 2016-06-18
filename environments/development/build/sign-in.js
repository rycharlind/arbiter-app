

(function () {
  'use strict';

  function SignInController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;

    $scope.username;
    $scope.password;

    $scope.signIn = function() {

	   	var params = {
	      username: $scope.username,
	      password: $scope.password
	    }

	    $http.get('http://192.168.2.10:3000/signin', {params: params}).then(function success(resp) {
	      console.log(resp);
	    }, function error(err) {
	      console.log(err);
	    });
    
    }

  

  }

  angular.module('arbiterApp').controller('SignInController', SignInController);


})();