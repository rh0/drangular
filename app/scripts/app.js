'use strict';

/**
 * @ngdoc overview
 * @name drangularangApp
 * @description
 * # drangularangApp
 *
 * Main module of the application.
 */
angular
  .module('drangularangApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          drupalMenu: function(drangularMenuFactory) {
            return drangularMenuFactory.get().$promise.then(function(data) {
              return data;
            });
          }
        }
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/:section/:subsection/:post?/:field?', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          drupalMenu: function (drangularMenuFactory) {
            return drangularMenuFactory.get().$promise.then(function(data) {
              return data;
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
