var express = require('express');
var router = express.Router();


var data = {
	title: "Node",
    fileType: 'js'
};


/* GET home page. */
router.get('/', function (req, res) {
  res.render('layout', data);
});

module.exports = router;