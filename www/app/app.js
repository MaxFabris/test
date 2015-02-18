angular
    .module('test', [
        // 'ngRoute',
        'ui.router',
        'test.controllers',
        'test.directives',
        'test.filters',
        'test.services'
    ])
    .constant('CONFIG', {
        url: "/....questo è un url...",
        port: 12345
    })
/*    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.defaults.headers.common['Accept'] = 'application/xml';

        $routeProvider
            .when('/:userId/:repoId', { // /#/userid/repoid
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/404', {
                templateUrl: 'templates/404.html'
            })
            .otherwise('/404');
    }])*/
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', { // /#/userid/repoid
                url: '/:userId/:repoId',
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .state('home.user', { // /#/userid/repoid/user
                url: '/:user',
                templateUrl: 'templates/main.user.html'
            });

        $urlRouterProvider.otherwise('/404');

    }])
    .run(['CONFIG', function (CONFIG) {
        console.log('Hello world!');
        console.log(CONFIG.url);
    }]);