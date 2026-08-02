import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';

/**
 * Utility function to track analytics events across the application.
 * Uses Firebase Analytics under the hood.
 * In development, it logs the event to the console.
 */
export const trackEvent = async (eventName: string, params?: Record<string, any>) => {
  // Always log to console in development for verification
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}`, params || {});
  }

  try {
    const analyticsInstance = await analytics;
    if (analyticsInstance) {
      logEvent(analyticsInstance, eventName, params);
    }
  } catch (error) {
    console.error('Failed to log event', error);
  }
};
