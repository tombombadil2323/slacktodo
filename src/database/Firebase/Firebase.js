import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyATCiWnnckiN8XAftyYeVy1krhzlBheGqg",
  authDomain: "eatelefant.firebaseapp.com",
  databaseURL: "https://eatelefant.firebaseio.com",
  projectId: "eatelefant",
  storageBucket: "eatelefant.appspot.com",
  messagingSenderId: "180736974553"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;