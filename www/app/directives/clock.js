angular.module('test.directives')
    .directive('tsClock', ['$interval', function ($interval) {
        return {
            restrict: 'E',
            template: '<span>{{time | date:"hh:mh:ss"}}</span>',
            link: function (scope, el, attrs) {
                scope.time = new Date();

                $interval(function () {
                    scope.time = new Date();
                }, 1000);
            }
        };
    }]);