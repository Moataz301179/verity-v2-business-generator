// Extended KPIs, Data Aggregation, & Visualization Logic
// Svelte store for KPIs, history, aggregation, external API integration
import { writable } from 'svelte/store';

export const kpiMetrics = writable({
  totalProfit: 0,
  totalProjects: 0,
  avgScore: 0,
  highestProfitProject: {},
  paymentIntegrations: [],
  marketingChannels: [],
  timeline: [],
});

/**
 * Aggregate all analytics data into KPIs (profit, score, marketing, payment)
 * @param {Array} analytics Projects analytics array [{title, profit, score, ...}]
 * @param {Array} payments Payment provider configs [{provider, account, link}]
 * @param {Array} marketing Marketing channel configs [{channel, details}]
 */
export function aggregateKPIs(analytics, payments=[], marketing=[]) {
  let totalProfit = analytics.reduce((sum, a) => sum + (a.profit || 0), 0);
  let totalProjects = analytics.length;
  let avgScore = totalProjects ? analytics.reduce((sum, a) => sum + (a.score || 0), 0) / totalProjects : 0;
  let highestProfitProject = analytics.reduce((max, a) => a.profit > (max.profit||0) ? a : max, {});
  kpiMetrics.set({
    totalProfit,
    totalProjects,
    avgScore,
    highestProfitProject,
    paymentIntegrations: payments,
    marketingChannels: marketing,
    timeline: analytics.map(proj => ({ title: proj.title, profit: proj.profit, target: proj.targetProfit, ts: Date.now() }))
  });
}
