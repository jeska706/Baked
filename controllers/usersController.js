var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Cake = require('../models/cakes.js');
// var Pie = require('../models/pies.js');

//INDEX
router.get('/', function( req, res ){
    User.find({}, function ( err, users){
        res.render('users/index.ejs', {
            allUsers: users
        });
    });
});

//CREATE ROUTE
router.post('/', function( req, res ){
    User.create(req.body, function(err, user){
        res.redirect('/users');
    });
});

//NEW ROUTE
router.get('/new', function( req, res ){
    res.render('users/new.ejs');
});

//SHOW ROUTE
router.get('/:id', function( req, res ){
    User.findById(req.params.id, function( err, user ){
        res.render('users/show.ejs', {
            user: user
        });
    });
});

//DELETE ROUTE
router.delete('/:id', function( req, res ){
    User.findByIdAndRemove(req.params.id, function( err, user ){
        // for( var i = 0; i < user.pies.length; i++){
        //     Pie.findByIdAndRemove(user.pies[i]._id, function( err, data){
        //         res.redirect('/users');
        //     });
        // };
        for( var i = 0; i < user.cakes.length; i++){
            Cake.findByIdAndRemove(user.cakes[i]._id, function( err, data){
                res.redirect('/users');
            });
        };
    });
    // res.redirect('/users');
});

//UPDATE ROUTE
router.put('/:id', function( req, res ){
    User.findByIdAndUpdate(req.params.id, req.body, function (err, data){
        res.redirect('/users');
    });
});

//EDIT ROUTE
router.get('/:id/edit', function( req, res ){
    User.findById(req.params.id, function (err, user){
        res.render('users/edit.ejs', {
            user: user
        });
    });
});


module.exports = router;
