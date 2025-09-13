const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_xxx');

// Create checkout session for subscription plans
router.post('/create-checkout-session', async (req, res) => {
  const {priceId, successUrl, cancelUrl} = req.body;
  if(!priceId) return res.status(400).json({msg:'priceId required'});
  try{
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{price: priceId, quantity: 1}],
      success_url: successUrl || (process.env.SITE_URL + '/subscriptions?success=1'),
      cancel_url: cancelUrl || (process.env.SITE_URL + '/subscriptions?canceled=1'),
    });
    res.json({url: session.url});
  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message});
  }
});

// Webhook endpoint (to be configured with Stripe webhook secret)
router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  let event;
  try {
    if(webhookSecret){
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      event = req.body;
    }
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the event
// Enhanced handling for subscription fulfillment (attempt):
const { sendMail } = require('../utils/mailer');

async function fulfillSubscription(session){
  // session may contain metadata.customer_user_id or client_reference_id; try to infer user
  try{
    const custId = session.client_reference_id || (session && session.customer);
    // Note: for a robust integration, set client_reference_id to user id when creating session from frontend
    // Here we handle a few heuristics: if client_reference_id exists and is a user id, set subscription
    if(!custId) { console.log('No client_reference_id to map to user'); return; }
    const userId = custId;
    // determine plan from session.line_items or metadata
    const plan = (session.metadata && session.metadata.plan) || 'basic10';
    const mapping = { basic10:10, basic20:20, pro35:35, unlimited:9999, verifiedpro:0 };
    const quota = mapping[plan] || 10;
    const Subscription = require('../models/Subscription');
    let sub = await Subscription.findOne({userId: userId});
    if(!sub) sub = new Subscription({userId: userId});
    sub.plan = plan;
    sub.quota = quota;
    sub.status = 'active';
    sub.stripeSubscriptionId = session.subscription || session.id || '';
    await sub.save();
    // If this was a Verified Pro purchase, set provider profile badge
    if(plan === 'verifiedpro'){
      const ProviderProfile = require('../models/ProviderProfile');
      const prof = await ProviderProfile.findOne({userId});
      if(prof){ prof.verifiedBadge = true; await prof.save(); }
    }
    console.log('Fulfilled subscription for user', userId, 'plan', plan);
  }catch(err){ console.error('Error in fulfillSubscription', err); }
}

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Checkout session completed', event.data.object);
      fulfillSubscription(event.data.object);
      break;
    case 'invoice.payment_succeeded':
      console.log('Payment succeeded', event.data.object);
      break;
    default:
      console.log('Unhandled event type', event.type);
  }
  res.json({received: true});
});

module.exports = router;
