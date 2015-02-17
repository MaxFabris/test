angular.module('test.controllers')
    .controller('Test2Ctrl', ['$scope', 'session', function ($scope, session) {
        $scope.message = 'Hello Max';
        $scope.clicked = function (message, amount) {
            console.log('CLICKED', message, amount);
            $scope.visible = true;

        };
        $scope.visible = false;
        /*$scope.show = function (visible) {
         $scope.visible = visible ? !visible : visible;
         }*/

        $scope.showUser = function () {
            console.log(session.user);
        };
    }]);