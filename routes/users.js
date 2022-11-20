var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/donate', (req, res) => {
  res.render('donate', {title: 'Donate'})
})

router.get('/calendar', (req, res) => {
  res.render('calendar', {title: 'Calendar'})
})

router.get('/gallery', (req, res) => {
  res.render('gallery', {title: 'Gallery'})
})

module.exports = router;
