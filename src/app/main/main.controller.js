(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, dataService) {
    $scope.data = "";
    dataService.getData().then(function(response) {
        $scope.data = response;
    });
  }

})();
