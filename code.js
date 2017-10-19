var firstApp = angular.module('creative', []);
firstApp.controller('controlOne', function($scope) {
  $scope.one = 'First';
  $scope.reply = '';
  $scope.answer = '';
  $scope.url = '';
  $scope.start = function() {
    $scope.message = 'Welcome, ' + $scope.one + '! Ready To Play?';
      $scope.show = true;
    
  };
  $scope.answerYes = function() {
      if($scope.one == 'First'){
          $scope.message = 'Please Enter Your name first!';
      }
      else{
          $scope.reply = 'Awesome, hit play! To begin'; 
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

  $scope.submitAnswer = function() {
	var compare = $scope.answer.toUpperCase();
 	if(compare == 'C'){
		 $scope.finalMessage ='You Win!!';
		 $scope.show3 = true;
		
	}

	else if(compare == 'A'){

		 $scope.finalMessage ='You Loose';
  		$scope.show4 = true;

	}
	else if(compare == 'B'){
	 $scope.finalMessage ='You Loose';
	 $scope.show5 = true;
	}
	else{
		$scope.finalMessage ='Please enter A, B, or C';
	}

  };
});
