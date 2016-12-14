var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || "mongodb://localhost:27017/baked";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("public"));


var cakesController = require('./controllers/cakesController.js');
app.use('/cakes', cakesController);

var usersController = require('./controllers/usersController.js');
app.use('/users', usersController);

mongoose.connect(mongoDBURI);
mongoose.connection.once('open', function(){
    console.log("Connected to mongoDB");
    // //testing the db code----delete
    // var User = require('./models/user.js');
    // var newData = { name: "Cam" };
    // User.create(newData, function (err, createdUser){
    //     if(err) { console.log('The err is: ', err)}
    //         console.log(createdUser);
    // });//db testing done
});

app.get('/', function (req, res){
    res.render("home.ejs");
});





app.listen(port, function (){
    console.log("Baked on port: ", port);
});
