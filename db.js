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

module.exports = (Craft : Craft)