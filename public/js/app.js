var subjectApp = angular.module('jobsApp',['ui.router','oc.lazyLoad']).run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
	$rootScope.state = $state;
	$rootScope.stateParams = $stateParams;
}]);

subjectApp.config(['$ocLazyLoadProvider',function($ocLazyLoadProvider){
    $ocLazyLoadProvider.config({

    });
}]);
subjectApp.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home',{
		url:'/',
		templateUrl:'./views/home.html',
		controller:'homeCtrl',
		resolve:{
			load:['$ocLazyLoad',function($ocLazyLoad){
				return $ocLazyLoad.load({
					name:'jobsApp',
					files:[
						'./app/controllers/homeCtrl.js',
						'./js/jquery-2.1.3.min.js',
						'./js/bootstrap.min.js'
					]
				})
			}]
		}
	})
	.state('addscores',{
		url:'/addstudent',
		templateUrl:'./views/add.html',
		controller:'addStudentCtrl',
		resolve:{
			load:['$ocLazyLoad',function($ocLazyLoad){
				return $ocLazyLoad.load({
					name:'subjectApp',
					files:[
						'./app/controllers/subjectCtrl.js'
					]
				})
			}]
		}
	})
}]);

subjectApp.value('api','http://localhost:8000/api');