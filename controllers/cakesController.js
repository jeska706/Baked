var express = require('express');
var router = express.Router();
var Cake = require('../models/cake.js');
var User = require('../models/user.js');
var Cakes = require('../cakes.js')



//INDEX
router.get('/', function( req, res ){
    // res.send("Cakes index page");
    res.render("cakes/index.ejs");
    Cakes.find({}, function ( err, cakes){
        if (err) {console.log( "There's an error in th index route: ", err)}
        res.render('cakes/index.ejs', { allCakes: cakes});
    });
});

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
