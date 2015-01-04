'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
    .controller('MainCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle()
                .then(function() {
                    $log.debug("toggle left is done");
                });
        };
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle()
                .then(function() {
                    $log.debug("toggle RIGHT is done");
                });
        };
    }).controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });
        };
    });