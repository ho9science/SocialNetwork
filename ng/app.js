	//create app Module
var app = angular.module('app',[]);
	

app.service('PostsSvc',function ($http){
	this.fetch = function(){
		return $http.get('/api/posts')
	}
	this.create = function (post){
		return $http.post('/api/posts',post)
	}
})
//PostsCtrl Module Create
// $scope DI
app.controller('PostsCtrl',function($scope, PostsSvc){
	//'Add Post' button clicked
	$scope.addPost = function(){
		// content existed
		if($scope.postBody){
			//add new content 
			PostsSvc.create({
				username:'hershey',
				body: $scope.postBody //user input

				}).success(function(post){

				$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}
	PostsSvc.fetch().success(function(posts){
		$scope.posts = posts
	})
})
