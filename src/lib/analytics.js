// Bot pipeline analytics module for Verity V.2
// Tracks each opportunity and shows actual/target profit
import { writable } from 'svelte/store';

export const botsAnalytics = writable([]);

/**
 * Add/update dashboard for a project.
 * @param {Object} project - Must include {title, profit, targetProfit, status, score}
 */
export function addOrUpdateBotAnalytics(project) {
  botsAnalytics.update(current => {
    // Replace if existing
    const idx = current.findIndex(p => p.title === project.title);
    if (idx !== -1) {
      current[idx] = project;
    } else {
      current.push(project);
    }
    return [...current];
  });
}
