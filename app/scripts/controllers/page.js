'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('PageCtrl', function ($scope, $state, $stateParams) {
    $scope.page = $scope.story.pages[$stateParams.page];
    if (!$scope.page)
    	$state.go();
  });
