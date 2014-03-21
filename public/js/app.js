angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'templates/partial1.html',
         controller: 'HomeController'
       })
      .when('/resume', {
        templateUrl: 'templates/partial2.html',
         controller: 'ResumeController'
       })
      .otherwise({
        redirectTo: '/'
      });
});