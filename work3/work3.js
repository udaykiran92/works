var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      section: 'Dress',
      id: 1,
      name: 'laxminarayana',
      desc: 'laxminarayanadfsklfje',
      Image: 'image url',
      price: 'product pfjlksdjfsdjfoijfrice',
    },
    {
      section: 'men|boys',
      id: 2,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'men|boys',
      id: 3,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'men|boys',
      id: 4,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'men|boys',
      id: 5,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'men|boys',
      id: 6,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'men|boys',
      id: 7,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 8,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 9,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 10,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 11,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 12,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 13,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'womens|girls',
      id: 14,
      name: 'product name',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
    {
      section: 'Soft-drinks',
      id: 15,
      name: 'sprite',
      desc: 'product description',
      Image: 'image url',
      price: 'product price',
    },
  ]
  $scope.foundList = []
  $scope.message = ''
  $scope.isVisible = false
  $scope.show = function (ite) {
    $scope.isVisible = $scope.isVisible ? false : true
  }
})

app.filter('searchFor', function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr
    }
    var result = []
    searchString = searchString.toLowerCase()
    angular.forEach(arr, (item) => {
      if (item.section.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item)
      }
    })
    return result
  }
})
