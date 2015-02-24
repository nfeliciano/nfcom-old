app.controller('aboutController', ['$scope', function($scope) {
    $scope.aboutOne = "I like developing apps on web and mobile. I love working with and talking tech and games and how they can be leveraged to improve personal lives, collaboration, and education. I'm currently a student, and forever a learner. I'm from Manila, The Philippines but based in BC, Canada.";

    $scope.majorSkills = [
        'iOS & Objective-C',
        'Javascript (AngularJS, Node.js)',
        'Git & GitHub',
        'HTML & CSS',
        'Bootstrap'
    ];

    $scope.minorSkills = [
        'MongoDB',
        'Python',
        'Wordpress',
        'Java',
        'C'
    ];
}]);
