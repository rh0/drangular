'use strict';

/**
 * @ngdoc function
 * @name drangularangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drangularangApp
 */
angular.module('drangularangApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, drupalMenu, drangularDataFactory) {
    // Assign factory data to scope.
    $scope.menu = drupalMenu.tree;
    $scope.template = drupalMenu.template;
    if($routeParams.service !== undefined) {
      $scope.drupalData = drangularDataFactory.query({service: $routeParams.service});
    }

    // Debug.
    console.log($scope.menu);
  });
