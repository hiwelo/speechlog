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

    $scope.page = $scope.story.pages[$stateParams.number - 1];

    if ($scope.page) {

			var recognizing = false;
    	var recognition = new webkitSpeechRecognition();
  		recognition.continuous = false;
  		recognition.interimResults = false;
  		recognition.lang = 'fr-FR';

  		recognition.onstart = function() {
	    	recognizing = true;
	  	};

	  	recognition.onresult = function(event) {
	  		var result = $scope.result = capitalize(event.results[0][0].transcript) + '.';
	  		if (result.match(/^Yohan/gi)) {
	  			result = $scope.result = 'Yoann' + result.substring(5);
	  		}
	  		var l = new Levenshtein(result, $scope.page);
	  		var percent = $scope.percent = (1 - l.distance / Math.max(result.length, $scope.page.length)) * 100;
	  		console.info(result, l.distance, percent);
	  		$scope.$digest();
	  	};
    } else {
    	$state.go('user.stories.story', {username: $stateParams.username, url: $stateParams.url});
    }

    $scope.startRecognition = function () {
			if (recognizing) {
				recognizing = false;
				recognition.stop();
			}
			else {
				recognizing = true;
				recognition.start();
			}
	  };

  	$scope.nextPage = function() {
  		$scope.reading.pages.push({result: $scope.result, percent: $scope.percent});
  		if (Number($stateParams.number) === $scope.story.pages.length) {
  			$state.go('user.stories.story.end', {username: $stateParams.username, url: $stateParams.url});
  		} else {
  			$state.go('user.stories.story.page', {username: $stateParams.username, url: $stateParams.url, number: Number($stateParams.number) + 1});
  		}
  	};

    var first_char = /\S/;
		function capitalize(s) {
  		return s.replace(first_char, function(m) { return m.toUpperCase(); });
		}

  });
