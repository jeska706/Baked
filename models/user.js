var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    cakes: []
});

var User = mongoose.model("User", userSchema);

module.exports = User;
