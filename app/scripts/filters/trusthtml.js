'use strict';

/**
 * @ngdoc filter
 * @name drangularangApp.filter:trustHtml
 * @function
 * @description
 * # trustHtml
 * Filter in the drangularangApp.
 */
angular.module('drangularangApp')
  .filter('trustHtml', function ($sce) {
    return function(input) {
      return $sce.trustAsHtml(input);
    };
  })
  .filter('drupalUrlTranslate', function() {
    return function(path) {
      switch(path) {
        case '<front>':
          return '/';
        default :
          return path.replace('drangular', '');
      }
    }
  });
