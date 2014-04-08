angular.module('myApp')
  .controller('ProjectsController', function ($scope, $route, $location, $anchorScroll, imageSvc) {
  	$location.hash('bottom-page');
    $anchorScroll();
    $location.hash('');

    $scope.images = imageSvc.images;
  });