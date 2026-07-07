import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCD1pNIi_fh05UogNpLuelpP4pRDGBLfyM",
  authDomain: "raot-hris.firebaseapp.com",
  projectId: "raot-hris",
  storageBucket: "raot-hris.firebasestorage.app",
  messagingSenderId: "80888048924",
  appId: "1:80888048924:web:71b95f114c56e9b1d1ded9",
  measurementId: "G-25T5H28HKG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

console.log("✅ Firebase Connected");