'use strict';

/* Directives */


angular.module('myApp')
  .directive('rainName', function() {
    return {
      restrict: 'E',
      scope: {},
      link: function(scope, element) {
        var w = element[0].parentNode.clientWidth;
        var h = element[0].parentNode.clientHeight;
      }
    }
  });
