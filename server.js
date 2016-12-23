'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;



// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');


var db = require('./models');



app.get('/', function (req, res) {
	db.Card.find(function(err, cards){
		if (err) {console.log(err);
		}
		
		res.json(cards);
});
});


app.get('/api/cards/:id', function(req, res) {
// db.Card.findOne({_id: req.params.id }
// function(err, card) {
res.json(card);
});

// });



app.post('/', jsonParser, function (req, res){
	// if (!req.body) return res.sendStatus(400);
	questionList.push(req.body);
	res.json(req.body);
});


app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});