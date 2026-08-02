import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { env } from './env';

// Initialize Firebase only if it hasn't been initialized yet
export const app = getApps().length === 0 ? initializeApp(env.firebase) : getApps()[0];

// Initialize Analytics only if supported (browser environment)
export const analytics = typeof window !== 'undefined' ? 
  isSupported().then(yes => yes ? getAnalytics(app) : null) : 
  Promise.resolve(null);
