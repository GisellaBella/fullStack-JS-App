'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;



// var mongoose = require('mongoose');
var bodyParser 	= require('body-parser');
var jsonParser 	= bodyParser.json();
var mongoose 	= require('mongoose');

var db = require('./models');

// Build an HTML form that will allow us to submit a new card through our new POST route. Since this is Angular, you will probably want to use ng-submit.
// Add a button on each card that allows you to DELETE a card. Connect this to a DELETE route on your back end. (Hint: this one is a little tricky. You will need to pass the delete method from your controller into your cardDirective template. You should look at the Custom Directives Lab for details on how to do this.)
// Use a form that lets you edit and UPDATE a card. For now, just display it under each card. Try to borrow as much as you can from your work with the form from #1.



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


// Public Routes
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});


// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});