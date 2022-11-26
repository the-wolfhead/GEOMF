var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/donate', (req, res) => {
  res.render('donate', {title: 'Donate'})
})

router.get('/about-us/our-story', (req, res) => {
  res.render('about-us/our-story')
})

router.get('/about-us/board-of-trustees', (req, res) => {
  res.render('about-us/board_of_trustees')
})

router.get('/about-us/our-staff', (req, res) => {
  res.render('about-us/our-staff')
})

router.get('/about-us', (req, res) => {
  res.render('about-us')
})

router.get('/our-work/orphanages', () => {
  res.remder('our-work/orphanages')
})

router.get('/our-work/outreach', () => {
  res.remder('our-work/outreach')
})

router.get('/our-work', () => {
  res.remder('our-work')
})


module.exports = router;
