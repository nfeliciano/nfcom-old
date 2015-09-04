var nfcom = angular.module('nfcom', ['ui.router', 'projects']);

nfcom.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: 'views/home.html'
        })
        .state('about', {
            url: '/about',
            controller: 'aboutCtrl',
            templateUrl: 'views/about.html'
        })
        .state('projects', {
            url: '/projects',
            controller: 'projectsCtrl',
            templateUrl: 'views/projects.html'
        })
});
