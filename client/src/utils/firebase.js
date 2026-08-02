import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const getFirebaseEnv = (key) =>
  (import.meta.env[key] || "")
    .trim()
    // Also tolerates values copied from a JavaScript object: "value",
    .replace(/^["']+|["',\s]+$/g, "");

const firebaseConfig = {
  apiKey: getFirebaseEnv("VITE_FIREBASE_API_KEY"),
  authDomain: getFirebaseEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: getFirebaseEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: getFirebaseEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: getFirebaseEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: getFirebaseEnv("VITE_FIREBASE_APP_ID"),
  measurementId: getFirebaseEnv("VITE_FIREBASE_MEASUREMENT_ID"),
};

let app = null;
let auth = null;
let provider = null;

const isConfigured = () => {
  const requiredFields = [
    firebaseConfig.apiKey,
    firebaseConfig.authDomain,
    firebaseConfig.projectId,
    firebaseConfig.storageBucket,
    firebaseConfig.messagingSenderId,
    firebaseConfig.appId,
  ];

  return requiredFields.every((value) => {
    const normalized = (value || "").trim();
    return Boolean(normalized) &&
      !normalized.includes("add your") &&
      !normalized.includes("your-firebase") &&
      !normalized.includes("your-project");
  });
};

if (isConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
  } catch (error) {
    console.warn("Firebase init failed, using demo auth fallback.", error);
  }
}

export { auth, provider };
