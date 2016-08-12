(function () {
  'use strict';

  function ContractController($scope, $http, $filter, $location, $routeParams, arbiterService) {

    $scope.contract = $routeParams.contract;       

  }


  angular.module('arbiterApp').controller('ContractController', ContractController);

})();
