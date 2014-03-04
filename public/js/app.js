// 'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute','myApp.filters','myApp.services','myApp.directives','myApp.controllers'])
  .config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/view1', {
      templateUrl: 'templates/partial1.html',
       controller: 'MyCtrl1'
     })
    .when('/view2', {
      templateUrl: 'templates/partial2.html',
       controller: 'MyCtrl2'
     })
    .otherwise({
      redirectTo: '/view1'
    });
});