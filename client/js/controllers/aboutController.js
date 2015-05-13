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

    $scope.funFacts = [
        'I\'ve visited 14 different countries',
        'I played the Euphonium once upon a time',
        'Trilingual. Or at least, used to be. Now mostly just bi. Lingual that is',
        'Philippines -> Indonesia -> Canada. 3 places to call home',
        'Noel isn\'t my real name',
        'I\'ll play sport you invite me to play',
        'I can recite probably 80% of Eminem songs word for word',
        'I have performed in a play in a swimming pool',
        'Milk first, cereal second',
        'I\'m a support main in League of Legends, and will compliment everybody',
        'I broke my arm falling off monkey bars as a kid',
        'I can recount the whole story of Final Fantasy 6',
        'There is video evidence that I sleep with my eyes partly open'
    ];

    $scope.twitterLink = "http://www.twitter.com";
    $scope.githubLink = "http://www.github.com";
    $scope.linkedinlink = "http://www.linkedin.com";
}]);
