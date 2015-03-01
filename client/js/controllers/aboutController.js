app.controller('aboutController', ['$scope', function($scope) {
    $scope.intro = "I like developing apps on web and mobile. I love working with and talking tech and games and how they can be leveraged to improve personal lives, collaboration, and education. I'm currently a student, and forever a learner. I'm from Manila, The Philippines but based in BC, Canada.";

    $scope.skillsIntro = "I am proud to have gained the following skills as a software developer:"

    $scope.majorSkills = [
        { name: 'iOS & Objective-C', description: 'lorem' },
        { name: 'Javascript (AngularJS, Node.js)', description: 'lorem' },
        { name: 'Git & GitHub', description: 'lorem' },
        { name: 'HTML & CSS', description: 'lorem' },
        { name: 'Bootstrap', description: 'ipsum' }
    ];

    $scope.minorSkills = [
        'MongoDB',
        'Python',
        'Wordpress',
        'Java',
        'C'
    ];
}]);
