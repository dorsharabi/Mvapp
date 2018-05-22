var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var MovieSchema = mongoose.Schema({
	uName: {
		type: String
	},
	title: {
		type: String
	},
	year: {
		type: String
	},
	genre: {
		type: String
	},
	length: {
		type:String
	}
});

var Movie = module.exports = mongoose.model('Movie', MovieSchema);
//var collection = db.collection('movies');

// https://www.npmjs.com/package/bcryptjs
module.exports.createMovie = function(newMovie, callback){
	newMovie.save(callback);
}

module.exports.getAllOrders = function(uName, callback){	
	console.log("we r at get all orders");
	Movie.distinct("title",{uName: uName},callback);
}





