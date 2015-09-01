nfcom.controller('menuCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.menuItems = [
		{ name: 'home' },
		{ name: 'projects' },
		{ name: 'about' }
	];

	$scope.selected = $location.path().slice(1);
	if($scope.selected.length <=1) $scope.selected = 'home';


	$scope.changePage = function(item) {
		$scope.selected = item;
		$location.path(item).replace();
	}
}]);
