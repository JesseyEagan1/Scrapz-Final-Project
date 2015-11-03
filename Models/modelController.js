var db = require('./db.js')




var craftSearch = function(req, res, next){
	console.log(req.body.material01.name)
		db.Craft.find({craftMaterials: req.body.material01.name, craftMaterials: req.body.material02.name, craftMaterials: req.body.material03.name},
			
			function(err, docs){
				if(!err){
					res.send(docs)
					console.log(docs)
				} else {
					console.log(err)
				}
			})
			
}

module.exports = {
	craftSearch : craftSearch
}