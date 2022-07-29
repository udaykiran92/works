var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.list = [
    {
      category: "Apples",
      id: 1,
      quantity: 100,
      desc: "Apple  a day keeps doctor away",
      Image: "../images/apple.jpg",
      price: "60rs",
    },
    {
      category: "Bnananas",
      id: 2,
      quantity: 150,
      desc: "instent energy givers",
      Image: "../images/bananas.jpg",
      price: "90rs",
    },
    {
      category: "Dragonfruits",
      id: 3,
      quantity: 20,
      desc: "China special",
      Image: "../images/dragonfruit.jpg",
      price: "40rs",
    },
    {
      category: "Grapes",
      id: 4,
      quantity: 1,
      desc: "Good for health",
      Image: "../images/grapes.jpg",
      price: "70rs",
    },
    {
      category: "Guavas",
      id: 5,
      quantity: 500,
      desc: "sugar controller",
      Image: "../images/guva.jpg",
      price: "40rs",
    },
    {
      category: "Kiwis",
      id: 6,
      quantity: 20,
      desc: "seasonal fruit",
      Image: "../images/kiwi.jpg",
      price: "60rs",
    },
    {
      category: "Oramnges",
      id: 7,
      quantity: 1,
      desc: "Water-container",
      Image: "../images/Orange.jpg",
      price: "90rs",
    },
    {
      category: "Pineapples",
      id: 8,
      quantity: 20,
      desc: "Belly cleaner",
      Image: "../images/pineapple.jpg",
      price: "80rs",
    },
    {
      category: "Pomogranates",
      id: 9,
      quantity: 200,
      desc: "blood increaser",
      Image: "../images/pomo.jpg",
      price: "70rs/kg",
    },
    {
      category: "Papayas",
      id: 10,
      quantity: 1,
      desc: "good for sugar patients",
      Image: "../images/ppya.jpg",
      price: "55rs/kg",
    },
    {
      category: "Sapotas",
      id: 11,
      quantity: 250,
      desc: "short and sweet",
      Image: "../images/sapota.jpg",
      price: "50rs/kg",
    },
    {
      category: "Watermelons",
      id: 12,
      quantity: 120,
      desc: "Summer special",
      Image: "../images/wtrmln.jpg",
      price: "50rs",
    },
    
  ];
  $scope.bag = [];
  $scope.message = "";
  $scope.isVisible = false;
  $scope.show = function (item) {
    $scope.isVisible = $scope.isVisible ? false : true;
  };
  $scope.store = function (item) {
    if (item) {
      $scope.bag.push({
        category: item.category,
        desc: item.desc,
        quantity: item.quantity,
        price: item.price,
      });
    }
  };

  $scope.move = function (item) {
    if (item) {
      $scope.bag.push({
        category: item.category,
        quantity: item.quantity,
        desc: item.desc,
        price: item.price,
        Image: item.Image,
      });
      $scope.list.splice($scope.buyItems.indexOf(item), 1);
    }
  };

  $scope.clearCart = function () {
    $scope.bag.length = 0;
  };

  $scope.removeItem = function (item) {
    var index = $scope.bag.indexOf(item);
    $scope.bag.splice(index, 1);
  };
});

app.filter("searchFor", function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr;
    }
    var result = [];
    searchString = searchString.toLowerCase();
    angular.forEach(arr, (item) => {
      if (item.category.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }
    });
    return result;
  };
});