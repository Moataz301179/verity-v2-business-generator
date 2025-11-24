<script>
// This is a basic glassmorphism dashboard shell.
import { opportunityPipeline, businessHealth, buildProgress, alerts } from '$lib/stores';
</script>

<style>
.dashboard {
  background: rgba(255,255,255, 0.17);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 1200px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.section {
  margin-bottom: 2rem;
}
.header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>

<div class="dashboard">
  <div class="header">VERITY v2 – Autonomous Business Generator Dashboard</div>
  <div class="section">
    <h2>Real-time Opportunity Detection</h2>
    <!-- Render opportunity pipeline here -->
    {#each $opportunityPipeline as opp}
      <div>{opp.title} – Score: {opp.score}</div>
    {/each}
  </div>
  <div class="section">
    <h2>Active Build Progress</h2>
    {#each $buildProgress as proj}
      <div>{proj.name} – {proj.status}</div>
    {/each}
  </div>
  <div class="section">
    <h2>Business Health & Revenue</h2>
    {#each $businessHealth as health}
      <div>{health.businessName} – Revenue: {health.revenue} – Status: {health.status}</div>
    {/each}
  </div>
  <div class="section">
    <h2>Alerts & Notifications</h2>
    {#each $alerts as alert}
      <div>{alert.message} ({alert.type})</div>
    {/each}
  </div>
</div>
