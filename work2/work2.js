var app = angular.module("myApp", []);
app.controller("cartController", function ($scope) {
  $scope.boughtItems = [];
  $scope.message = "";
  $scope.message1 = "";


  $scope.buyItems = [
    { name: "groceries", quntity: 5 },
    { name: "clothes", quntity: 2 },
    { name: "books", quntity: 5 },
    { name: "vegitables", quntity: 3 },
    { name: "milk", quntity: 5 },
    { name: "honey", quntity: 5 },
    { name: "Gift-items", quntity: 2 },
    { name: "glasses", quntity: 1 },
    { name: "snacks", quntity: 1 },
    { name: "cookies", quntity: 2 },
  ];

  $scope.buy = function (item) {
    if (item) {
      $scope.boughtItems.push({ name: item.name, quntity: item.quntity });
      $scope.buyItems.splice($scope.buyItems.indexOf(item), 1);
    }

    $scope.len = $scope.buyItems.length;
    $scope.len1 = $scope.boughtItems.length;
    if ($scope.len == 0) $scope.message = "Shopping finished";
  };
  $scope.remove = function (item1) {
    if (item1) {
      $scope.buyItems.push({ name: item1.name, quntity: item1.quntity });
      $scope.boughtItems.splice($scope.buyItems.indexOf(item1), 1);
    }
  };
});