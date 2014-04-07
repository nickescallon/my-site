angular.module('myApp')
  .controller('FrameController', function ($scope) {
    $scope.menu = [
      "Projects",
      "Resume",
      "About"
    ];

    $scope.dropCount = 520;
    $scope.dropSize = 2;
    $scope.title = "Nick Escallon";
  });