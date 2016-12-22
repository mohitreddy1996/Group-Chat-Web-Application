/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('LoginPage', []);

app.controller('MainCtrl',
    function($scope, $http, $location, $window){
        $scope.test = 'To Do Manager';

        $scope.confirmLogin = function(){
            var userId = $scope.userId;
            var passwrd = $scope.userPasswrd;
            var loginData = {
                userId: userId,
                userPasswrd: passwrd
            };

            // send the data.
            $http.post('/login', loginData).success(function (data, status) {
                $window.location.href = '/home?uid=' + userId;
            }).error(function (data, status) {
                console.log("Login Failed!");
            })
        }
    }
);
