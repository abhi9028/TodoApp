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
            .state('todos', {
                url: '/todos',
                templateUrl: 'views/todos.html',
                controller: 'TodosController'
            })

            .state('todos_new', {
                url: '/todos/new',
                templateUrl: 'views/new_todo.html',
                controller: 'NewTodoController'
            })
       }
  ]
)