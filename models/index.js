var mongoose = require("mongoose");
mongoose.connect ("mongodb://localhost/card");

var Card = require("./card");


module.exports.Card = require("./card.js");
