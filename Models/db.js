var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/scrapz')

var Craft = mongoose.model('Craft', {
	craftThumbnail 	: {type: String, required : true},
	craftName 		: {type: String, required : true},
	craftMaterials 	: {type: Array, required : true},
	craftDirections : {type: Array, required : true},
	craftDisplay 	: Boolean
})

var Material = mongoose.model('Material', {
	name : {type: String, required: true}
})

var User = mongoose.model('User',{
	username 	: {type: String, required: true, unique: true},
	email 		: {type: String, required: true, unique: true},
	password 	: {type: String, required: true},
	crafts 		: {type: Array}
})




module.exports = {
	Craft 	 : Craft, 
	Material : Material,
	User 	 : User}