'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('MainCtrl', function ($scope, drupalMenu) {
    $scope.menu = drupalMenu.tree;
    console.log($scope.menu);
  });
