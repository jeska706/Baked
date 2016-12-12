var mongoose = require('mongoose');

var cakeSchema = mongoose.Schema({
    name: String,
    img: String,
    description: String,
    fillings:String,
    frosting: String,
    cakeType: String,
    decor: String,
    events: String
});

var Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
