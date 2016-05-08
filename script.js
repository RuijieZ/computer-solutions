var app = angular.module('computer', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'main.html',
			controller:'mainController'
		})
		.when("/about", {
			templateUrl: 'about.html',
			controller: 'aboutController'
		})
}]);

app.controller('mainController', ['$scope', function($scope) {
	console.log("the mainController is running");

}]);

app.controller('aboutController', ['$scope', function($scope) {

}]);