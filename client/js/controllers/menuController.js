app.controller('menuController', ['$scope', '$location', function($scope, $location) {
	$scope.menuItems = [
		{ name: 'home' },
		{ name: 'projects' },
		{ name: 'about' }
	];

	$scope.selected = $scope.menuItems[0].name;

	$scope.changePage = function(item) {
		$scope.selected = item;
		$location.path(item).replace();
	}
}]);
