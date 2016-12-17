var express = require('express');
var router = express.Router();
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
/* GET home page. */
router.get('/', function(req, res, next) {
    var userId = req.body.userId;
    var userPassWrd = req.body.userPasswrd;

    // Find user with the same userId. if present then check password. Then proceed.
    mongoHelper.findUser(cons.DBName, cons.UserCollection, userId, function (err, results) {
        if(err){
            res.status(500).json("")
        }
    });
});

module.exports = router;
