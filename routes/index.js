var express = require('express');
var router = express.Router();

const getlist = require(`../api/getlist`);
const add = require(`../api/add`);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/getlist', getlist.index);
router.get('/api/add', add.index);

module.exports = router;
