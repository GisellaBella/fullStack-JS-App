'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;



// var mongoose = require('mongoose');
var bodyParser 	= require('body-parser');
var jsonParser 	= bodyParser.json();
var mongoose 	= require('mongoose');

var db = require('./models');



// --------------API ROUTES

// (#index) route
app.get('/', function (req, res) {
	db.Card.find(function(err, cards){
				if (err) {
				return console.log(err);
				}
	res.json(cards);
	});
});
// (#show) route
app.get('/cards/:id', function(req, res) {
	db.Card.findOne({_id: req.params.id},
	function (err, card) {
	res.json(card);
	});
});

// (#create) route
app.post('/', jsonParser, function (req, res){
	var newCard = new db.Card (req.body);
	newCard.save (function (err, card){
          if (err) { 
            return console.log("Got a get card posting error: " + err);
          } 
         res.json(card);
 	});
 });



app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});