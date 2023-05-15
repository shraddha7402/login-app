import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBorL_ormXamfRBvYf5pmTk-3_ygugjm1w",
  authDomain: "phone-authentication-68312.firebaseapp.com",
  projectId: "phone-authentication-68312",
  storageBucket: "auth-otp-f66fe.appspot.com",
  messagingSenderId: "34889473803",
  appId: "1:34889473803:web:2b00aa9c946b764ddbcc0e"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
