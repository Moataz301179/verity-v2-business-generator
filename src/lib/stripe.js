// Stripe Profit Integration
// Usage: Call fetchStripeProfit() with your connected Stripe secret key (from env) and update bot/project profit analytics
import axios from 'axios';

const STRIPE_API_KEY = import.meta.env.VITE_STRIPE_API_KEY || process.env.STRIPE_API_KEY;
const STRIPE_API_URL = 'https://api.stripe.com/v1/balance';

export async function fetchStripeProfit() {
  if (!STRIPE_API_KEY) throw new Error('Missing Stripe secret key');
  try {
    const { data } = await axios.get(STRIPE_API_URL, {
      headers: { 'Authorization': `Bearer ${STRIPE_API_KEY}` }
    });
    // data.available is array of available balances (supporting multiple currencies)
    return data.available.map(({ amount, currency }) => ({ amount: amount / 100, currency }));
  } catch (err) {
    return { error: err.message };
  }
}
