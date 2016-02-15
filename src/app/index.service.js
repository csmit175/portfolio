(function() {
  'use strict';

  angular
    .module('app.service', [])
    .service('dataService', function($http) {
        this.getData = function() {
          return $http({
            method: "GET",
            url: "https://bigdev.kwickie.com/api/kwickies/featured"
          }).success(function(data){
              return data;
          }).error(function(){
              alert("error");
              return null ;
          });
        }
 });
})();
