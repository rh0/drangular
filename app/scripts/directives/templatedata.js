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
        if(scope.template === '') {
          element.html($templateCache.get('defaultData'));
        } else {
          element.html($templateCache.get(scope.template + 'Data'));
        }
        $compile(element.contents())(scope);

        console.log(scope);
      }
    };
  });

