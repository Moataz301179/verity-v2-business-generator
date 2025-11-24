<script>
import { kpiMetrics } from '$lib/kpis';
$: kpis = $kpiMetrics;
</script>

<style>
.kpi-board {
  background: rgba(239, 250, 249, 0.33);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.07);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
}
.kpi-metric {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.kpi-label {
  font-size: 0.92rem;
}
</style>

<div class="kpi-board">
  <div class="kpi-metric">
    Total Profit: ${kpis.totalProfit}
  </div>
  <div class="kpi-metric">
    Total Projects: {kpis.totalProjects}
  </div>
  <div class="kpi-metric">
    Average Score: {kpis.avgScore}
  </div>
  <div class="kpi-label">
    Highest Profit Project: {kpis.highestProfitProject && kpis.highestProfitProject.title ? `${kpis.highestProfitProject.title} ($${kpis.highestProfitProject.profit})` : 'N/A'}
  </div>
  <div class="kpi-label">
    Payment Integrations: {kpis.paymentIntegrations.length}
  </div>
  <div class="kpi-label">
    Marketing Channels: {kpis.marketingChannels.length}
  </div>
</div>
