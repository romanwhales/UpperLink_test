'use strict';
angular.module('jobsApp').controller('homeCtrl',['$scope','$http','$window','$rootScope','$state','api',function($scope,$http,$window,$rootScope,$state,api){
	console.log('api is ',api);
    $http({
        method:'GET',
        url:api+'/jobs'
    }).then(function(data){
        debugger;
        $scope.jobs = data.data;
    },function(err){
        debugger;
    });
    $scope.addapplicant = function(id){
        $rootScope.id = id;
        $("#applicantmodal").modal();
        //$("#transactionModal").modal();
        
    };
    $scope.application = function(user){
        user.job_id = $rootScope.id;
        $http({
            method:'POST',
            url:api+'/submitApplication',
            data:user,
            contentType:'application/x-ww-form-urlencoded',
            success:function(data,status){
                if(data.status == true){
                     alert('Job Applied Suucessfully');
                }
               
            }
        })
    }

	// $http({
	// 	method:'GET',
	// 	url:api+'/students'
	// }).then(function(data){
	// 	debugger;
	// 	$scope.students = data.data;
	// },function(err){
	// 	debugger;
	// });
	// $scope.addscore = function(id){
	// 	$rootScope.id = id;
	// 	$state.go('addscores');
	// }
}])