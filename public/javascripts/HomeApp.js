/**
 * Created by mohit on 11/12/16.
 */
var app = angular.module('MainHomeApp', []);

app.controller('MainHomeCtrl',
    function ($scope, $http, $location) {
        $scope.projects=[];
        $scope.clubWorks=[];
        $scope.acadWorks=[];
        $scope.persWorks=[];
        $scope.others=[];
        var userId;
        angular.element(document).ready(function () {
            var url = $location.path();
            var index = url.indexOf('uid');
            index += 4;
            var index2 = url.indexOf('&');
            if(index2 == -1){
                userId = url.slice(index, url.length);
            }else{
                userId = url.slice(index, index2);
            }


            // get the todos.
            var data = {
                'userId': userId;
            }
            $http.post('/data/get', data).success(function(data, status){
                 
            }).error(function (data, success) {

            });
        });


        $scope.acadWorkAdd = function () {
            if($scope.acadWork == '' || $scope.acadWork == null){
                return;
            }
            var time = new Date();
            $scope.acadWorks.push({'content' : $scope.acadWork, 'time': time});
            var data = {
                'message': $scope.acadWork,
                'type': 'ACAD_WORK',
                'userId': userId,
                'time': time
            };
            
            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };



        $scope.projectAdd = function () {
            if($scope.project == '' || $scope.project == null){
                return;
            }
            var time = new Date();
            $scope.projects.push({'content': $scope.project, 'time': time});
            var data = {
                'message': $scope.project,
                'type': 'PROJECT_WORK',
                'userId': userId,
                'time': time
            };

            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };



        $scope.clubWorkAdd = function () {
            if($scope.clubWork == '' || $scope.clubWork == null){
                return;
            }
            var time = new Date();
            $scope.clubWorks.push({'content': $scope.clubWork, 'time': time});
            var data = {
                'message': $scope.clubWork,
                'type': 'CLUB_WORK',
                'userId': userId,
                'time': time
            };

            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };



        $scope.persWorkAdd = function () {
            if($scope.persWork == '' || $scope.persWork == null){
                return;
            }
            var time = new Date();
            $scope.persWorks.push({'content': $scope.persWork, 'time': time});
            var data = {
                'message': $scope.persWork,
                'type': 'PERS_WORK',
                'userId': userId,
                'time': time
            };

            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };


        $scope.otherAdd = function () {
            if($scope.other == '' || $scope.other == null){
                return;
            }
            var time = new Date();
            $scope.others.push({'content': $scope.other, 'time': time});
            var data = {
                'message': $scope.other,
                'type': 'OTHER_WORK',
                'userId': userId,
                'time': time
            };

            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };

    }
);