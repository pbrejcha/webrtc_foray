var rtcForay = rtcForay ? rtcForay : angular.module('rtcForay', [])

    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.rtc = {
            name : 'RTC Foray'
        };
    }]);