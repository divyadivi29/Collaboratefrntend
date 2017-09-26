var myApp=angular.module("myApp",['ngRoute'])

myApp.config(function($routeProvider)
		{
	     $routeProvider.when("/",{templateUrl:"User/Login.html"})
	                   .when("/Login",{templateUrl:"User/Login.html",control})
		               .when("/Register",{templateUrl:"User/Register.html",})
		});

myApp.controller("UserController",function($scope)
		{
        	$scope.message="LoginPage";
		});s