app.controller('UserController',function($scope,UserService,$location){
	$scope.message=''
	$scope.registerUser=function(){
		UserService.registerUser($scope.user)
		.then(function(response){
			console.log(response.status);
			console.log(response.data)
			$scope.message="Registered Successfully... Please login again"
			$location.path('/login')
		},function(response){
			console.log(response.status)
			console.log(response.data)
			$scope.message=response.data.message
			$location.path('/register')
		})
	}
	
	$scope.login=function(){
		UserService.login($scope.user)
		.then(function(response){
			console.log(response.status)
			$location.path('/home')
		},function(response){
			console.log(response.status)
			$location.path('/login')
		})
	}
	
})