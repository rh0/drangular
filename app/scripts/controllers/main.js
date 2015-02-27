'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
