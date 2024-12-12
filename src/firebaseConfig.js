import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD_jG69vsYZrZ2mFD0KaezVYBiGxdWQe3Y",
    authDomain: "placement-buddies.firebaseapp.com",
    projectId: "placement-buddies",
    storageBucket: "placement-buddies.firebasestorage.app",
    messagingSenderId: "239223288067",
    appId: "1:239223288067:web:988864a21ebe9d2fcdf936"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
