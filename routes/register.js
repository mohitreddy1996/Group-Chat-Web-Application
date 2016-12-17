var express = require('express');
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var userName = req.body.userName;
    var userId = req.body.userId;
    var userPasswrd = req.body.userPasswrd;
    mongoHelper.findUser(cons.DBName, cons.UserCollection, userId, function (err, dbResults) {
        if(err){
            res.status(500).json("Error while looking up for user in users db.");
        } else{
            if(dbResults.length > 0){
                res.status(500).json("Already user exists for %s", userId);
            }else{
                mongoHelper.addUser(cons.DBName, cons.UserCollection, userName, userId, userPasswrd, function (err, dbResults) {
                    if(err){
                        res.status(500).json("User could not be added");
                    } else{
                        res.statusCode(200).json("Success");
                        res.redirect('/');
                    }
                });
            }
        }
    });
});

module.exports = router;
