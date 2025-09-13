export default function Subscriptions(){ 
  async function buy(plan){ 
    const token = prompt('Enter your token'); 
    // map plan to a Stripe price ID placeholder
    const mapping = { basic10: 'price_basic_10', basic20: 'price_basic_20', pro35: 'price_pro_35', unlimited: 'price_unlimited' };
    const priceId = mapping[plan];
    const res = await fetch('/api/payments/create-checkout-session', {method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify({priceId})});
    const j = await res.json();
    if(j.url) { window.location = j.url; } else { alert('Error creating checkout session: '+JSON.stringify(j)); }
  } 
  return (<div style={{padding:20}}><h2>Subscriptions (Stripe Checkout)</h2><p>This will redirect to Stripe Checkout (use STRIPE keys in backend .env).</p><button onClick={()=>buy('basic10')}>Buy Basic 10</button><button onClick={()=>buy('basic20')}>Buy Basic 20</button><button onClick={()=>buy('pro35')}>Buy Pro 35</button><button onClick={()=>buy('unlimited')}>Buy Unlimited</button></div>); 
}
