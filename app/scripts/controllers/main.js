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
        /*
        $scope.list = function() {
            var ref = firebase.database().ref();
            var list = $firebaseArray(ref);
            $scope.data = list;
            console.log(list);
        }*/
        $scope.getvilla = function(villano) {
            $scope.loading = true;
            $scope.loading1 = false;
            $scope.corpus1st = null;
            $scope.roadfund = null;
            $scope.desc = null;
            var ref = firebase.database().ref();
            var list = $firebaseArray(ref);
           firebase.database().ref('/' + villano).once('value').then(function(snapshot) {
                var villa = snapshot.val();
                //$scope.villalist = snapshot.val();
               $scope.loading = false;
               $scope.loading1 = true;
               $scope.edit = false;
                //console.log(villa);

                    if (villa != null) {
                        $scope.corpus1st = villa.Corpus1st;
                        $scope.roadfund = villa.RoadFund;
                        $scope.desc = villa.Description;
                    }
                    else {
                        $scope.corpus1st = "";
                        $scope.roadfund = "";
                        $scope.desc = "";
                    }
               $scope.$apply();

              //  console.log(list.$getRecord("135"));
            });
        }


        $scope.editdtl = function(){
            $scope.edit = true;
        }
        $scope.canceldtl = function(){
            $scope.edit = false;
        }
        $scope.updatedtl = function(cor,rf,ds,vno){

            firebase.database().ref('/' + vno).set({
                Corpus1st: cor,
                RoadFund: rf,
                Description: ds
            });

            $scope.getvilla(vno);
        };


     });
