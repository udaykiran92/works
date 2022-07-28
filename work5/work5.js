var app=angular.module('check',[]);
 app.controller('ourController',function($scope){
    $scope.name="";
    $scope.msg="";
    $scope.surname="";
    $scope.msgs="";
    $scope.email="";
    $scope.mails="";
    $scope.password="";
    $scope.message="";
    $scope.number= '';
    $scope.no="";
    $scope.check=function(){
    
        if($scope.password.length<8){
                $scope.message="length should be more than 8 and must contain special charecter";
        }else{
            $scope.message="you entered correct password";
        }
        if($scope.name==""){
            $scope.msg="plese enter your name";
        }else{
            $scope.msg="entered correctly";
        }
        if($scope.email.indexOf('@')> -1) {
            $scope.mails="correct";
        }
   



    }
 })