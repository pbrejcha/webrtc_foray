rtcForay.controller('foVideoCtrl', ['$scope', function ($scope) {
    $scope.constraints = {
        video:true
    };
    $scope.error = false;
    $scope.videoCss = {
        "-webkit-filter": "",
        "hue-rotate": ""
    };
    $scope.filter = {
        'saturation': 50,
        'hueRotate': 0,
        'opacity': 1
    };

    $scope.onVideoCssChange = function () {
        console.log($scope.filter);
        $scope.videoCss['-webkit-filter'] =
            "saturate(" + $scope.filter.saturation + "%)" +
            "hue-rotate(" + $scope.filter.hueRotate + "deg)" +
            "opacity(" + $scope.filter.opacity + ")";
    };

    $scope.showVideo = function () {
        $scope.error = false;
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        function successCallback(localMediaStream) {
            window.stream = localMediaStream; // stream available to console
            var video = document.querySelector("video");
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        }

        function errorCallback(error){
            $scope.error = true;
            console.log("navigator.getUserMedia error: ", error);
        }

        navigator.getUserMedia($scope.constraints, successCallback, errorCallback);
    };


}]);