'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('BlogCtrl', function ($scope, drangularDataFactory) {
    console.log('BEEP BOOP!');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.blogResults = drangularDataFactory.query();
    console.log($scope);
  });
