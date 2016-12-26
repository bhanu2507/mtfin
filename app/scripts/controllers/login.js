/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .controller('LoginCtrl', function ($scope, $firebaseAuth) {
    //    var ref = new Firebase("http://mtfin-a2c58.firebaseio.com");
        var config = {
            apiKey: "AIzaSyBSvyrKs3ohe2CJNfpQB3fLhRUVb6ivf14",
            authDomain: "mtfin-a2c58.firebaseapp.com",
            databaseURL: "http://mtfin-a2c58.firebaseio.com"
        };
        firebase.initializeApp(config);
        var rootRef = firebase.database().ref();
        $scope.authObj = $firebaseAuth(firebase.auth());
        $scope.authObj.$signInWithEmailAndPassword("bhanureddy@gmail.com", "password").then(function(firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
        }).catch(function(error) {
            console.error("Authentication failed:", error);
        });
    });