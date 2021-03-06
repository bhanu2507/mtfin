/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

/**
 * @ngdoc overview
 * @name yogafireApp
 * @description
 * # yogafireApp
 *
 * Main module of the application.
 */
angular.module('mtfin', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap'
])
    .factory('fAuth', function ($firebaseAuth) {
        var config = {
            apiKey: "AIzaSyBSvyrKs3ohe2CJNfpQB3fLhRUVb6ivf14",
            authDomain: "mtfin-a2c58.firebaseapp.com",
            databaseURL: "http://mtfin-a2c58.firebaseio.com"
        };
        //var ref = firebase.database().ref();
        firebase.initializeApp(config);
        return $firebaseAuth(firebase.auth());
    })
    .controller('IndexCtrl', function ($scope, fAuth, $location) {
        $scope.logout = function() {
            fAuth.$signOut();
            $location.path('/login');
        };
    });
