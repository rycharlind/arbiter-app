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
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }

  angular.module('arbiterApp').config(configureRoutes);

})();
