app.controller('menuController', ['$scope', function($scope) {
	$scope.menuItems = [
		{ name: "home" },
		{ name: "projects" },
		{ name: "about" }
	];

	$scope.selected = $scope.menuItems[0];

	$scope.changePage = function(item) {
		
	}
}]);