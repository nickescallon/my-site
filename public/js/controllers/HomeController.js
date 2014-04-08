angular.module('myApp').
  controller('HomeController', function ($scope, $timeout) {
    $scope.one = "HELLO 1";
    $scope.ready = false;
    $timeout(function(){
      $scope.ready=true;
    }, 3000);
  });