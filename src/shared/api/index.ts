import { getEnvVar } from "../config";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseOptions: FirebaseOptions = {
  apiKey: getEnvVar("VITE_API_KEY"),
  appId: getEnvVar("VITE_APP_ID"),
  authDomain: getEnvVar("VITE_AUTH_DOMAIN"),
  measurementId: getEnvVar("VITE_MEASUREMENT_ID"),
  messagingSenderId: getEnvVar("VITE_MESSAGING_SENDER_ID"),
  storageBucket: getEnvVar("VITE_STORAGE_BUCKET"),
  projectId: getEnvVar("VITE_PROJECT_ID"),
};

export const app = initializeApp(firebaseOptions);
getAnalytics(app);

export * from "./models";
