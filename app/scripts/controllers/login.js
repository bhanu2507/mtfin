/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .controller('LoginCtrl', function ($scope, fAuth, $location) {
        $scope.passwordLogin = function(email, pass) {
            $scope.authObj = fAuth;
            $scope.authObj.$signInWithEmailAndPassword("bhanureddy@gmail.com", "password").then(function (firebaseUser) {
                //console.log("Signed in as:", firebaseUser.uid);
                $location.path('/');
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            });
        };
    });