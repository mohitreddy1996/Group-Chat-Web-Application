var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req, res) {
    return res.render('home.ejs', {});
});

module.exports = router;