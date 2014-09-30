angular.module('rtcForay').controller('foVideoCtrl', ['$scope', function ($scope) {
    $scope.constraints = {
        video:true
    };

    $scope.videoCss = {
        "-webkit-filter": ""
    };
    $scope.cssObj = {
        filter :{
            saturation: 0
        }
    };

    $scope.onVideoCssChange = function () {
        $scope.videoCss['-webkit-filter'] = "saturate(" + $scope.cssObj.filter.saturation + "%)";
        console.log($scope.videoCss['-webkit-filter']);
    };

    $scope.showVideo = function () {
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        function successCallback(localMediaStream) {
            window.stream = localMediaStream; // stream available to console
            var video = document.querySelector("video");
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        }

        function errorCallback(error){
            console.log("navigator.getUserMedia error: ", error);
        }

        navigator.getUserMedia($scope.constraints, successCallback, errorCallback);
    };


}]);