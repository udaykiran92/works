var app=angular.module('ourApp', []);
app.controller('ourController', function($scope){
  $scope.inventory=[
    {
      
      image: "../images/barbell set.jpg",
      section: "Muscle",
      id: 1,
      name: 'dumbellset',
      desc: 'The best muscle increaser',
      price: '1200',
    },
    {
      
      image: '../images/dumbellsets.png',
      section: 'Muscle',
      id: 2,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image: "../images/elliptical.jpg",
      section: 'Muscle',
      id: 3,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image: "../images/grip.jpg",
      section: 'Muscle',
      id: 4,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image:"../images/kettellball.png",
      section: 'Bones',
      id: 5,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image:"../images/lowimpact.jpg",
      section: 'Bones',
      id: 6,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image: "../images/punchbag.jpg",
      section: 'Bones',
      id: 7,
      name: 'Chivas Regal',
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image: "../images/row-machine.jpg",
      section: 'Full-body',
      id: 8,
      name: "",
      desc: 'The best Brandy in the Liquor',
      price: '1200',
    },
    {
      
      image: "../images/spinbike.jpg",
      section: 'Full-body',
      id: 9,
      name: "Ellipticals",
      desc: "Boosts your stamina and cardio capacity",
      price: '1200',
    },
    {
      
      image: "../images/treadmill.jpg",
      section: 'Full-body',
      id: 10,
      name: "Rowing-Machine",
      desc: "It's great for heart,lungs & builds power and endurance.",
      price: '1200',
    },
    {
      
      image: "../images/gym.jpg",
      section: "cardio",
      id: 11,
      name: "Spin-Bike",
      desc: "Boosts cardio fitness",
      price: '1200',
    },
    {
      
      image:"../images/stationbikes.jpg",
      section: 'Muscle',
      id: 12,
      name: "Low-impacttredmill",
      desc: "Tred-mill for elderones.",
      price: '1200',
    },
    {
      
      image: "../images/bench-press.jpg",
      section: 'Abs',
      id: 13,
      name: 'Bench-pressroller',
      desc: "Work upon the upper body musculature.",
      price: '1200',
    },
    {
      
      image:"../images/medicine-ball.jpeg",
      section: 'Whole-body',
      id: 14,
      name: 'medicineball',
      desc: "Build core strength",
      price: '1000',
    },
    {
      
      image: "../images/others.jpg",
      section: 'others',
      id: 15,
      name: 'Hand-grips',
      desc: "Wrist controller",
      price: '200',
    },
  ]
  $scope.searchedList=[]
  $scope.message=''
//  $scope.isvisible=false
  //$scope.show=function(){
    //$scope.isvisible=$scope.isvisible ? false:true
  //}
  $scope.gym=function(thing){
    if(thing){
      $scope.searchedList.push({section:thing.section, id:thing.id, name:thing.name, desc:thing.desc, image:thing.image, price:thing.price})
    }
  }
  $scope.total=0;
  $scope.setTotal=function(bag){
    if(bag){
      $scope.total+=bag.price;
      //return total
      console.log($scope.total)
    }
  }
  $scope.smash=function(bag){
    if(bag){
      $scope.searchedList.splice($scope.searchedList.indexOf(bag),1);
    }
  }
});


app.filter('searchFor', function () {
  return function (arr, searchElement) {
    if (!searchElement) {
      return arr
    }
    var result = []
    searchElement = searchElement.toLowerCase()
    angular.forEach(arr, (thing) => {
      if (thing.section.toLowerCase().indexOf(searchElement) !== -1) {
        result.push(thing)
      }
    })
    return result
  }
})
