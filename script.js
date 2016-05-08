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
			controller: 'contactController'
		})
		.when("/service", {
			templateUrl: 'service.html',
			controller: 'serviceController'
		});
}]);

app.controller('mainController', ['$scope', function($scope) {
	console.log("the mainController is running");
}]);

app.controller('serviceController', ['$scope','$http', function($scope, $http) {
    console.log("the service controller is running");
	$http.get('services.json')
		.success(function(response) {
           $scope.serviceData = response;
		})
		.error(function(response) {
			console.log("there is an error in loading service.json file");
		})   
}]);

app.controller('contactController', ['$scope', '$http', function($scope, $http) {
    console.log('contactController is running');
    $http.get('location.json')
        .success(function(response){
            $scope.locations = response;
        })
        .error(function(response){
            console.log("there is an error in getting data from location.json");
        })
}]);