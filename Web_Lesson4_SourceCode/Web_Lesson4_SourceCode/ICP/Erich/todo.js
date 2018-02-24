angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = ['hehexd','hi'];


    // Write code to push new item
    $scope.submitNewItem = function () {
        if($scope.inputString != undefined && $scope.inputString != null){
            $scope.items.push($scope.inputString);
            console.log($scope.items);
            $scope.items;
            $scope.inputString = null;
        }
    };

    // Write code to complete item
    $scope.completeItem = function (index) {

    };

    // Write code to delete item

    $scope.deleteItem = function (index) {
        if($scope.items[index].checked){

        }
        $scope.check =false;
        $scope.items.splice(index,1);
        console.log($scope.items)
    };

    //reset form
    $scope.resetForm = function(form){
        $scope.form = {};
    }
}]);


