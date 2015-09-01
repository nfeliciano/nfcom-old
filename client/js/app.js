var nfcom = angular.module('nfcom', ['ui.router', 'ngAnimate']);

nfcom.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('home', {
            url: "/",
            controller: 'splash-page-controller',
            templateUrl: "modules/splash-page/splash-page.html"
        })
        .state('home', {
            url: "/home",
            controller: 'home-page-controller',
            templateUrl: "modules/home-page/home-page.html"
        });

    // $routeProvider
    //     .when('/', {
    //         templateUrl : 'views/home.html',
    //         controller : 'homeController'
    //     })
    //     .when('/home', {
    //         redirectTo : '/'
    //     })
    //     .when('/projects', {
    //         templateUrl : 'views/projects.html',
    //         controller : 'projectsController'
    //     })
    //     .when('/projects/add', {
    //         templateUrl : 'views/about.html',
    //         controller: 'projectsController'
    //     })
    //     .when('/about', {
    //         templateUrl : 'views/about.html',
    //         controller : 'aboutController'
    //     });


});
