angular.module('myApp')
  .controller('FrameController', function ($scope, $route, $location, $anchorScroll) {
    $scope.menu = [
      "ABOUT",
      "PROJECTS",
      "RESUME"
    ];

    $scope.dropCount = 520;
    $scope.dropSize = 3;
    $scope.title = "Nick Escallon";

    $scope.goTo = function(target) {
      $location.hash('bottom-page');
      $anchorScroll();
      $location.hash('');
      
      $location.path('/' + target.toLowerCase());
   };
  });