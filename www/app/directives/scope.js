angular.module('test.directives')
    .directive('tsScope', [function () {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                visible: '=',
                show: '&'
            },
            template: [
                '<div>',
                '<p>{{title}}</p>',
                '<button ng-click="show(visible)">Show</button>',
                '</div>'
            ].join(''),
            link: function (scope, el, attrs) {
                scope.show = function (visible) {
                    scope.visible = visible ? !visible : visible;
                }
            }
        };
    }]);
