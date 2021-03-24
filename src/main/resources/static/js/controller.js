/**
 * 
 */

app.controller('listUserController',
				function($scope, $http, $location, $route) {
					//retrieves list of users data from server
					$http({
						method : 'GET',
						url : 'http://localhost:8080/api/user/'
					}).then(function(response) {
						$scope.users = response.data;
					});
					//provides path and id for editing user
					$scope.editUser = function(userId) {
						$location.path("/update-user/" + userId);
					}
					//provides path and id for going to the server and deleting a user
					$scope.deleteUser = function(userId) {
						$http({
							method : 'DELETE',
							url : 'http://localhost:8080/api/user/' + userId
						})
								.then(function(response) {
											$location.path("/list-all-users");
											$route.reload();
										});
					}
				});

app.controller('registerUserController', function($scope, $http, $location,	$route) {

	$scope.submitUserForm = function() {
		//sends data to the server via a post method to create user
		$http({
			method : 'POST',
			url : 'http://localhost:8080/api/user/',
			data : $scope.user,
			//calls the list all users to display the list of users
			}).then(function(response) {
			$location.path("/list-all-users");
			$route.reload();
			//handles the error
		}, function(errResponse) {
			$scope.errorMessage = errResponse.data.errorMessage;
		});
	}
	//reset function
	$scope.resetForm = function() {
		$scope.user = null;
	};
});

app.controller('usersDetailsController',
				function($scope, $http, $location, $routeParams, $route) {

					$scope.userId = $routeParams.id;
					//Get a specific user
					$http({
						method : 'GET',
						url : 'http://localhost:8080/api/user/' + $scope.userId
					}).then(function(response) {
						$scope.user = response.data;
					});
					
					//function to submit form data using the $scope directive
					$scope.submitUserForm = function() {
						$http({
							method : 'PUT',
							url : 'http://localhost:8080/api/user/' + $scope.userId,
							data : $scope.user,
						})
								.then(function(response) {
											$location.path("/list-all-users");
											$route.reload();
										},
										function(errResponse) {
											$scope.errorMessage = "Error while updating User - Error Message: '"
													+ errResponse.data.errorMessage;
										});
					}
				});