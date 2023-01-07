var express = require('express');
var router = express.Router();
require("dotenv").config();
var paypal = require("../paypal-api.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/donate', async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  try {
    const clientToken = await paypal.generateClientToken();
    console.log(clientId, clientToken);
    res.render("donate", { clientId, clientToken, title: 'donate' });
  } catch (err) {
    res.status(500).send(err.message);
  }
})

// create order
router.post("/api/orders", async (req, res) => {
  try {  
    const order = await paypal.createOrder();
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
}); 

// capture payment
router.post("/api/orders/:orderID/capture", async (req, res) => {
  const { orderID } = req.params;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/about-us/our-story/', (req, res) => {
  res.render('about-us/our_story')
})

router.get('/about-us/board-of-trustees/', (req, res) => {
  res.render('about-us/board_of_trustees')
})

router.get('/about-us/our-staff/', (req, res) => {
  res.render('about-us/our-staff')
})

router.get('/about-us/matriarch', (req, res) => {
  res.render('about-us/matriarch')
})

router.get('/about-us', (req, res) => {
  res.render('about-us')
})

router.get('/our-work/orphanages', (req,res) => {
  res.render('our-work/orphanages')
})

router.get('/our-work/outreach', (req,res) => {
  res.render('our-work/outreach')
})

router.get('/our-work', (req,res) => {
  res.render('our-work')
})

router.get('/staff/rufi', (erq, res) => {
  res.render('staff/rufi')
})

router.get('/staff/val', (erq, res) => {
  res.render('staff/val')
})

router.get('/staff/abu', (erq, res) => {
  res.render('staff/abu')
})

router.get('/staff/cas', (erq, res) => {
  res.render('staff/cas')
})

router.get('/staff/ken', (erq, res) => {
  res.render('staff/ken')
})

router.get('/staff/edi', (erq, res) => {
  res.render('staff/edi')
})

router.get('/staff/nwa', (erq, res) => {
  res.render('staff/nwa')
})

router.get('/staff/bre', (erq, res) => {
  res.render('staff/bre')
})

router.get('/staff/dan', (erq, res) => {
  res.render('staff/dan')
})

module.exports = router;
