var express = require('express');
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
var router = express.Router;

router.route('/')
.post(function (req, res, next) {
    var userId = res.body.userId;
    var todoType = res.body.type;
    var message = res.body.message;
    var time = res.body.time;
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