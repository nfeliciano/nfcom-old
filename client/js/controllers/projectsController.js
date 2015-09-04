var projectsModule = angular.module('projects', []);

projectsModule.controller('projectsCtrl', ['$scope', 'projectService', function($scope, projectService) {
    var projectsList = projectService.getProjectsList();
    var projectOne = projectsList[0];
    $scope.message = projectOne['name'];
}]);
