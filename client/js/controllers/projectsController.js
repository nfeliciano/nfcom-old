var projectsModule = angular.module('projects', []);

projectsModule.controller('projectsCtrl', ['$scope', 'projectFactory', function($scope, projectFactory) {
    var projectsList = projectFactory.getProjectsList();
    var projectOne = projectsList[0];
    $scope.message = projectOne['name'];
}]);
