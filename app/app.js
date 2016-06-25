(function () {
  'use strict';

  angular.module('arbiterApp', [
    'ngRoute',
    'ngMessages',
    'ngMask'
  ])   
  .run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', ()=> {
          $timeout(() => {
            componentHandler.upgradeAllRegistered();
          })
        })
      });;

  var rootElement = document.getElementsByTagName('html')[0];

  angular.element(rootElement).ready(function bootstrapApp() {
    angular.bootstrap(rootElement, ['arbiterApp']);
  });




})();