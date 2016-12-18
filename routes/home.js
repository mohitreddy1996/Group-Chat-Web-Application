var express = require('express');
var router = express.Router();

router.get('', function (req, res, next) {
    var userId = req.query.uid;
    res.render('home');
});

module.exports = router;