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
    $scope.story = $filter('filter')($scope.stories, {'url': $stateParams.url}, true)[0];
    if ($scope.story) {
    	$scope.reading = {
    		id: $scope.readings[$scope.readings.length - 1].id + 1,
    		name: $scope.story.url,
    		pages: [],
    		date: new Date()
    	};
    } else {
    	$state.go('user.stories', {username: $stateParams.username});
    }
  });
