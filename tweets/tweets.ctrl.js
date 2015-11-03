'use strict';

angular

    .module('app.tweets')

    .controller('TweetsCtrl', ['$http', '$scope', '$rootScope', '$routeParams', '$location', function ($http, $scope, $rootScope, $routeParams, $location) {

        var data = "grant_type=client_credentials";

        var config = {
            headers: {
                'Authorization': 'Basic UHVNZ2hzbmo4a1ZtQkRqVFRsM09teDZESTpad09nODQ1SjM0MFNycElja1p4SVlvcjk1a1hnN0o2OVA0SHBpZlhJTDVQUmFyZVlBZQ==',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        
        // Get bearer token
        $http.post('https://api.twitter.com/oauth2/token', data, config).success(function (response) {
            var token = response.access_token;

            $http.get('https://api.twitter.com/1.1/search/tweets.json?q=' + encodeURI($scope.tag), { headers: { Authorization: 'Bearer ' + token } }).success(function (response) {
                $scope.tweets = response.statuses;
            });
        });

    }]);