(function() {

    var controllers = angular.module("blog.controllers", []);

    controllers.controller("BlogController", ["API_URL", "$http", "$scope", function(API_URL, $http, $scope) {

        $http.get(API_URL)
            .then(function(res) {
                $scope.posts = res.data;
            });

    }]);

    controllers.controller("PostController", ["$http", "$scope", function($http, $scope) {

    

    }]);

})();