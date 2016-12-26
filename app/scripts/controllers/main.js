/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .controller('MainCtrl', function ($scope, fAuth) {
        $scope.auth = fAuth;
        $scope.user = $scope.auth.$getAuth();
        console.log($scope.auth.$getAuth());
    });