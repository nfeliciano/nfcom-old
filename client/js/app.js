var app = angular.module('nfcom', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'homeController'
        })
        .when('/home', {
            redirectTo : '/'
        })
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller : 'projectsController'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            controller : 'aboutController'
        });
}]);
