angular
    .module('test', [
        'ngRoute',
        'test.controllers',
        'test.directives',
        'test.filters',
        'test.services'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/:userId/:repoId', { // /#/userid/repoid
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/404', {
                templateUrl: 'templates/404.html'
            })
            .otherwise('/404');
    }])
    .run(function () {
        console.log('Hello world!');
    });