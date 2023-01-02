"use strict";

var express = require('express');
var router = express.Router();
require("dotenv").config();
var paypal = require("../paypal-api.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/donate', async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  try {
    const clientToken = await paypal.generateClientToken();
    res.render("donate", {
      clientId,
      clientToken
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

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
  const {
    orderID
  } = req.params;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get('/about-us/our-story/', (req, res) => {
  res.render('about-us/our_story');
});
router.get('/about-us/board-of-trustees/', (req, res) => {
  res.render('about-us/board_of_trustees');
});
router.get('/about-us/our-staff/', (req, res) => {
  res.render('about-us/our-staff');
});
router.get('/about-us', (req, res) => {
  res.render('about-us');
});
router.get('/our-work/orphanages', (req, res) => {
  res.render('our-work/orphanages');
});
router.get('/our-work/outreach', (req, res) => {
  res.render('our-work/outreach');
});
router.get('/our-work', (req, res) => {
  res.render('our-work');
});
module.exports = router;