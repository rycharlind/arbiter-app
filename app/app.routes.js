(function () {
  'use strict';

  function configureRoutes($routeProvider) {
    $routeProvider.when('/accounts', {
      templateUrl: 'accounts.html',
      controller: 'AccountsController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/sign-in', {
      templateUrl: 'sign-in.html',
      controller: 'SignInController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/transactions', {
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'RegisterController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/send', {
      templateUrl: 'send.html',
      controller: 'SendController',
      controllerAs: 'vm',
      reloadOnSearch: false
    })
    .when('/contract', {
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
    .when('/account/:account', {
      templateUrl: 'account.html',
      controller: 'AccountController',
      controllerAs: 'vm',
      reloadOnSearch: false
    });
    $routeProvider.otherwise({redirectTo: '/contracts'});
  }

  angular.module('arbiterApp').config(configureRoutes);

})();
