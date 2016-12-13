(function() {

    var controllers = angular.module("blog.controllers", []);

    controllers.controller("BlogController", ["API_URL", "$http", "$scope", function(API_URL, $http, $scope) {

        $http.get(API_URL)
            .then(function(res) {
                $scope.posts = res.data;
            });

    }]);

    controllers.controller("PostController", ["API_URL", "$routeParams", "$http", "$scope", function(API_URL, $routeParams, $http, $scope) {
        
        $http.get(API_URL + "/" + $routeParams.id)
            .then(function(res) {
                $scope.post = res.data;
            });
    
    }]);

})();