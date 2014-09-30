angular.module('rtcForay').directive('foVideo', function () {
    return {
        controller: 'foVideoCtrl',
        restrict: 'E',
        scope: {
            constraints: '=constraints'
        },
        templateUrl: 'html/templates/fo-video.html'
    };
});