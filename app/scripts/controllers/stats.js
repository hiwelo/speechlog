'use strict';

/**
 * @ngdoc function
 * @name speechlogApp.controller:StatsCtrl
 * @description
 * # StatsCtrl
 * Controller of the speechlogApp
 */
angular.module('speechlogApp')
  .controller('StatsCtrl', function ($scope) {
  	$scope.labels = [];
  	// $scope.series = ['Series A', 'Series B'];
  	$scope.data = [[]];
    $scope.readings.forEach(function (item, index, items) {
    	$scope.labels.push(item.title + ' ' + item.date);
    	$scope.data[0].push(item.percent);
    });
    $scope.options = {scaleBeginAtZero:true};
  });
