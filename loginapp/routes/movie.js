var express = require('express');
var router = express.Router();

var Movie = require('../models/movie');

//register User
router.post('/orderMovie',function(req,res){
	var uName = req.body.uName;
	var title = req.body.title;
	var year = req.body.year;
	var genre = req.body.genre;
	var length = req.body.length;
	var newMovie = new Movie({
		uName: uName,
		title: title,
		year: year,
		genre: genre,
		length: length
	});
		console.log(newMovie.toString());
		Movie.createMovie(newMovie, function(err, movie){
			if(err) throw err;
			//console.log(movie);
		});
		
		req.flash('success_msg', 'You are registered and can now login');
});
//getAllOrders
router.get('/getAllOrders/:un',function(req,res){
	var un = req.params.un;
	console.log("We R at getAllOrders - restApi");
	Movie.getAllOrders(un, function(err, movieList){
		if(err) throw err;
		console.log("in rest: " + movieList);
		res.json(movieList); 
	});	
});

module.exports = router;












