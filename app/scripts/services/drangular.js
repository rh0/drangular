'use strict';

/**
 * @ngdoc service
 * @name drangularangApp.drangular
 * @description
 * # drangular
 * Factory in the drangularangApp.
 */
angular.module('drangularangApp')
  .factory('drangularFactory', function ($resource) {
    // Public API here
    return $resource('http://sandbox.drangular.dev/drangular/blog');
  });
