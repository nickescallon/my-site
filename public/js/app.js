angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'templates/partial1.html',
         controller: 'HomeController'
       })
      // .when('/view2', {
      //   templateUrl: 'templates/partial2.html',
      //    controller: 'MyCtrl2'
      //  })
      .otherwise({
        redirectTo: '/'
      });
});