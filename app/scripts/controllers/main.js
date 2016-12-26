/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .controller('MainCtrl', function ($scope, fAuth, $location) {
        $scope.auth = fAuth;
       var user = $scope.auth.$getAuth();
       // console.log(user.email);
        $scope.logout = function() {
            fAuth.$signOut();
            $location.path('/login');
        };
       // console.log($scope.auth.$getAuth());
    });