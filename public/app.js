'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.filters',
  'myApp.services',
  'myApp.sessions'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/about', {
  		templateUrl: 'view/page/about.html'
  	})
  	.otherwise({
  		redirectTo: '/sessions'
	});
}])