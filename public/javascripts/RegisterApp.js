/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('RegisterApp', []);

app.controller('MainRegisterCtrl',
    function ($scope, $http) {
        $scope.registerUser = function () {
            var userName = $scope.userName;
            var userId = $scope.userId;
            var userPasswrd = $scope.userPasswrd;
            var data = {
                userName: userName,
                userId: userId,
                userPasswrd: userPasswrd
            };

            $http.post('/register/user', data).success(function (data, success) {
                console.log("Successfully Registered");
            }).error(function (data, err) {
                console.log("Error while registering.");
            });
        }
    }
);