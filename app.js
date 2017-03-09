var app = angular.module('myApp', []);

app.controller('FirstCtrl', function($scope) {
    if (localStorage.getItem('todos')) {
        $scope.todos = JSON.parse(localStorage.getItem('todos'));
    } else {
        $scope.todos = [];
    }

    $scope.add = function(todo) {
        $scope.todos.push({
            todo: $scope.message,
            done: false
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        // console.log($scope.todos);
    }

    $scope.delete = function($index) {
        $scope.todos.splice($index, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        // console.log($index);
    }
    $scope.done = function($index) {
        $scope.todos[$index].done = true;
        localStorage.setItem('todos', JSON.stringify($scope.todos));

    }
    $scope.mojniz = [];

    $scope.doneRemove = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].done === true) {
                var index = $scope.todos.indexOf($scope.todos[i]);
                $scope.mojniz.push(index);
            }
        }
        for (var i = $scope.mojniz.length - 1; i >= 0; i--) {
            $scope.todos.splice($scope.mojniz[i], 1);
        }
        $scope.mojniz = [];
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

})
