var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakesSchema = new Schema({
    name: {type:String, default: "N/A"},
    img: {type:String, default: "N/A"},
    cite: {type:String, default: "N/A"},
    origin: {type:String, default: "N/A"},
    description: {type:String, default: "N/A"}
});

var Cake = mongoose.model('Cake', cakesSchema);

module.exports = Cake;
