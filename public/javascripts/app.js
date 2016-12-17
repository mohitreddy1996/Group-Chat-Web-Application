/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('LoginPage', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Real Time Group Chat Application';

        $scope.confirmLogin = function(){
            var userId = $scope.userId;
            var passwrd = $scope.userPasswrd;
            var loginData = {
                userId: userId,
                passwrd: passwrd
            };

            // send the data.
            $http.post('/login', data).success(function (data, status) {
                console.log("Login Completed Successfully");
            }).error(function (data, status) {
                console.log("Login Failed!");
            })
        }
    }
]);