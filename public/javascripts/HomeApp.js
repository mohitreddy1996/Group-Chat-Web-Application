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


        $scope.done_projects=[];
        $scope.done_clubWorks=[];
        $scope.done_acadWorks=[];
        $scope.done_persWorks=[];
        $scope.done_others=[];

        $scope.all = [];
        $scope.done_all = [];
        var userId;
        angular.element(document).ready(function () {
            var url2 = $location.absUrl();
            var index = url2.indexOf('uid');
            index += 4;
            var index2 = url2.indexOf('&');
            if(index2 == -1){
                userId = url2.slice(index, url2.length);
            }else{
                userId = url2.slice(index, index2);
            }

            // get the todos.
            var data = {
                'userId': userId
            };
            $http.post('/data/get', data).success(function(data, status){
                 angular.forEach(data,function (element) {
                     if(element.status == false) {
                         if (element.todoType == "ACAD_WORK") {
                             $scope.acadWorks.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "PROJECT_WORK") {
                             $scope.projects.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "OTHER_WORK") {
                             $scope.others.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "PERS_WORK") {
                             $scope.persWorks.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "CLUB_WORK") {
                             $scope.clubWorks.push({'content': element.message, 'time': element.time});
                         }

                         $scope.all.push({'content': element.message, 'time': element.time});
                     }else{
                         if (element.todoType == "ACAD_WORK") {
                             $scope.done_acadWorks.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "PROJECT_WORK") {
                             $scope.done_projects.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "OTHER_WORK") {
                             $scope.done_others.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "PERS_WORK") {
                             $scope.done_persWorks.push({'content': element.message, 'time': element.time});
                         } else if (element.todoType == "CLUB_WORK") {
                             $scope.done_clubWorks.push({'content': element.message, 'time': element.time});
                         }

                         $scope.done_all.push({'content': element.message, 'time': element.time});
                     }
                 });
            }).error(function (data, success) {
                console.log('Error while Getting the data');
            });
        });


        $scope.acadWorkAdd = function () {
            if($scope.acadWork == '' || $scope.acadWork == null){
                return;
            }
            var time = new Date();
            $scope.acadWorks.push({'content' : $scope.acadWork, 'time': time});
            $scope.all.push({'content' : $scope.acadWork, 'time': time});
            var data = {
                'message': $scope.acadWork,
                'type': 'ACAD_WORK',
                'userId': userId,
                'time': time
            };

            $scope.acadWork='';
            
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
            $scope.all.push({'content': $scope.project, 'time': time});
            var data = {
                'message': $scope.project,
                'type': 'PROJECT_WORK',
                'userId': userId,
                'time': time
            };
            $scope.project='';

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
            $scope.all.push({'content': $scope.clubWork, 'time': time});
            var data = {
                'message': $scope.clubWork,
                'type': 'CLUB_WORK',
                'userId': userId,
                'time': time
            };
            $scope.clubWork='';
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
            $scope.all.push({'content': $scope.persWork, 'time': time});
            var data = {
                'message': $scope.persWork,
                'type': 'PERS_WORK',
                'userId': userId,
                'time': time
            };
            $scope.persWork='';
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
            $scope.all.push({'content': $scope.other, 'time': time});
            var data = {
                'message': $scope.other,
                'type': 'OTHER_WORK',
                'userId': userId,
                'time': time
            };
            $scope.other='';
            $http.post('/data/save', data).success(function (data, status) {
                console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
            }).error(function (data, status) {
                console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
            });
        };

        $scope.markDone = function(item){
            var obj = item;
            obj.userId = userId;
            $http.post('/data/edit', obj).success(function (data, status) {
                var index = $scope.all.indexOf(item);
                if(index >=0 ){
                    $scope.all.splice(index, 1);
                    $scope.done_all.push(obj);
                }
                index = $scope.acadWorks.indexOf(item);
                if(index >= 0){
                    $scope.acadWorks.splice(index, 1);
                    $scope.done_acadWorks.push(obj);
                }
                index = $scope.persWorks.indexOf(item);
                if(index >= 0){
                    $scope.persWorks.splice(index, 1);
                    $scope.done_persWorks.push(obj);
                }
                index = $scope.projects.indexOf(item);
                if(index >= 0){
                    $scope.projects.splice(index, 1);
                    $scope.done_projects.push(obj);
                }
                index = $scope.others.indexOf(item);
                if(index >= 0){
                    $scope.others.splice(index, 1);
                    $scope.done_others.push(obj);
                }
                index = $scope.clubWorks.indexOf(item);
                if(index >= 0){
                    $scope.clubWorks.splice(index, 1);
                    $scope.done_clubWorks.push(obj);
                }
                console.log("Successfully marked done!")
            }).error(function (data, status) {
                console.log("Error : data\n Status : " + status);
            });
        };

        $scope.removeItem = function (item) {
            var obj = item;
            obj.userId = userId;
            $http.post('/data/remove', obj).success(function (data, status) {
                var index = $scope.all.indexOf(item);
                if(index >=0){
                    $scope.all.splice(index, 1);
                }
                index = $scope.acadWorks.indexOf(item);
                if(index >= 0){
                    $scope.acadWorks.splice(index, 1);
                }
                index = $scope.persWorks.indexOf(item);
                if(index >= 0){
                    $scope.persWorks.splice(index, 1);
                }
                index = $scope.projects.indexOf(item);
                if(index >= 0){
                    $scope.projects.splice(index, 1);
                }
                index = $scope.others.indexOf(item);
                if(index >= 0){
                    $scope.others.splice(index, 1);
                }
                index = $scope.clubWorks.indexOf(item);
                if(index >= 0){
                    $scope.clubWorks.splice(index, 1);
                }

                console.log("Successfully removed");
            }).error(function (data, status) {
                console.log("Error : data\n Status : " + status);
            });
        };


    }
);