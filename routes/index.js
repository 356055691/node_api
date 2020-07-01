var express = require('express');
var router = express.Router();

const getlist = require(`../api/getlist`);
const add = require(`../api/add`);

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my/getlist', getlist.index);
router.get('/my/add', add.index);

module.exports = router;
