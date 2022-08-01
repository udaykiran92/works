var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      image: 'images/chivas_regal.jpg',
      section: 'brandy',
      id: 1,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      section: 'brandy',
      id: 2,
      name: 'Hennessy',
      desc: 'Best for Parties in the Night Time',
      image: 'images/hennessy.jpg',
      price: '1400',
    },
    {
      section: 'brandy',
      id: 3,
      name: 'Martell',
      desc: 'Martell is the most drinkable brand',
      image: 'images/martell.jpg',
      price: '1550',
    },
    {
      section: 'brandy',
      id: 4,
      name: 'Mc Dowelles',
      desc: 'The most Preferd Brandy for parties',
      image: 'images/mcdowells.jpg',
      price: '1150',
    },
    {
      section: 'brandy',
      id: 5,
      name: 'Remy Martin',
      desc: 'Remy Martin is the best selling Brandy',
      image: 'images/remy martin.jpg',
      price: '1050',
    },
    {
      section: 'whisky',
      id: 6,
      name: 'The Glenvivet',
      desc: 'The smoothest Whisky for drinking ',
      image: 'images/the_glenlivet.jpg',
      price: '4000',
    },
    {
      section: 'whisky',
      id: 7,
      name: 'Black Label',
      desc: 'The most Prefred whisky by indians',
      image: 'images/black_label.jpg',
      price: '3500',
    },
    {
      section: 'whisky',
      id: 8,
      name: 'Black Velvet',
      desc: 'Best Night Occations drinking Whisky',
      image: 'images/black_velvet.jpg',
      price: '600',
    },
    {
      section: 'whisky',
      id: 9,
      name: 'Blenders Pride',
      desc: 'Most popular Whisky in india ',
      image: 'images/blender_pride.jpg',
      price: '900',
    },
    {
      section: 'whisky',
      id: 10,
      name: 'Jack Danels',
      desc: 'The best party drink is jack',
      image: 'images/jack_danels.jpg',
      price: '800',
    },
    {
      section: 'rum',
      id: 11,
      name: 'Old Monk',
      desc: 'Best drink for get together ',
      image: 'images/oldmonk.jpg',
      price: '1800',
    },
    {
      section: 'rum',
      id: 12,
      name: 'Contessa',
      desc: 'Reserved classic officailly for drinks',
      image: 'images/contessa.jpg',
      price: '1000',
    },
    {
      section: 'rums',
      id: 13,
      name: 'Cai Rum',
      desc: 'The best Drink in Winter Times',
      image: 'images/cairum.jpg',
      price: '2200',
    },
    {
      section: 'rum',
      id: 14,
      name: 'Equiano',
      desc: 'Offical Party Drink for classic peoples',
      image: 'images/equiano.jpg',
      price: '1000',
    },
    {
      section: 'rum',
      id: 15,
      name: 'Goslings',
      desc: 'The beast of the liquors',
      image: 'images/goslings.jpg',
      price: '2850',
    },
  ]
  $scope.foundList = []
  $scope.message = ''
  // $scope.isVisible = false
  // $scope.show = function () {
  //   $scope.isVisible = $scope.isVisible ? fasle : true
  // }

  $scope.store = function(item){
    if(item){
    $scope.foundList.push({section:item.section, id:item.id, name:item.name, desc:item.desc, image:item.image, price:item.price})
    // console.log($scope.foundList)
   }
 
  }
  $scope.total = 0;
  $scope.setTotals = function(cart) {
    if(cart){
      $scope.total += cart.price;
       console.log($scope.total)
    }
  }

  $scope.remove = function(cart){
    if(cart){
      $scope.foundList.splice($scope.foundList.indexOf(cart),1);
      // $scope.total -= cart.price;
    }
  }
  // $scope.searchText = function(section){
  //   if($scope.searchText !== undefined){
  //     if(section.name.toLowerCase().indexOf($scope.searchText.toLowerCase()>-1)){
  //       return section;
  //     }
  //   }
  // }
  
});


  
// app.config(function($routerProvider){
//   $routerProvider
//   .when('/foundlist',{
//     templateUrl: "cart.html"
//   });
// })



// app.filter('section', function(){
//   return function(section){
//     if(section == 'men'){
//       return searchItems.section;
//     }
//     else{
//       return searchItems.section
//     }
//   }
// })


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
