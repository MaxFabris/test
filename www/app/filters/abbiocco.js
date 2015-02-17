angular.module('test.filters')
    .filter('abbiocco', [function() {
        return function (value, counter) {
            counter = counter || 10;
            var zCounter = '';
            for (var i = 0; i < counter; i++) zCounter += 'z';
            return value + ' ' + zCounter;
        }
    }]);