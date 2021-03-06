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
  .run(function($http, $templateCache) {
    // Loading up our template partials.  I think there may be a simpler way.
    $http.get('views/partials/defaultData.html').success(function(t) {
      $templateCache.put('defaultData', t);
    });
    $http.get('views/partials/blogData.html').success(function(t) {
      $templateCache.put('blogData', t);
    });
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          drupalMenu: function (drangularMenuFactory, menuParse) {
            return drangularMenuFactory.get().$promise.then(function(data) {
              var $processedMenu = menuParse.process(data);
              $processedMenu.template = '';
              return $processedMenu;
            });
          }
        }
      })
      .when('/:service?', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          drupalMenu: function (drangularMenuFactory, menuParse) {
            return drangularMenuFactory.get().$promise.then(function(data) {
              return menuParse.process(data);
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
