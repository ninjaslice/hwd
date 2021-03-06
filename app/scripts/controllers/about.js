'use strict';

angular.module('hwdApp')
.controller('AboutCtrl', function ($scope, Skills, Education, Experience) {
	
	$scope.Chad = {
		skills: Skills.query(),
		education: Education.query(),
		experience: Experience.query()
	};

	$scope.rate = 3;
	$scope.max = 5;
	$scope.isReadonly = true;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	
	$scope.ratingStates = [
		{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
		{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
		{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
		{stateOn: 'glyphicon-heart'},
		{stateOff: 'glyphicon-off'}
	];
	
});
