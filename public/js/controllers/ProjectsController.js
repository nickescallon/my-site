angular.module('myApp')
.controller('ProjectsController', function ($scope, $route, $location, $anchorScroll) {
	$location.hash('bottom-page');
    $anchorScroll();
    $location.hash('');
});