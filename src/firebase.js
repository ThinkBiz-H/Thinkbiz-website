// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

let analyticsInstance = null;

export async function getAnalyticsInstance() {
  if (analyticsInstance) return analyticsInstance;
  const supported = await isSupported();
  if (supported) {
    analyticsInstance = getAnalytics(app);
    return analyticsInstance;
  }
  return null;
}

export { db, auth };
