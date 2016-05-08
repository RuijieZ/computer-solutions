var app = angular.module('computer', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'main.html',
			controller:'mainController'
		})
		.when("/main", {
			templateUrl: 'main.html',
			controller:'mainController'
		})
		.when("/about", {
			templateUrl: 'about.html',
			controller: 'mainController'
		})
		.when("/contact", {
			templateUrl: 'contact.html',
			controller: 'mainController'
		})
		.when("/service", {
			templateUrl: 'service.html',
			controller: 'mainController'
		})

}]);

app.controller('mainController', ['$scope', function($scope) {
	console.log("the mainController is running");
}]);
