// PayMob Integration for Verity V.2
// Securely connects to PayMob API to charge payments and fetch profits
import axios from 'axios';

const PAYMOB_API_KEY = import.meta.env.VITE_PAYMOB_API_KEY || process.env.PAYMOB_API_KEY;
const PAYMOB_SECRET_KEY = import.meta.env.VITE_PAYMOB_SECRET_KEY || process.env.PAYMOB_SECRET_KEY;
const PAYMOB_BASE_URL = 'https://accept.paymobsolutions.com/api';

/**
 * Obtains PayMob auth token
 * Returns: token string
 */
export async function paymobAuthToken() {
  try {
    const res = await axios.post(`${PAYMOB_BASE_URL}/auth/tokens`, {
      api_key: PAYMOB_API_KEY
    });
    return res.data.token;
  } catch (err) {
    return { error: err.message };
  }
}

/**
 * Fetch transaction profits (sample, can be expanded)
 */
export async function fetchPaymobTransactions(authToken) {
  try {
    const res = await axios.get(`${PAYMOB_BASE_URL}/ecommerce/orders`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    return res.data.results; // Array of orders with amount, status, etc.
  } catch (err) {
    return { error: err.message };
  }
}

/**
 * Charge payment (sample, for end user payments via PayMob)
 * @param {object} chargeInfo - {amount_cents, currency, ...}
 */
export async function createPaymobPayment(authToken, chargeInfo) {
  try {
    const res = await axios.post(`${PAYMOB_BASE_URL}/acceptance/payment_keys`, chargeInfo, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    return res.data; // Includes payment token for frontend
  } catch (err) {
    return { error: err.message };
  }
}