(function () {
  'use strict';


  angular.module('arbiterApp', [
    'ngRoute',
    'ngMessages',
    'ngMaterial'
  ]);

  var rootElement = document.getElementsByTagName('html')[0];

  angular.element(rootElement).ready(function bootstrapApp() {
    angular.bootstrap(rootElement, ['arbiterApp']);
  });


})();