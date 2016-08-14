(function () {
  'use strict';

  function AccountController($scope, $filter, $location, $routeParams, $firebaseArray) {

    var ref = new Firebase("https://arbiter.firebaseio.com/contracts");
    $scope.contracts = $firebaseArray(ref);

    $scope.address = $routeParams.address;

    // Get the balace for each contract for this address
    $scope.contracts.$loaded().then(function() {
      angular.forEach($scope.contracts, function(contract) {
        console.log(contract);
        var token = MyToken.at(contract.address);
        token.balanceOf($routeParams.address).then(function(value) {
          contract.balance = value.valueOf();
          $scope.contracts[contract] = contract;
          $scope.$apply();
        });
      });
    });

  }

  angular.module('arbiterApp').controller('AccountController', AccountController);

})();
