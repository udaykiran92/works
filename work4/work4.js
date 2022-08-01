var app=angular.module('ourApp', []);
app.controller('ourController', function($scope){
  $scope.inventory=[
    {
      
      image: "../images/barbell set.jpg",
      section: "Muscle",
      id: 1,
      name: 'Barbell',
      desc: 'The best muscle increaser',
      price: '700',
    },
    {
      
      image: '../images/dumbellsets.png',
      section: 'Muscle',
      id: 2,
      name: 'Dumbellsets',
      desc: 'Good to improve muscles',
      price: '500',
    },
    {
      
      image: "../images/elliptical.jpg",
      section: 'Muscle',
      id: 3,
      name: 'Ellipticals',
      desc: 'Boosts your stamina and cardio capacity.',
      price: '5000',
    },
    {
      
      image: "../images/grip.jpg",
      section: 'Muscle',
      id: 4,
      name: 'Grips',
      desc: 'Enhances muscle power',
      price: '200',
    },
    {
      
      image:"../images/kettellball.png",
      section: 'Muscle',
      id: 5,
      name: 'kettelball',
      desc: 'be strict while working',
      price: '1200',
    },
    {
      
      image:"../images/lowimpact.jpg",
      section: 'Full-body',
      id: 6,
      name: 'Lowimpactrunner',
      desc: 'treadmill for everyone',
      price: '12000',
    },
    {
      
      image: "../images/punchbag.jpg",
      section: 'wrist',
      id: 7,
      name: 'punchbag',
      desc: 'Good for wrestlers and boxers',
      price: '1200',
    },
    {
      
      image: "../images/row-machine.jpg",
      section: 'Full-body',
      id: 8,
      name: "Row-machine",
      desc: 'For hand-power and muscle power',
      price: '1200',
    },
    {
      
      image: "../images/spinbike.jpg",
      section: 'Full-body',
      id: 9,
      name: "Spinbike",
      desc: "Boosts your stamina and cardio capacity",
      price: '1200',
    },
    {
      
      image: "../images/treadmill.jpg",
      section: 'Full-body',
      id: 10,
      name: "Tredmill",
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
      name: "Station-bikes",
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
      
      image:"../images/M Ball.jpg",
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
      name: 'OTHER EQUIPMENT',
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
