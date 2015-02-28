'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('MainCtrl', function ($scope, $routeParams, drangularMenuFactory) {
    console.log($routeParams);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.menu = drangularMenuFactory.get();
    console.log($scope);
  });
