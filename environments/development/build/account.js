

(function () {
  'use strict';

  function AccountController($scope, $http, $filter, $location, $window, $timeout, $routeParams) {

    var vm = this;

    //var myToken = MyToken.at($routeParams.account);
    var token = MyToken.at("0x46e2eb4d6fb70621c90a02ae4bc535f9bd38a61e");

    $scope.account = $routeParams.account;
    $scope.tokenName; 
    $scope.balance; 
    
    token.balanceOf($routeParams.account).then(function(value) {
      $scope.balance = value.valueOf();
      $scope.$apply();
    });

    token.name().then(function(value) {
      $scope.tokenName = value;
      $scope.$apply();
    });


  }

  angular.module('arbiterApp').controller('AccountController', AccountController);

})();
