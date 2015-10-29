angular.module('craftApp', ['ngRoute']);


angular.module('craftApp').factory('mainFactory', ['$http', function($http){
	
	return {
		crafts : function(){
			return $http.get('/api/get-crafts')
		},
		//materials like above
	}

	// return {
	// 	crafts : crafts

	// }

}]) 

angular.module('craftApp')
	.service('authService', ['$http', '$location', function($http, $location){
		
		this.authCheck = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}
					
						
	}])

angular.module('craftApp')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl	:'/html/home.html',
			controller	:'mainController'
		})
		.when('/about', {
			templateUrl	:'/html/about.html',
			controller	:'mainController'
		})
		.when('/crafts/:craftsID', {
			templateUrl	:'/html/craft.html',
			controller	:'craftController'
		})
		.when('/submitacraft', {
			templateUrl	:'/html/craftform.html',
			controller	:'mainController'
		})
		.when('/login', {
			templateUrl	:'/html/login.html',
			controller	:'mainController'
		})
		.when('/signup', {
			templateUrl	:'/html/signup.html',
			controller	:'mainController'
		})
		.when('/craft', {
			templateUrl	:'/html/craft.html',
			controller	:'craftController'
		})
	}])

angular.module('craftApp').controller('mainController', ['$scope', '$http', '$routeParams', 'mainFactory', 'authService',  function($scope, $http, $routeParams, mainFactory, authService ) {
		console.log('AUTH', authService)
				
				authService.authCheck(function(user){
					console.log('USER!', user)
					$scope.user = user
				})
$scope.signUp = function(){
	$http.post('/signup', $scope.newUser)
}

$scope.login = function(){
	console.log("grenklgreni")
	$http.post('/login', $scope.loginUser).then(function(returnData){
		console.log(returnData)
	},function(error){
		console.log(error)
	})
}
//==============================================//
	$scope.materials = []

	var Material = function(materialName) {

		this.name = materialName;
	
		$scope.materials.push(this);
		
	}
	
	console.log($scope.materials)


	var pipeCleaners = new Material ('pipe cleaners')
	var glitter = new Material ('glitter')
	var pomPoms	= new Material ('pom poms')
	var feathers = new Material ('feathers')
	var cottonBalls = new Material ('cotton balls')
	var googlyEyes = new Material ('googly eyes')
	var sequins = new Material ('sequins')
	var string = new Material ('string')
	var yarn = new Material ('yarn')
	var crayons = new Material ('crayons')
	var markers = new Material ('markers')
	var coloredPencils = new Material ('colored pencils')
	var felt = new Material ('felt')
	var magazines = new Material ('magazines')
	var cardboard = new Material ('cardboard')
	var eggCartons = new Material ('egg cartons')
	var masonJars = new Material ("mason jars")
	var newspaper = new Material ('newspaper')
	var paperBags = new Material ('paper bags')
	var paper = new Material ('paper')
	var constructionPaper = new Material ('construction paper')
	var tissuePaper = new Material ('tissue paper')
	var coffeeFilters = new Material ('coffee filters')
	var paintBrushes = new Material ('paint brushes')
	var glue = new Material ('glue')
	var scissors = new Material ('scissors')
	var paperTowels = new Material ('paper towels')
	var scotchTape = new Material ('tape')
	var ductTape = new Material ('duct tape')
	var maskingTape = new Material ('masking tape')
	var contactPaper = new Material ('contact paper')
	var toiletPaperRolls = new Material ('toilet paper rolls')
	var aluminumFoil = new Material ('aluminum foil')
	var craftSticks = new Material ('craft sticks')
	var cardstock = new Material ('cardstock')
	var clothespins = new Material ('clothespins')
	var stickers = new Material ('stickers')
	var ribbon = new Material ('ribbon')
	var buttons = new Material ('buttons')
	var magnets = new Material ('magnets')
	var beads = new Material ('beads')
	var stencils = new Material ('stencils')
	var paint = new Material ('paint')
	var watercolors = new Material ('watercolors')
	var hotGlueGun = new Material ('hot glue gun')
	var modPodge = new Material ('mod podge')
	var woodFrames = new Material ('wood frames')
	var foam = new Material ('foam')
	var woodPallet = new Material ('wood pallet')
	var fabric = new Material ('fabric')
	var polyfill = new Material ('pollyfill')
	var thread	= new Material ('thread')
	var eucerinCream = new Material ('eucerin cream')
	var toddler = new Material ('toddler')
	var corkboard = new Material ('corkboard')
	var crochetHooks = new Material ('crochet hooks')
	var wineCorks = new Material ('corks')
	var wireHanger = new Material ('wire hanger')


//==============Alphabetical Order==================//
	$scope.materials.sort(function(a, b){
		if(a.name > b.name) {
			return 1;
		} else if (b.name > a.name){
			return -1;
		} else {
			return 0;
		}
	})


//====================Dropdowns=====================//

	$scope.projectResources = []

	$scope.projectMaterials = function(index) {
// console.log($scope.materials)
		$scope.projectResources.push($scope.materials)
// console.log($scope.projectResources)
	}

//===============Craft Thumbnail Links===============//
		$scope.crafts = [];

		mainFactory.crafts().then( function(returnData){
			$scope.crafts = returnData.data 
			// console.log('This is $scope.crafts', $scope.crafts)
		})

		
	
	
	$scope.selectedCraft = $scope.crafts[0]


//==================Submit from Dropdowns=================//
	$scope.submitProject = function() {
		$scope.project = []
		
		$scope.project.push($scope.material01)
		$scope.project.push($scope.material02)
		$scope.project.push($scope.material03)


		for(var i = 0; i < $scope.crafts.length; i++) {
			$scope.crafts[i].craftDisplay = false
			var craftList = []

			for(var j = 0; j < $scope.crafts[i].craftMaterials.length; j++) {


				for(var k = 0; k < $scope.project.length; k++) {
					
					if($scope.project[k].name === $scope.crafts[i].craftMaterials[j]) {
						// $scope.crafts[i].craftDisplay = true
						craftList.push($scope.project[k].name)

					}

				}
			}
			console.log(craftList)
			if(craftList.length >= 2) {
				$scope.crafts[i].craftDisplay = true
			}
		}

		
	}

//=========================================================================//
	$scope.open = function (index) {
		$scope.selectedCraft = $scope.crafts[index]
		//console.log($scope.selectedCraft)
	
	}




//======================================Craft Form Inputs===========================//
	$scope.steps = [{}];
	$scope.add = function() {
	    $scope.steps.push({});
	  };


}]);


angular.module('craftApp').controller('craftController', ['$scope', '$http', '$routeParams', 'mainFactory', function($scope, $http, $routeParams, mainFactory) {
	
	var idLocation = window.location.href.split('/');
	console.log(idLocation)
	var CraftID = idLocation[4]

$http.get('/api/crafts/' + $routeParams.craftsID).then(function (returnData){
	$scope.crafts = returnData.data
	console.log($routeParams)
});

// $scope.crafts = []; 


		// mainFactory.crafts().then( function(returnData){
		// 	$scope.crafts = returnData.data 
		// 	console.log('This is $scope.crafts', $scope.crafts)
		// })



}]);






