'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
