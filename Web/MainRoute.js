var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {templateUrl: 'Home.html'});
        $routeProvider.when('/Login', {templateUrl: 'Login.html', controller: 'loginCtrl'});
        $routeProvider.when('/Register', {templateUrl: 'Register.html', controller: 'registerCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);