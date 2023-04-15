// Require the PayPal SDK module
const paypal = require('paypal-rest-sdk');

// Configure PayPal SDK
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'YOUR_PAYPAL_CLIENT_ID',
  'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'
});

// Set up donation details
app.post('/donate', function(req, res) {
  const amount = req.body.amount;

  const donationDetails = {
    "intent": "donate",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "amount": {
        "total": amount,
        "currency": "USD"
      },
      "description": "Donation"
    }]
  };

  // Create donation payment
  paypal.payment.create(donationDetails, function (error, payment) {
    if (error) {
      throw error;
    } else {
      // Redirect to PayPal for payment approval
      for(let i = 0; i < payment.links.length; i++) {
        if(payment.links[i].rel === 'approval_url') {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

// Execute payment after approval
app.get('/success', function(req, res) {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const executePaymentDetails = { 
    "payer_id": payerId 
  };

  paypal.payment.execute(paymentId, executePaymentDetails, function (error, payment) {
    if (error) {
      throw error;
    } else {
      // Payment executed successfully
      res.send('Thank you for your donation!');
    }
  });
});

// Handle donation cancellation
app.get('/cancel', function(req, res) {
  res.send('Donation cancelled');
});
