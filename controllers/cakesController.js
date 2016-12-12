var express = require('express');
var router = express.Router();
var Cake = require('../models/cake.js');
var User = require('../models/user.js');



//INDEX
router.get('/index', function( req, res ){
    res.send("Cakes index page");
    // res.render("cakes/index.ejs");
    // Cake.find({}, function ( err, cakes){
    //     if (err) {console.log( "There's an error in th index route: ", err)}
    //     res.render('cakes/index.ejs', { allCakes: cakes});
    // });
});








module.exports = router;
