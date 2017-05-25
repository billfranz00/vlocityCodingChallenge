app.controller('leftNavController', ['$scope', 'people', function($scope, people) {
	people.success(function(data) {
		// console.log(data.People[0].name);
		$scope.people = data.People;
	})
}]);