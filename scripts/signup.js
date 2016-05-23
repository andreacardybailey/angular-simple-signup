var app = angular.module('simpleSignup', []);
app.directive('optIn', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/form.html',
    transclude: true
  };
});