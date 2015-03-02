'use strict';

/**
 * @ngdoc directive
 * @name drangularangApp.directive:templateData
 * @description
 * # templateData
 */
angular.module('drangularangApp')
  .directive('templateData', function ($compile, $templateCache) {
    return {
      restrict: 'E',
      link: function(scope, element) {
        // This is where we switch on the template types.
        element.html($templateCache.get('defaultData'));
        $compile(element.contents())(scope);
      }
    };
  });

