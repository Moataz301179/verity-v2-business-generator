<script>
import { botsAnalytics } from '$lib/analytics';

$: botProjects = $botsAnalytics;
</script>

<style>
.card {
  background: rgba(255,255,255,0.23);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.17);
  backdrop-filter: blur(6.5px);
  border-radius: 10px;
  padding: 1.2rem;
  margin: 1rem 0;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.card-header {
  font-size: 1.2rem;
  font-weight: bold;
}
.card-profit {
  font-size: 1rem;
  color: #34A853;
}
.card-target {
  font-size: 0.95rem;
  color: #F9AB00;
}
</style>

<!-- Example usage in dashboard view -->
{#each botProjects as proj}
  <div class="card">
    <div class="card-header">{proj.title} ({proj.status})</div>
    <div>Score: {proj.score}</div>
    <div class="card-profit">Profit Generated: ${proj.profit}</div>
    <div class="card-target">Target Profit: ${proj.targetProfit}</div>
  </div>
{/each}
