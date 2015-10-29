angular.module('craftApp', ['ui.bootstrap']);


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

angular.module('craftApp').controller('mainController', ['$scope', '$modal', 'mainFactory', function($scope, $modal, mainFactory) {



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
		})

		console.log('This is $scope.crafts', $scope.crafts)
	// $scope.crafts =  [
	// 	{
	// 		craftThumbnail	: 'media/Hope.jpg',
	// 		craftName       : 'DIY Wood Pallet Sign',
	// 		craftMaterials  : ['wood pallet', 'paint', 'paper' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/daddydoll.jpg',
	// 		craftName       : 'Daddy Doll',
	// 		craftMaterials  : ['fabric', 'polyfill', 'thread' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/corkheart.jpg',
	// 		craftName       : 'Wine Cork Heart',
	// 		craftMaterials  : ['corks', 'hot glue gun', 'corkboard' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/beardfacewarmer.jpg',
	// 		craftName       : 'Beard Face Warmer',
	// 		craftMaterials  : ['yarn', 'crochet hooks', 'buttons' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/corkTree.jpg',
	// 		craftName       : 'Wine Cork Tree',
	// 		craftMaterials  : ['corks', 'hot glue gun', 'corkboard' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/horriblewreath.jpg',
	// 		craftName       : 'Horrible Looking Christmas Card Wreath',
	// 		craftMaterials  : ['wire hanger', 'ribbon', 'hot glue gun' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/batmancape.jpg',
	// 		craftName       : 'Crocheted Batman Cape',
	// 		craftMaterials  : ['yarn', 'crochet hooks', 'buttons' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},

	// 	{
	// 		craftThumbnail	: 'media/creamface.jpg',
	// 		craftName       : 'Cream Covered Toddler',
	// 		craftMaterials  : ['eucerin cream', 'toddler', 'paper' ],
	// 		craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
	// 		craftDisplay	:  true
	// 	},
		
	// ];
	
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


angular.module('craftApp').controller('craftController', ['$scope', '$http', function($scope, $http) {
	
	var idLocation = window.location.href.split('/');
	var CraftID = idLocation[0]

$http.get('api/crafts/' + craftID).then(function (returnData){
	$scope.crafts = returnData.data
});





}]);






