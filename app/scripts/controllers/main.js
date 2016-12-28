/**
 * Created by bhanu.mokkala on 12/26/2016.
 */
'use strict';

angular.module('mtfin')
    .controller('MainCtrl', function ($scope, fAuth, $location, $firebaseArray) {
        $scope.auth = fAuth;
       var user = $scope.auth.$getAuth();
       // console.log(user.email);
        $scope.logout = function() {
            fAuth.$signOut();
            $location.path('/login');
        };
       // console.log($scope.auth.$getAuth());
        $scope.add = function() {
            var ref = firebase.database().ref();
            var list = $firebaseArray(ref);
            list.$add({ villa: "136"}).then(function(ref){
                var id = ref.key;
                console.log("added record with id " + id);
                list.$indexFor(id);
            })
        };
        $scope.list = function() {
            var ref = firebase.database().ref();
            var list = $firebaseArray(ref);
            $scope.data = list;
            console.log(list);
        }
        $scope.getvilla = function(villano) {
            $scope.corpus1st = "";
            $scope.roadfund = "";
            var ref = firebase.database().ref();
            var list = $firebaseArray(ref);
console.log(villano);
           firebase.database().ref('/' + villano).once('value').then(function(snapshot) {
                var villa = snapshot.val();
                console.log(villa);

                    $scope.corpus1st = villa.Corpus1st;
                    $scope.roadfund = villa.RoadFund;


              //  console.log(list.$getRecord("135"));
            });
        }

        $scope.selected= function(villa){
            $scope.corpus1st = villa.Corpus1st;
            $scope.roadfund = villa.RoadFund;
        }
    });