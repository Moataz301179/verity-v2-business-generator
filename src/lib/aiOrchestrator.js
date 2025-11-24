// AI Reasoner Orchestration Module for Verity V.2
// Uses Perplexity API for reasoning, planning, and decision chains (secure API key from env)
import axios from 'axios';

const PPLX_API_KEY = import.meta.env.VITE_PPLX_API_KEY || process.env.PPLX_API_KEY;

/**
 * Calls Perplexity API LLM to analyze, plan, and score opportunities.
 * Returns: { plan, validation, reasoning, execSteps, finalScore }
 */
export async function aiPlanAndValidateOpportunity(opp) {
  if (!PPLX_API_KEY) return { error: 'Missing Perplexity API Key' };
  const prompt = `You are an autonomous business AI. For this opportunity: "${opp.title}" with trend data ${JSON.stringify(opp)}, give:\n 1. A detailed step-by-step plan to build and launch an MVP.\n 2. A risk and competition analysis.\n 3. Monetization methods and expected revenue streams.\n 4. A success score (0-100).\n 5. What should trigger human intervention (if any).\n Output as JSON.`;
  try {
    const { data } = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonnet-4-5',
        messages: [
          { role: 'system', content: 'You are a world-class business AI agent.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1000
      },
      {
        headers: {
          'Authorization': `Bearer ${PPLX_API_KEY}`,
          'content-type': 'application/json'
        }
      }
    );
    return data?.choices?.[0]?.message?.content;
  } catch (err) {
    return { error: err.message };
  }
}
