var mongoose = require('mongoose');
var Cake = require('./cakes.js');


var userSchema = mongoose.Schema({
    name: String,
    cakes: [Cake.schema]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
