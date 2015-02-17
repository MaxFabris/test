angular.module('test.controllers')
    .controller('TestCtrl', ['$scope', '$filter', '$http', '$q', '$location', '$interpolate', 'session', 'dateFilter', function ($scope, $filter, $http, $q, $location, $interpolate, session, dateFilter) {
        $scope.message = 'Hello world';
        $scope.today = dateFilter(new Date(), 'dd/MM/yyyy');
        $scope.today2 = new Date();
        $scope.today3 = $filter('date')(new Date(), 'MM/dd/yyyy');
        $scope.amount = $filter('currency')(9350.235, '€', 2);
        $scope.obj = {
            prop: 'stringa',
            arr: [10, 20, 'stringa in array'],
            nested: {
                a: 10,
                b: 'ciao'
            }
        };
        $scope.list = [
            {name: 'Pluto', age: 159},
            {name: 'Pluta', age: 59},
            {name: 'Plutu', age: 19},
            {name: 'Plute', age: 1},
            {name: 'Pluti', age: 9}
        ];
        $http.get('/developers.json')
            .success(function(developers) {
                console.log(developers);
            })
            .error( function (response) {
                console.trace(response);
            });

        function asyncFn () {
            console.log('asyncFn');
            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(10);
            }, 1000);

            return dfd.promise;
        }

        function async2Fn (data) {
            console.log('async2Fn', data);
            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(20);
            }, 3000);

            return dfd.promise;
        }


        function async3Fn (data) {
            console.log('async3Fn', data);
            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(30);
            }, 6000);

            return dfd.promise;
        }

        asyncFn()
            .then(async2Fn)
            .then(async3Fn)
            .then(function (data) {
                console.log('TERMINATA', data);
            })
            .catch(function (err){
                console.trace(err);
            });

        console.log($location.url(),
            $location.host(),
            $location.port());

        var data = {
            title: 'pippo'
        };
        var tpl = 'Title: {{title}}';
        console.log($interpolate(tpl)(data));

        console.log(session.user);
        setTimeout(function () {
            session.user = {
                username: 'pippo',
                role: 'admin'
            };
        }, 2000);

        session.getUserData(10)
            .then(function (user) {

            }, function (err) {

            });
    }]);