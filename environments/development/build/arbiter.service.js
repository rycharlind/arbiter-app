

(function () {
  'use strict';

  function ArbiterService($rootScope, $http, $q, $log, $filter) {
    
    var EVENTS = {
    };


    var contract;
    var policy;
    var faceAmount;
    var retentionAmount;

    var companies = [
      "Life Insurance Company",
      "Reinsurance Company A",
      "Reinsurance Company B",
      "Reinsurance Company C"
    ];

    return {
      getPolicy: getPolicy, 
      setPolicy: setPolicy,
      getFaceAmount: getFaceAmount, 
      setFaceAmount: setFaceAmount,
      getRetentionAmount: getRetentionAmount, 
      setRetentionAmount: setRetentionAmount,
      getCompanies: getCompanies,
      EVENTS: EVENTS,
      subscribe: function (scope, event, callback) {
        scope.$on(event, callback);
      }
    };

    function getContract() {
      return this.contract;
    }

    function setContract(c) {
      this.contract = c;
    }

    function getPolicy() {
      return this.policy;
    }

    function setPolicy(p) {
      this.policy = p;
    }

    function getFaceAmount() {
      return this.faceAmount;
    }

    function setFaceAmount(fa) {
      this.faceAmount = fa;
    }

    function getRetentionAmount() {
      return this.retentionAmount;
    }

    function setRetentionAmount(ra) {
      this.retentionAmount = ra;
    }

    function getCompanies() {
      return this.companies;
    }

    function broadcastAppEvent(event, application) {
      $rootScope.$broadcast(event, application);
    }

    function subscribe(scope, event, callback) {
      scope.$on(event, callback);
    }
  
  }

  angular.module('arbiterApp').factory('arbiterService', ArbiterService);

})();