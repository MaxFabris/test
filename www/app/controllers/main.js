angular.module('test.controllers')
    // .controller('MainCtrl', ['$scope', '$state', /*'$routeParams',*/ '$route', function ($scope, $state, /*$routeParams,*/ $route) {
    .controller('MainCtrl', ['$scope', '$state', '$route', function ($scope, $state, $route) {
        //$scope.params = $routeParams;
        $scope.params = $state.params;
        console.log($scope.params);
    }]);