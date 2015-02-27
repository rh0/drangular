'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('BlogCtrl', function ($scope, drangularFactory) {
    console.log('BEEP BOOP!');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.blogResults = drangularFactory.query();
    console.log($scope);
  });
