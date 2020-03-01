import * as firebase                                                from "firebase/app";
import fbPrivateInfo from "./fbPrivateInfo";
import "firebase/auth";
import "firebase/firestore";

const {
  API_KEY,
  PROJECT_ID,
  MESSAGING_SENDER_ID,
  MEASUREMENT_ID
} = fbPrivateInfo;

const config = {
  apiKey:            `${API_KEY}`,
  authDomain:        `${PROJECT_ID}.firebaseapp.com`,
  databaseURL:       `https://${PROJECT_ID}.firebaseio.com`,
  projectId:         `${PROJECT_ID}`,
  storageBucket:     `${PROJECT_ID}.appspot.com`,
  messagingSenderId: `${MESSAGING_SENDER_ID}`,
  appId:             `1:${MESSAGING_SENDER_ID}:web:f39c488e68d4339e6300a0`,
  measurementId:     `${MEASUREMENT_ID}`,
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };

