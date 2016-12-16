var mongoose = require('mongoose');
var Cake = require('./cakes.js');
var Pie = require('./pies.js');

var userSchema = mongoose.Schema({
    name: String,
    cakes: [Cake.schema]
    // ,pies: [Pie.schema]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
