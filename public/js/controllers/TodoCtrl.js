// public/js/controllers/TodoCtrl.js
TodoApp.controller('TodosController', function($scope, TodoService) {

		console.log(TodoService)
    $scope.tagline = 'Nothing beats a pocket dfgfd protector!';
    $scope.todos_list = TodoService.get();
    console.log($scope.todos_list)

});


TodoApp.controller('NewTodoController', function($scope, TodoService, $state) {

    $scope.todo = {}
    $scope.save = function () {
      TodoService.create({todo: $scope.todo}, function(response) {
       console.log("hhhh")
       $state.go('todos');
      }, function(error) {
        console.log(error)
      });
  	}

});