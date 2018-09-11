import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDNf0JvtXLpZiT08yDW2qEz4TYz7TXPa_U",
  authDomain: "testrecords-ed8e2.firebaseapp.com",
  databaseURL: "https://testrecords-ed8e2.firebaseio.com",
  projectId: "testrecords-ed8e2",
  storageBucket: "testrecords-ed8e2.appspot.com",
  messagingSenderId: "758465732333"
};
export const firebaseApp = firebase.initializeApp(config);
