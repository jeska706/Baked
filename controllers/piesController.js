// var express = require('express');
// var router = express.Router();
// var Pie = require('../models/pies.js');
// var User = require('../models/users.js');
//
//
//
// //INDEX
// router.get('/', function( req, res ){
//     Pie.find({}, function( err, pies ){
//         res.render('pies/index.ejs', {
//             allPies: pies
//         });
//     });
// });
//
// //NEW ROUTE
// router.get("/new", function( req, res ){
//     User.find({}, function( err, allUsers ){
//         res.render('pies/new.ejs', {
//             users: allUsers
//         });
//     });
// });
//
//
// //DELETE ROUTE
// router.delete('/:id', function( req, res ){
//     Pie.findByIdAndRemove(req.params.id, function( err, pie ){
//         User.findOne({'pies._id': req.params.id}, function( err, user ){
//             user.pies.id( req.params.id ).remove();
//             user.save(function( err, data ){
//                 res.redirect('/pies');
//             });
//         });
//     });
// });
//
// //EDIT ROUTE
// router.get('/:id/edit', function( req, res ){
//     Pie.findById(req.params.id, function( err, updatedPie ){
//         res.render('pies/edit.ejs', {
//             pie: updatedPie
//         });
//     });
// });
//
// //SHOW ROUTE
// router.get('/:id', function( req, res ){
//     Pie.findById(req.params.id, function( err, pie ){
//         User.find({'pies._id': req.params.id}, function( err, user ){
//             res.render('pies/show.ejs', {
//                 user: user,
//                 pie: pie
//             });
//         });
//     });
// });
//
// //CREATE ROUTE
// router.post('/', function( req, res ){
//     User.findById(req.body.userId, function( err, user ){
//         Pie.create(req.body, function( err, data ){
//             user.pies.push( data );
//             user.save(function( err, data){
//                 res.redirect('/pies');
//             });
//         });
//     });
// });
//
//
//
// //UPDATE ROUTE
// router.put('/:id', function( req, res ){
//     Pie.findByIdAndUpdate(req.params.id, req.body, function( err, updatedPie ){
//         User.find({'pies._id': req.params.id}, function( err, user ){
//             console.log(req.params.id);
//             user.pies.id( req.params.id ).remove();
//             user.pies.push( updatedPie );
//             user.save(function( err, data ){
//                 console.log(user);
//                 res.redirect('/pies/'+ req.params.id);
//             });
//         });
//     });
// });
//
//
// module.exports = router;
