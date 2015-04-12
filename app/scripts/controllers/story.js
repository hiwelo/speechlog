'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:StoryCtrl
 * @description
 * # StoryCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('StoryCtrl', function ($scope, $state, $stateParams, $filter) {
  	console.info('StoryCtrl', $stateParams);
    $scope.story = $filter('filter')($scope.stories, {'url': $stateParams.url}, true)[0];
    console.info($scope.story);
    if (!$scope.story)
    	$state.go('user.stories', {username: $stateParams.username});
  });
