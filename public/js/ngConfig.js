angular.module('craftApp', ['ui.router'])

angular.module('craftApp')
	.config(['$stateProvider', function($stateProvider){
		$stateProvider
		.state('home', {
			url			:'/home',
			templateUrl	:'/html/index.html',
			controller	:'mainController'
		})
		.state('login', {
			url			:'/auth/login',
			templateUrl	:'',
			controller	:'mainController'
		})
		.state('signup', {
			url			:'/signup',
			templateUrl	:'',
			controller	:'mainController'
		})
		.state('craft', {
			url			:'/craft',
			templateUrl	:'',
			controller	:'craftController'
		})
	}])