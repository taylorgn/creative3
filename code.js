var firstApp = angular.module('creative', []);
firstApp.controller('controlOne', function($scope) {
  $scope.one = 'Name';
  $scope.reply = '';
  $scope.answer = '';
  $scope.url = '';
  $scope.start = function() {
    $scope.message = 'Welcome, ' + $scope.one + '! Ready To Play?';
      $scope.show = true;
    
  };
  $scope.answerYes = function() {
      if($scope.one == 'Name'){
          $scope.message = 'Please Enter Your name first!';
      }
      else{
          $scope.reply = 'Awesome, hit play! To begin'; 
          $scope.show2 = true;
      }
    
     
  };
    $scope.answerNo = function() {
    if($scope.one == 'Name'){
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
		 $scope.show2 = false;
		 $scope.show4 = false;
	   	 $scope.show5 = false;		
		 $scope.show = false;
                 $scope.show3 = true;
		
	}

	else if(compare == 'A'){

		 $scope.finalMessage ='You Loose';
  		$scope.show4 = true;
		$scope.show3 = false;
		$scope.show5 = false;
		$scope.show = false;
                $scope.show2 = false;

	}
	else if(compare == 'B'){
		 $scope.finalMessage ='You Loose';
		 $scope.show5 = true;
		 $scope.show3 = false;
		 $scope.show4 = false;
                 $scope.show = false;
                 $scope.show2 = false;

	}
	else{
		$scope.finalMessage ='Please enter A, B, or C';
	}

	$scope.finalButton = true;
  };
 $scope.restart = function(){
		 $scope.finalMessage = ''
		 $scope.show5 = false;
                 $scope.show3 = false;
                 $scope.show4 = false;
                 $scope.show = true;
                 $scope.show2 = true;
		 $scope.finalButton = false;
	
	

};


});
