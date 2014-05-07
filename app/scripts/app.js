'use strict';

angular
  .module('bootstrapSassPurplePlaygroundApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/components', {
        templateUrl: 'views/components.html',
        controller: 'ComponentsCtrl'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/getting-started', {
        templateUrl: 'views/getting-started.html',
        controller: 'GettingStartedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
