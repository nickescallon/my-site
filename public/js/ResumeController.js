angular.module('myApp')
  .controller('ResumeController', function ($scope, $route, $location, $anchorScroll) {
    $location.hash('bottom-page');
    $anchorScroll();
    $location.hash('');
  });