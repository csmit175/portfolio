'use strict';

angular
        .module('app')
         
        .filter('elapsedTime', function () {
            return function (input) {
                var pd = new Date(input);
                var cd = new Date();
                var miliseconds = cd - pd;
                var seconds = Math.floor(miliseconds / 1000);
                var minutes = Math.floor(seconds / 60);
                var hours = Math.floor(minutes / 60);
                var days = Math.floor(hours / 24);
                // var months = Math.floor(days/30);
                var months = Math.floor(days / 30.5); // For more accuracy upto 365 days
                var years = Math.floor(months / 12);


                // year
                if ((seconds > 59) && (minutes > 59) && (hours > 23) && (days > 30) && (months > 11)) {
                    return years + "y";
                }

                // months
                // else if( (seconds > 59) && (minutes > 59) && (hours > 23) && (days > 30) ) { return months + "m"; }

                // days
                else if ((seconds > 59) && (minutes > 59) && (hours > 23)) {
                    //var daysS = days == 1 ? '' : 's';
                    //return days + " day" + daysS;
                    return days + "d";
                }

                // hours
                else if ((seconds > 59) && (minutes > 59)) {
                    return hours + "h";
                }

                // minutes
                else if ((seconds > 59)) {
                    return minutes + "m";
                }

                // seconds
                else {
                    return seconds + "s";
                }

            };
        })
