/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('LoginPage', []);

app.controller('MainCtrl',
    function($scope, $http, $location, $window){

        $scope.confirmLogin = function(){
            var userId = $scope.userId;
            $window.location.href = '/home?uid=' + userId;
        }
    }
);
