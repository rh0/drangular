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
    // Helper function for active class assignment.  This should may be a
    // service, as we should also check on template type when we see the active
    // trail.
    $scope.isActive = function(viewLocation) {
      return (viewLocation === $location.path());
    };

    // Assign factory data to scope.
    $scope.menu = drupalMenu.tree;
    if($routeParams.service !== undefined) {
      $scope.drupalData = drangularDataFactory.query({service: $routeParams.service});
    }

    // Debug.
    console.log($scope.menu);
    //console.log($routeParams);
    console.log($scope);
  });
