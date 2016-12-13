(function() {

    var blog = angular.module("blog", ["ngRoute", "blog.controllers"]);

    blog
        .constant("API_URL", "https://jsonplaceholder.typicode.com/posts")
        .config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {

            // Zapisuje w pamięci
            $httpProvider.defaults.cache = true;

            $routeProvider
            .when("/", {
                controller: "BlogController",
                templateUrl: "views/blog.html"
            })
            .when("/blog/:id", {
                controller: "PostController",
                templateUrl: "views/post.html"
            })
            .otherwise({
                redirectTo: "/"
            });

        }]);

})();