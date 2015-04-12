'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:EndCtrl
 * @description
 * # EndCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('EndCtrl', function ($scope) {
    $scope.readings.push($scope.reading);
    console.info($scope.reading, $scope.readings);
    $scope.series = [$scope.story.title];
    $scope.labels = [];
  	$scope.data = [[]];
  	var i = 1;
    $scope.reading.pages.forEach(function (item, index, items) {
    	$scope.labels.push('Page ' + i);
    	$scope.data[0].push(item.percent);
    	i++;
    });
    $scope.options = {scaleBeginAtZero:true};
  });
