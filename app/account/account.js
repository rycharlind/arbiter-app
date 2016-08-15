(function () {
  'use strict';

  function AccountController($scope, $filter, $location, $routeParams, $firebaseArray) {

    var refContracts = new Firebase("https://arbiter.firebaseio.com/contracts");
    $scope.contracts = $firebaseArray(refContracts);

    $scope.address = $routeParams.address;

    // Get the balace for each contract for this address
    $scope.contracts.$loaded().then(function() {
      angular.forEach($scope.contracts, function(contract) {
        var token = MyToken.at(contract.address);
        token.balanceOf($routeParams.address).then(function(value) {
          contract.balance = value.valueOf();
          $scope.contracts[contract] = contract;
          $scope.$apply();
        });
      });
    });

    // Get transfer events from Firebase
    var refTransfers = new Firebase("https://arbiter.firebaseio.com/transfers");
    $scope.transfers = $firebaseArray(refTransfers);


  }

  angular.module('arbiterApp').controller('AccountController', AccountController);

})();
