/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve: {
                    "currentAuth": ["fAuth", function(fAuth) {
                        //console.log(fAuth.$requireSignIn());
                        return fAuth.$requireSignIn();
                    }]
                }
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve: {
                    "currentAuth": ["fAuth", function(fAuth) {
                        //console.log(fAuth.$requireSignIn());
                        return fAuth.$requireSignIn();
                    }]
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
    }])
    .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        if (error === "AUTH_REQUIRED") {
            $location.path("/login");
        }
    });
    }]);

