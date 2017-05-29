var app = angular.module("app", [ 'ngRoute', 'ngCookies' ])
app.config(function($routeProvider) {
	$routeProvider.when('/register', {
		templateUrl : '_user/registerUser.html',
		controller : 'UserController'
	})
	
	//login
	.when('/login', {
		templateUrl : '_user/login.html',
		controller : 'UserController'
	})
	
	//home
	.when('/home', {
		templateUrl : '_home/home.html'
	})
	
	//uploadpicture
	.when('/profilepic', {
		templateUrl : '_user/profilepic.html'
	})
	
	//edituser
	.when('/edituser', {
		templateUrl : '_user/edituserform.html',
		controller : 'EditController'
	})

	// to post a new job
	.when('/postJob', {
		controller : 'JobController',
		templateUrl : '_job/createJob.html'
	})

	
	// to view all the jobs
	.when('/getAllJobs', {
		controller : 'JobController',
		templateUrl : '_job/jobsTitles.html'
	})

	
	// to view the job detail of a job
	.when('/jobDetail/:jobId', {
		controller : 'JobDetailController',
		templateUrl : '_job/jobDetail.html'
	})
	
	// to create a new blog
	.when('/createBlog',{
		controller:'BlogController',
		templateUrl:'_blog/createBlog.html'
	})
	
	
	// to view all blogs
	.when('/getAllBlogs',{
		controller:'BlogController',
		templateUrl:'_blog/listOfBlogs.html'
	})
	
	
	// to view the Blog detail of a blog
    .when('/getBlogDetails/:id',{
		controller:'BlogDetailController',
		templateUrl:'_blog/blogDetails.html'
	})
	
	// to view list of friends
	.when('/friendsList',{
		controller:'FriendController',
		templateUrl:'_friend/friendlist.html'
	})
	
	
	// to view list of pending firend requests
	.when('/pendingRequest',{
		controller:'FriendController',
		templateUrl:'_friend/pendingRequests.html'
	})
		// to view list of all users
	.when('/getAllUsers',{
		controller:'FriendController',
		templateUrl:'_friend/userslist.html'
	})
	// to chat
	.when('/chat',{
		controller:'ChatController',
		templateUrl:'_chat/chat.html'
	})
	
	
})
app.run(function($rootScope, $cookieStore, UserService, $location) {
	console.log('entering run method ')
	console.log($rootScope.currentUser)
	if ($rootScope.currentUser == undefined) {
		$rootScope.currentUser = $cookieStore.get("currentUser")
		console.log($rootScope.currentUser)
	}
	$rootScope.logout = function() {
		console.log('logout function')
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser')
		UserService.logout().then(function(response) {
			console.log("logged out successfully..");
			$rootScope.message = "Loggedout Successfully"
			$location.path('/login')
		}, function(response) {
			console.log(response.status);
		})
	}
})