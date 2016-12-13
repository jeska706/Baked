var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakesSchema = new Schema({
    name: String,
    img: String
    // description: String,
    // fillings:[],
    // frosting: String,
    // cakeType: String,
    // decor: [],
    // events: []
});

var Cake = mongoose.model('Cake', cakesSchema);

module.exports = Cake;
