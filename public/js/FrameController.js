angular.module('myApp')
  .controller('FrameController', function ($scope) {
    $scope.menu = [
      "Projects",
      "Resume",
      "About"
    ];

    $scope.dropCount = 520;
    $scope.dropSize = 3;
    $scope.title = "Nick Escallon";
  });