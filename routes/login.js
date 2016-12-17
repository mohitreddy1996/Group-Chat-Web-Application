var express = require('express');
var router = express.Router();
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
/* GET home page. */
router.post('/', function(req, res, next) {
    var userId = req.body.userId;
    var userPassWrd = req.body.userPasswrd;

    // Find user with the same userId. if present then check password. Then proceed.
    mongoHelper.findUser(cons.DBName, cons.UserCollection, userId, function (err, results) {
        if(err){
            res.status(500).json("Error while Logging into the System.");
        }else{
            if(results.length > 0){
                if(results[0].userPasswrd == userPassWrd){
                    res.redirect("/home?uid=" + userId);
                }else{
                    res.status(500).json("Wrong Password try again!!")
                }
            }else{
                res.status(500).json("No user with user %s found in the database", userId);
            }
        }
    });
});

module.exports = router;
