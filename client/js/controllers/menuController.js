nfcom.controller('menuCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.menuItems = [
		{ name: 'projects' },
		{ name: 'home' },
		{ name: 'blog' }
	];

	$scope.selected = $location.path().slice(1);
	if($scope.selected.length <=1) $scope.selected = 'home';

	$scope.twitterLink = "https://twitter.com/nfeli";
	$scope.githubLink = "https://github.com/nfeliciano";
	$scope.facebookLink = "https://www.facebook.com/noelfeli";
	$scope.linkedinLink = "https://ca.linkedin.com/pub/noel-joseph-feliciano/80/29/a67";
	$scope.mailLink = "mailto:feliciano.noel@gmail.com";

	$scope.changePage = function(item) {
		$scope.selected = item;
	}
}]);
