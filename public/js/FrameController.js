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

    $scope.scrollTo = function(id, target) {
      // $location.hash(id);
      console.log(target);
      $anchorScroll();
      $location.path('/resume');
   };
  });