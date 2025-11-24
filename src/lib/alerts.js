// Alert/Notification Module
// Used for profit milestones, errors, and human-intervention triggers
import { writable } from 'svelte/store';

export const alerts = writable([]);

/**
 * Sends an alert to the dashboard/state
 * @param {Object} alert { message, type: 'profit'|'error'|'approval'|'info', project }
 */
export function sendAlert(alert) {
  alerts.update(current => [...current, { ...alert, time: Date.now() }]);
}