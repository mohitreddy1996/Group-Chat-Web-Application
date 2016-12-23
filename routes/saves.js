var express = require('express');
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
var router = express.Router();

router.route('/save')
.post(function (req, res, next) {
    var userId = req.body.userId;
    var todoType = req.body.type;
    var message = req.body.message;
    var time = req.body.time;
    var status = false;
    
    var dto = {
        'userId': userId,
        'todoType': todoType,
        'message': message,
        'status': status,
        'time': time
    };
    
    mongoHelper.addItem(cons.DBName, cons.ChatsCollection, dto, function (err, results) {
        if(err){
            res.status(500).json("Error in saving data");
        }else{
            res.status(200).json("Successfully saved");
        }
    });
});

router.route('/get')
.post(function (req, res, next) {
    var userId = req.body.userId;
    var dto = {
        'userId' : userId
    };
    mongoHelper.findItem(cons.DBName, cons.ChatsCollection, dto, function (err, results) {
        if(!err){
            res.status(200).json(results);
        } else{
            res.status(500).json("Error while Getting the data");
        }
    });
});

router.route('/edit')
    .post(function (req, res, next) {
        var userId = req.body.userId;
        var message = req.body.content;
        var time = req.body.time;

        var obj = {
            'userId': userId,
            'message': message,
            'time': time
        };

        var updateObj = {
            '$set' : {
                'status':true
            }
        };
        mongoHelper.updateItem(cons.DBName, cons.ChatsCollection, obj, updateObj, function (err, results) {
            if(!err){
                res.status(200).json("Successfully updated!");
            } else{
                res.status(500).json("Error while Updating");
            }
        });
    });


router.route('/remove')
    .post(function (req, res, next) {
        var userId = req.body.userId;
        var message = req.body.content;
        var time = req.body.time;

        var obj = {
            'userId': userId,
            'message': message,
            'time': time
        };
        
        mongoHelper.deleteItem(cons.DBName, cons.ChatsCollection, obj, function(err, results){
            if(!err){
                res.status(200).json("Successfully removed");
            } else{
                res.status(500).json("Error while removing item");
            }
        });
    });
module.exports = router;