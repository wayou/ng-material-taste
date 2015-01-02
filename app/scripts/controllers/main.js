'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
    .controller('MainCtrl', function($scope, $mdDialog,$interval) {

        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';

        $scope.date = new Date();
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
        $scope.data.cb3 = false;
        $scope.data.cb4 = false;
        $scope.data.cb5 = false;

        $scope.mode = 'query';
        $scope.determinateValue = 30;
        $interval(function() {
            $scope.determinateValue += 1;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
            }
        }, 100, 0, true);

        $scope.alert = '';
        $scope.showAlert = function(ev) {
            $mdDialog.show(
                $mdDialog.alert()
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Password notification')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };
        $scope.showConfirm = function(ev) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete your debt?')
                .content('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('Sounds like a scam')
                .targetEvent(ev);
            $mdDialog.show(confirm).then(function() {
                $scope.alert = 'You decided to get rid of your debt.';
            }, function() {
                $scope.alert = 'You decided to keep your debt.';
            });
        };
        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: '../views/dialog1.tmpl.html',
                targetEvent: ev,
            })
                .then(function(answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };
    });

function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}