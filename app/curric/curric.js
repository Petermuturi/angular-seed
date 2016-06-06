'use strict';

angular.module('myApp.curric', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'curric/curric.html',
    controller: 'CurricCtrl'
  });
}])

.controller('CurricCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
	console.log("Curric controller loaded...");
	var ref = new Firebase('https://curr-4fa85.firebaseio.com/');

	$scope.curriculum = $firebaseArray(ref);

	$scope.addCurriculum = function(){
		console.log("adding Curriculum...");
		$scope.curriculum.$add({
			time: $scope.time,
			instructor: $scope.instructor,
			topic: $scope.topic
		}).then(function(ref){
			var id = ref.key();
			console.log("Added curriculum "+id);
			$scope.time = '';
			$scope.instructor = '';
			$scope.topic = '';
		});
	};
}]);
