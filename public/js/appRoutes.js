'use strict';


// Declare app level module which depends on filters, and services
var TodoApp = angular.module('TodoApp', ['ui.router']);

TodoApp.config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainController',
                templateUrl: 'views/home.html'
            })
            .state('nerds', {
                url: '/nerds',
                templateUrl: 'views/nerd.html',
                controller: 'NerdController'
            })
       }
  ]
)