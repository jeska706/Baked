var express = require('express');
var router = express.Router();
var Cake = require('../models/cakes.js');
var User = require('../models/users.js');



//INDEX
router.get('/', function( req, res ){
    Cake.find({}, function( err, cakes){
        res.render('cakes/index.ejs', {
            allCakes: cakes
        });
    });
});

//new
router.get("/new", function( req, res ){
    User.find({}, function( err, allUsers){
        res.render('cakes/new.ejs', {
            users: allUsers
        });
    });
});

//DELETE ROUTE
router.delete('/:id', function( req, res ){
    Cake.findByIdAndRemove(req.params.id, function( err, cake ){
    //     User.findOne({"cakes._id": req.params.id}, function( err, user){
    //         user.cakes.id(req.params.id).remove();
    //         user.save(function( err, data ){
                res.redirect('/cakes');
    //         });
    //     });
    });
});

//EDIT ROUTE
router.get('/:id/edit', function( req, res ){
    Cake.findById(req.params.id, function (err, updatedCake){
        res.render('cakes/edit.ejs', {
            cake: updatedCake
        });
    });
});

//SHOW ROUTE
router.get('/:id', function( req, res ){
    Cake.findById(req.params.id, function (err, cake){
        // User.findOne({ "cakes._id": req.params.id}, function( err, user){
            res.render('cakes/show.ejs', {
            //     user: user,
               cake: cake
            // });
        });
    });
});

//create
router.post('/', function( req, res){
    Cake.create(req.body, function( err, data){
        res.redirect('/cakes');
    });
});



//UPDATE ROUTE
router.put('/:id', function( req, res ){
    Cake.findByIdAndUpdate(req.params.id, req.body, function (err, data){
        // User.findOne({ "cakes._id":req.params.id }, function (err, user){
        //     user.cakes.id(req.params.id).remove();
        //     user.cakes.push(req.body);
        //     user.save(function( err, data ){
                res.redirect('/cakes/' + req.params.id);
        //     });
        // });
    });
});





module.exports = router;
