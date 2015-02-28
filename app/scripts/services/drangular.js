'use strict';

/**
 * @ngdoc service
 * @name drangularangApp.drangular
 * @description
 * # drangular
 * Factory in the drangularangApp.
 */
angular.module('drangularangApp')
  .factory('drangularDataFactory', function ($resource) {
    // Public API here
    return $resource('http://sandbox.drangular.dev/drangular/blog');
  })
  .factory('drangularMenuFactory', function ($resource) {
    // Public API here
    return $resource('http://sandbox.drangular.dev/drangular/menu/main-menu');
  })
  ;
