angular

        .module('app')

        .controller('feedbackCtrl', ['$timeout', '$rootScope', '$scope', '$modal', '$modalInstance', '$http', 'ENV', function ($timeout, $rootScope, $scope, $modal, $modalInstance, $http, ENV) {


                $scope.close = function () {
                    $modalInstance.dismiss();
                };

                $scope.sendFeedback = function () {
                    $("#feedback-msg").hide();

                    var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    var email = $("#feedback-email"),
                            name = $("#feedback-name"),
                            feedbackTxt = $("#feedback-text"), error = false;

                    email.next("small.error").css("display","none");
                    if (!emailFilter.test(email.val()))
                    {
                        error = true;
                        email.next("small.error").css("display","block");
                    }
                    name.next("small.error").css("display","none");
                    if($.trim(name.val())===""){
                        error = true;
                        name.next("small.error").css("display","block");
                    }
                    feedbackTxt.next("small.error").css("display","none");
                    if($.trim(feedbackTxt.val())===""){
                        error = true;
                        feedbackTxt.next("small.error").css("display","block");
                    }
                    if (!error)
                    {
                        $.ajax({
                            type: "POST",
                            url: "https://mandrillapp.com/api/1.0/messages/send.json",
                            crossDomain: true,
                            data: {
                                "key": "Q0HAUKHbBJgqft5pkdWJDg",
                                "message": {
                                    "from_name": "Sportkix",
                                    "from_email": "no-reply@sportkix.com",
                                    "to": [{
                                            "email": ENV.FEEDBACK_EMAIL,
                                            "name": "Feedback Sportkix",
                                            "type": "to"
                                        }, {
                                            //"email": "RECIPIENT_NO_2@EMAIL.HER",
                                            //"name": "ANOTHER RECIPIENT NAME (OPTIONAL)",
                                            //"type": "to"
                                        }],
                                    "auto_text": "true",
                                    "subject": "Feedback - Sportkix",
                                    "html": "<strong>Email - </strong>" + email.val() +
                                            "<br/><br/>" +
                                            "<strong>Name - </strong>" + name.val() +
                                            "<br/><br/>" +
                                            "<strong>Feedback - </strong><br/><br/>" + feedbackTxt.val()
                                }
                            },
                            error: function (a, b, c) {

                            },
                            success: function (data) {
                                $("#feedback-msg").show();
                                //$modalInstance.dismiss();
                            }
                        })
                        .done(function (response) {document.getElementById("feedback").reset()});
                    }
                };
            }]);


