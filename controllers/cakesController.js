var express = require('express');
var router = express.Router();
var Cake = require('../models/cakes.js');
var User = require('../models/users.js');



//INDEX ROUTE
router.get('/', function( req, res ){
    Cake.find({}, function( err, cakes){
        res.render('cakes/index.ejs', {
            allCakes: cakes
        });
    });
});

//NEW ROUTE
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
        User.findOne({'cakes._id': req.params.id}, function( err, user){
            user.cakes.id(req.params.id).remove();
            user.save(function(err, data){
                res.redirect('/cakes');
            });
        });
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
    Cake.findById(req.params.id, function(err, cake ){
        console.log(req.params.id);
        User.findOne({'cakes._id': req.params.id}, function( err, user ){
            res.render('cakes/show.ejs', {
                user: user,
                cake: cake
            });
        });
    });
});

//CREATE ROUTE
router.post('/', function( req, res ){
    User.findById(req.body.userId, function( err, user ){
        Cake.create(req.body, function( err, data ){
            user.cakes.push( data );
            user.save(function( err, data ){
                res.redirect('/cakes');
            });
        });
    });
});

//UPDATE ROUTE
router.put('/:id', function(req, res){
    Cake.findByIdAndUpdate(req.params.id, req.body, function(err, updatedCake){
        User.findOne({'cakes._id': req.params.id}, function(err, user){
            user.cakes.id( req.params.id ).remove();
                user.cakes.push( updatedCake );
                user.save(function(err, data){
                    res.redirect('/cakes/'+ req.params.id);
            });
        });
    });
});
// router.put('/:id', function( req, res ){
//     Cake.findByIdAndUpdate(req.params.id, req.body, function (err, updatedCake){
//         User.find({'cakes._id': req.params.id}, function(err, user){
//             for( var i = 0; i < user.cakes.length; i++){
//                 if( user.cakes[i]._id == req.params.id){
//                     user.cakes[i] = updatedCake;
//                     user.cakes.push( updatedCake );
//                     user.save(function(err, data){
//                         res.redirect('/cakes/'+ req.params.id);
//                 }
//             }
//
//             });
//         });
//     });
// });
// router.put('/:id', function( req, res ){
//     User.find({'cakes._id': req.params.id}, function(err, user){
//         Cake.findByIdAndUpdate(req.params.id, function(err, updatedCake){
//             user.cakes.id( req.params.id ).remove();
//             user.cakes.push( updatedCake );
//             user.save(function(err, data){
//                 res.redirect('/cakes/'+ req.params.id);
//             });
//         });
//     });
// });


//SEED
// router.get('/seed', function( req, res){
//     var data = require('../cakes.js');
//     Cake.create(data, function( err, cakes){
//         res.redirect('/cakes');
//     });
// });



module.exports = router;
