import { writable } from 'svelte/store';
// Opportunity pipeline store, tracks scores and data for detected opportunities
export const opportunityPipeline = writable([]);
// Health and revenue for running businesses
export const businessHealth = writable([]);
// Build progress for active AI projects
export const buildProgress = writable([]);
// Alerts and notifications
export const alerts = writable([]);