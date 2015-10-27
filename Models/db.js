var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/scrapz')

var Craft = mongoose.model('Craft', {
	craftThumbnail : {type: String, required : true},
	craftName : {type: String, required : true},
	craftMaterials : {type: Array, required : true},
	craftDirections : {type: Array, required : true},
	craftDisplay : Boolean
})
console.log('Craft', Craft)

var crafts =  [
		{
			craftThumbnail	: 'media/Hope.jpg',
			craftName       : 'DIY Wood Pallet Sign',
			craftMaterials  : ['wood pallet', 'paint', 'paper' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/daddydoll.jpg',
			craftName       : 'Daddy Doll',
			craftMaterials  : ['fabric', 'polyfill', 'thread' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/corkheart.jpg',
			craftName       : 'Wine Cork Heart',
			craftMaterials  : ['corks', 'hot glue gun', 'corkboard' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/beardfacewarmer.jpg',
			craftName       : 'Beard Face Warmer',
			craftMaterials  : ['yarn', 'crochet hooks', 'buttons' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/corkTree.jpg',
			craftName       : 'Wine Cork Tree',
			craftMaterials  : ['corks', 'hot glue gun', 'corkboard' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/horriblewreath.jpg',
			craftName       : 'Horrible Looking Christmas Card Wreath',
			craftMaterials  : ['wire hanger', 'ribbon', 'hot glue gun' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/batmancape.jpg',
			craftName       : 'Crocheted Batman Cape',
			craftMaterials  : ['yarn', 'crochet hooks', 'buttons' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},

		{
			craftThumbnail	: 'media/creamface.jpg',
			craftName       : 'Cream Covered Toddler',
			craftMaterials  : ['eucerin cream', 'toddler', 'paper' ],
			craftDirections : ['Supplies Needed: Morbi at blandit magna, in eleifend sem. Etiam bibendum tincidunt neque, sit amet lobortis libero viverra a.', 'Step 1: Proin nec velit velit. In posuere, libero non interdum posuere, tellus elit sodales lectus, nec rutrum nibh nunc quis magna. Proin in felis eget ante venenatis maximus. Pellentesque at nunc nec sem lacinia tempor.', 'Step 2: Sed dapibus arcu eu ligula rutrum, ac finibus tortor venenatis. Nullam suscipit turpis dui, ut sollicitudin leo pharetra in. Fusce eget lectus pharetra urna volutpat venenatis. Donec eu felis nec nulla sodales auctor. Fusce ornare, nibh non feugiat venenatis, diam elit consectetur enim, at dignissim libero quam ac dolor.', 'Step 3: Pellentesque et aliquet mi. Nunc luctus erat nunc, in efficitur massa consequat et. Aenean a enim quis metus pulvinar porta at vel nisi. Maecenas condimentum massa nec sem pretium consequat.	Fusce aliquam nisl ac felis gravida dictum. Aliquam molestie leo vel iaculis blandit. Mauris risus est, aliquam non sem at, fringilla tristique orci. Aenean luctus justo id libero eleifend pretium. Ut vulputate vestibulum erat, non porta leo molestie in.',  'Step 4: Donec sit amet tincidunt enim, vitae molestie neque. Vestibulum vel augue eu urna dignissim congue. Nunc imperdiet lacus non neque dapibus, eu blandit dui finibus. Quisque fermentum sodales elit, sed consectetur urna semper eu. Sed porttitor tellus ac elit faucibus consequat.	Phasellus a eros odio. Cras efficitur urna est, eget placerat tellus venenatis tempor. Nam ante est, pharetra a tristique quis, viverra ut libero. Aliquam facilisis, sem eu dapibus condimentum, mi lorem sollicitudin dolor, ut molestie sem nunc sed velit.'],
			craftDisplay	:  true
		},
		
	];

	for(var i = 0; i < crafts.length; i++) {
		var newCraft = new Craft(crafts[i])
		newCraft.save(function(err){
			console.log(err);
		});
	}