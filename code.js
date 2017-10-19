var firstApp = angular.module('creative', []);
firstApp.controller('controlOne', function($scope) {
  $scope.one = 'First';
  $scope.reply = '';
  $scope.start = function() {
    $scope.message = 'Welcome, ' + $scope.one + '! Ready To Play?';
      $scope.show = true;
    
  };
  $scope.answerYes = function() {
      if($scope.one == 'First'){
          $scope.message = 'Please Enter Your name first!';
      }
      else{
          $scope.reply = 'Awesome, choose a cup! A, B or C'; 
          $scope.show2 = true;
      }
    
     
  };
    $scope.answerNo = function() {
    if($scope.one == 'First'){
        $scope.message = 'Please Enter Your name first!';
    }
    else{
         $scope.reply = 'Goodbye then!';
    }
   
     
  };
});
