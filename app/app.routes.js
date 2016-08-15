(function () {
  'use strict';

  function configureRoutes($routeProvider) {
    $routeProvider.when('/sign-in', {
      templateUrl: 'sign-in.html',
      controller: 'SignInController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'RegisterController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/send/:address', {
      templateUrl: 'send.html',
      controller: 'SendController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/contract/:address', {
      templateUrl: 'contract.html',
      controller: 'ContractController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/contracts', {
      templateUrl: 'contracts.html',
      controller: 'ContractsController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/account/:address', {
      templateUrl: 'account.html',
      controller: 'AccountController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/accounts', {
      templateUrl: 'accounts.html',
      controller: 'AccountsController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/transaction/:hash', {
      templateUrl: 'transaction.html',
      controller: 'TransactionController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/block/:hash', {
      templateUrl: 'block.html',
      controller: 'BlockController',
      controllerAs: 'vm',
      reloadOnSearch: false
    });
    $routeProvider.otherwise({redirectTo: '/contracts'});
  }

  angular.module('arbiterApp').config(configureRoutes);

})();
