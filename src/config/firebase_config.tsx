import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIRE_BASE_API,
	authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
	measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID,
};

console.log("firebaseConfig", firebaseConfig);

const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);

const db = getFirestore(app);
const firebaseAuth = getAuth(app);

export {db, firebaseAuth, app};
