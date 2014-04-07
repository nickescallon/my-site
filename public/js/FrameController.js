angular.module('myApp')
  .controller('FrameController', function ($scope, $location, $anchorScroll) {
    $scope.menu = [
      "Projects",
      "Resume",
      "About"
    ];

    $scope.dropCount = 520;
    $scope.dropSize = 3;
    $scope.title = "Nick Escallon";

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };
  });