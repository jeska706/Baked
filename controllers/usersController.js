var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Cake = require('../models/cake.js');


//INDEX
router.get('/', function( req, res ){
    // res.send("User's index page");
    res.render("users/index.ejs");
    // User.find({}, function ( err, users){
    //     if (err) {console.log( "There's an error in the index route: ", err)}
    //     res.render('users/index.ejs', { allUsers: users});
    // });
});

//NEW ROUTE
router.get('/new', function( req, res){
    res.render('users/new.ejs');
});

//SHOW ROUTE
router.get('/:id', function( req, res ){
    // res.send("users show page");
    res.render('users/show.ejs');
});







module.exports = router;
