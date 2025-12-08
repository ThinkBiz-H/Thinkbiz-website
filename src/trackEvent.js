import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

const trackEvent = (eventName, eventData = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, eventData);
  }
};

export default trackEvent;
