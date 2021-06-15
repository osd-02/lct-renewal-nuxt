require("dotenv").config();
import flamelink from "flamelink/app";
import { firebase } from "@firebase/app";
// This example uses RTDB (Realtime Database) - replace with `cf` for Cloud Firestore
import "flamelink/cf/content";
import "flamelink/cf/storage";
// import 'flamelink/rtdb/settings'
// import 'flamelink/rtdb/navigation'
// import 'flamelink/rtdb/users'

export default ({ app }) => {
  let firebaseApp;

  if (process.server) {
    const admin = require("firebase-admin");

    if (!admin.apps.length) {
      const serviceAccount = require("../serviceAccountKey.json");
      firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.FLAMELINK_DB_URL,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET
      });
    } else {
      firebaseApp = admin.app();
    }
  } else {
    require("firebase/auth");
    require("firebase/firestore");

    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp({
        apiKey: process.env.FLAMELINK_API_KEY,
        authDomain: process.env.FLAMELINK_AUTH_DOMAIN,
        projectId: process.env.FLAMELINK_PROJECT_ID,
        databaseURL: process.env.FLAMELINK_DB_URL,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
        messagingSenderId: process.env.FLAMELINK_MESSAGING_SENDER_ID
      });
    } else {
      firebaseApp = firebase.app();
    }
  }
  console.log(firebaseApp);
  // console.log(process.env);
  app.flamelink = flamelink({ firebaseApp, dbType: "cf" });
};
