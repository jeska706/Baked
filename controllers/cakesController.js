var express = require('express');
var router = express.Router();
var Cake = require('../models/cakes.js');
var User = require('../models/users.js');



//INDEX
router.get('/', function( req, res ){
    // res.send("Cakes index page");
    Cake.find({}, function( err, cakes){
        if (err) {console.log( "There's an error in th index route: ", err)}
        res.render('cakes/index.ejs', { cakes: cakes});
    });
});

//CREATE ROUTE
router.post('/', function( req, res ){
    User.findByIdAndUpdate(req.body.userId, function(err, foundUser){
        Cake.create(req.body, function(err, createdCake){
            foundUser.cakes.push(createdCake);
            foundUser.save(function(err, data){
                res.redirect('/cakes');
            });
        });
    });
});


//EDIT ROUTE



//UPDATE ROUTE


//DELETE ROUTE


//NEW ROUTE
router.get('/new', function( req, res){
    res.render('cakes/new.ejs');
});


//SHOW ROUTE
router.get('/:id', function( req, res ){
    Cake.findById(req.params.id, function (err, cake){
        res.render('cakes/show.ejs', {
            cake: cake
        });
    });
});






module.exports = router;
