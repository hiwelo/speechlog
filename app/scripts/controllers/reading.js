'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:ReadingCtrl
 * @description
 * # ReadingCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('ReadingCtrl', function ($scope, $state, $stateParams, $filter) {
  	console.log($stateParams);
    $scope.reading = $filter('filter')($scope.readings, {id: $stateParams.id})[0];
    console.log($scope.reading);
    $scope.story = $filter('filter')($scope.stories, {title: $scope.reading.title}, true)[0];
    console.log($scope.story);
    $scope.labels = [];
  	$scope.series = [$scope.story.title];
  	$scope.data = [[]];
    var i = 0;
    $scope.reading.pages.forEach(function (item, index, items) {
    	item.text = $scope.story.pages[i];
    	$scope.labels.push('Page ' + (i + 1));
    	$scope.data[0].push(item.percent);
    	i++;
    });
  });
