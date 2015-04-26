app.controller('aboutController', ['$scope', function($scope) {
    $scope.intro = "I like developing apps on web and mobile. I love working with and talking tech and games and how they can be leveraged to improve personal lives, collaboration, and education. I'm currently a student, and forever a learner. I'm from Manila, Philippines but based in BC, Canada.";

    $scope.skillsIntro = "I am proud to have gained the following skills as a software developer:"

    $scope.majorSkills = [
        { name: 'iOS & Objective-C', description: 'I\'ve had fun with the platform since iOS 4.0, using GCD, Core Data, Storyboards, GameKit, and Cocos2D.' },
        { name: 'Javascript', description: 'I\'ve spent time with MEAN, particularly a bunch of Angular and Node. I\'ve picked up a bit of jQuery (and AJAX) and D3 to boot.' },
        { name: 'Git & GitHub', description: 'I try to spread the word of Git & GitHub, as it\'s been good for putting my stuff up for storage and for collaborating. GUI? Command Line? Can do.' },
        { name: 'HTML & CSS', description: 'This one\'s kind of a given.' }
    ];

    $scope.minorSkills = [
        'MongoDB',
        'Python',
        'Wordpress',
        'Java',
        'C'
    ];

    $scope.twitterLink = "http://www.twitter.com";
    $scope.githubLink = "http://www.github.com";
    $scope.linkedinlink = "http://www.linkedin.com";
}]);
