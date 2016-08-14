(function () {
  'use strict';

  function ContractController($scope, $http, $filter, $location, $routeParams, arbiterService) {

    $scope.address = $routeParams.address; 
    $scope.tokenName;
    $scope.totalSupply;

    var token = MyToken.at($routeParams.address);

    // Name
    token.name().then(function(value) {
      $scope.tokenName = value.valueOf();
      $scope.$apply();
    });

    // Total Supply
    token.totalSupply().then(function(value) {
      $scope.totalSupply = value.valueOf();
      $scope.$apply();
    });


  }


  angular.module('arbiterApp').controller('ContractController', ContractController);

})();
