(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.itemsCheck = function () {

  var str = $scope.items;

    if(!angular.isUndefined(str)){

      var words = str.split(",");

        if(words == ""){
          $scope.message1 = "Please enter data first";
          $scope.items1 = true;
          $scope.items2 = false;
          $scope.items3 = false;
        }
        else if(words.length>3){
        $scope.message2 = "Too much!";
        $scope.items2 = true;
        $scope.items1 = false;
        $scope.items3 = false;
      }
      else if(words.length<=3 && words.length>0){
        $scope.message3 = "Enjoy!";
        $scope.items3 = true;
        $scope.items2 = false;
        $scope.items1 = false;
      }
    }
    else if(angular.isUndefined(str)){
      $scope.message1 = "Please enter data first";
    }
  };
}
}) ();
