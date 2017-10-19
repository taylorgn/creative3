var firstApp = angular.module('creative', []);
firstApp.controller('controlOne', function($scope) {
  $scope.one = 'Name';
  $scope.reply = '';
  $scope.answer = '';
  $scope.url = '';
  $scope.start = function() {
      if($scope.one == 'Name' || $scope.one == ''){
          $scope.message = 'Please Enter Your name first!';
      }
      else{
      $scope.message = 'Welcome, ' + $scope.one + '! Ready To Play?';
      $scope.show = true;
      }
    
  };
  $scope.answerYes = function() {

          $scope.reply = 'Hit play to begin!'; 
          $scope.show2 = true;
    
     
  };
    $scope.answerNo = function() {

         $scope.reply = 'Goodbye then!';
     
  };

  $scope.submitAnswer = function() {
	var compare = $scope.answer.toUpperCase();
 	if(compare == 'C'){
		 $scope.finalMessage ='Watch Video:';
		 $scope.show2 = false;
		 $scope.show4 = false;
	   	 $scope.show5 = false;		
		 $scope.show = false;
         $scope.show3 = true;
		
	}

	else if(compare == 'A'){

        $scope.finalMessage ='Watch Video:';
  		$scope.show4 = true;
		$scope.show3 = false;
		$scope.show5 = false;
		$scope.show = false;
        $scope.show2 = false;
        $scope.lastButton = true;

	}
	else if(compare == 'B'){
		 $scope.finalMessage ='Watch Video:';
		 $scope.show5 = true;
		 $scope.show3 = false;
		 $scope.show4 = false;
         $scope.show = false;
         $scope.show2 = false;
         $scope.lastButton = true;
        
	}
	else{
		$scope.finalMessage ='Please enter A, B, or C';
	}

	
  };
 $scope.restart = function(){
		 $scope.finalMessage = ''
		 $scope.show5 = false;
         $scope.show3 = false;
         $scope.show4 = false;
         $scope.show = true;
         $scope.show2 = true;
		 $scope.lastButton = false;
         $scope.answer = '';
	
	

};


});
