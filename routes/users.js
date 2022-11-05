var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/donate', (req, res, next) => {
  res.render('donate')
})

router.get('/calendar', (req, res, next) => {
  res.render('calendar')
})

router.get('/gallery', (req, res, next) => {
  res.render('gallery')
})

module.exports = router;
