var app = angular.module('vlocityApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'vlocityController',
			templateUrl: 'angular/views/details.html'
		})
		.when('/person/:id', {
			controller: 'detailsController',
			templateUrl: 'angular/views/details.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});