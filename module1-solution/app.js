(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
  $scope.checkItems = function () {
     var strEntered = $scope.items;
     if(angular.isDefined(strEntered)){

     var parsedStr = strEntered.split(',');
     var numberEntered = parsedStr.length;
     var nullCheck = 'True';

     for (var i = 0; i < numberEntered; i++) {
       var currStr = parsedStr[i];
       if(currStr.length > 0){
         nullCheck = 'False';
       }
}

     if(nullCheck == 'False'){


     if(numberEntered > 3) {
       $scope.message = "Too Much!";
     }
     else {
       $scope.message = "Enjoy!";
     }


   }else{
     $scope.message = "Nice Try...Please Enter some Items!!!";
   }
 }else {

   $scope.message = '';
   $scope.lunchform.submitted = true;

 }
   };

  }


})();
