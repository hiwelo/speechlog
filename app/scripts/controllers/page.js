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
  	console.info($stateParams);
    $scope.page = $scope.story.pages[$stateParams.numero - 1];
    console.info($scope.page);
    if ($scope.page) {

			var recognizing = false;
    	var recognition = new webkitSpeechRecognition();
  		recognition.continuous = false;
  		recognition.interimResults = false;
  		recognition.lang = 'fr-FR';

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
  		

		recognition.onstart = function() {
    	recognizing = true;
  	};

  		recognition.onresult = function(event) {
  			console.info('onresult', event);
  			var result = capitalize(event.results[0][0].transcript) + '.';
  			console.info(result);
  			var l = new Levenshtein(result, $scope.page);
  			var percent = (1 - l.distance / Math.max(result.length, $scope.page.length)) * 100;
  			console.info(l.distance, percent);
  		};
    } else {
    	$state.go('user.stories.story', {username: $stateParams.username, url: $stateParams.url});
    }


    var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}
  });
