var app = angular.module("myApp", []);
app.controller("cartController", function ($scope) {
  $scope.boughtItems = [];
  $scope.message = "";
  $scope.message1 = "";

  $scope.buyItems = [
    { name: "GoodDay", quntity: 5 },
    { name: "Banana", quntity: "1kg" },
    { name: "Apples", quntity: 5 },
    { name: "Kiwi", quntity: 3 },
    { name: "Lays", quntity: 5 },
    { name: "Bingo", quntity: 5 },
    { name: "Dark Fantacy", quntity: 2 },
    { name: "Eclairs", quntity: 1 },
    { name: "koffiko", quntity: 1 },
    { name: "Dairy milk", quntity: 2 },
  ];

  $scope.buy = function (item) {
    if (item) {
      $scope.boughtItems.push({ name: item.name, quntity: item.quntity });
      $scope.buyItems.splice($scope.buyItems.indexOf(item), 1);
    }

    $scope.len = $scope.buyItems.length;
    $scope.len1 = $scope.boughtItems.length;
    if ($scope.len == 0) $scope.message = "buy items are empty";
  };
  $scope.remove = function (item1) {
    if (item1) {
      $scope.buyItems.push({ name: item1.name, quntity: item1.quntity });
      $scope.boughtItems.splice($scope.buyItems.indexOf(item1), 1);
    }
  };
});