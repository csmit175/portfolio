(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, dataService) {
    $scope.videos = "null";
    dataService.getData().then(function(response) {
        $scope.videos = response.data;
    });
  }

})();
