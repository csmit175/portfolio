'use strict';

angular

    .module('app.instagram')

    .controller('InstagramCtrl', ['$rootScope', '$routeParams', '$scope', function ($rootScope, $routeParams, $scope) {

        /* --- CONSTANTS --- */
        
        // Instagram client ID
        $scope.clientID = '';
        
        // Instafeed.js object
        $scope.instafeed;

        /* --- MODELS --- */
        
        // Tag
        $scope.tag;
        
        /* --- FUNCTIONS --- */
        $scope.loadFeed = function () {
            // Instafeed.js configuration
            $scope.instafeed = new Instafeed({
                get: 'tagged',
                tagName: $scope.tag,
                clientId: $scope.clientID,
                resolution: 'low_resolution',
                sortBy: 'most-liked',
                template: '<div class="instagram-post" style="background-image: url(\'{{image}}\');"><span class="instagram-post-caption"><b class="orange-text">@{{model.user.username}}</b>:&nbsp;{{caption}}</span><a class="instagram-link" href="{{link}}" target="_blank">OPEN</a></div>'
            });

            $scope.instafeed.run();
        };

        $scope.loadMore = function () {
            $scope.instafeed.next();
        };

        // Load feed
        $scope.loadFeed();

    }]);