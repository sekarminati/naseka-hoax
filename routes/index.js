var express = require('express');
var router = express.Router();

const content_controller = require('../controllers/contentController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', content_controller.content_create_post);

module.exports = router;
