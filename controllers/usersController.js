var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Cake = require('../models/cakes.js');


//INDEX
router.get('/', function( req, res ){
    // res.send("User's index page");
    User.find({}, function ( err, users){
        if (err) {console.log( "There's an error in the index route: ", err)}
        res.render('users/index.ejs', {
            users: users
        });
    });
});

//CREATE ROUTE
router.post('/', function( req, res ){
    // Cake.findByIdAndUpdate(req.body.cakeId, function(err, cake){
        User.create(req.body, function(err, user){
            // cake.users.push(user);
            // cake.save(function(err, data){
                res.redirect('/users');
            });
        // });
    // });
});

//NEW ROUTE
router.get('/new', function( req, res ){
    User.find({}, function( err, user ){
        res.render('users/new.ejs', {
        user: user,
        });
        // res.redirect('/cakes')

    });
});

//SHOW ROUTE
router.get('/:id', function( req, res ){
    // res.send("users show page");
    res.render('users/show.ejs');
});







module.exports = router;
