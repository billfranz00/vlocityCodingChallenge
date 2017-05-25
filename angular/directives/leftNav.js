app.directive('leftNav', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'angular/views/leftNav.html'
	}
});