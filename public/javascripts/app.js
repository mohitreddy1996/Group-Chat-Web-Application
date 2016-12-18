/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('LoginPage', []);

app.controller('MainCtrl',
    function($scope, $http){
        $scope.test = 'Real Time Group Chat Application';

        $scope.confirmLogin = function(){
            var userId = $scope.userId;
            var passwrd = $scope.userPasswrd;
            var loginData = {
                userId: userId,
                userPasswrd: passwrd
            };

            // send the data.
            $http.post('/login', loginData).success(function (data, status) {
                console.log("Login Completed Successfully");
            }).error(function (data, status) {
                console.log("Login Failed!");
            })
        }
    }
);