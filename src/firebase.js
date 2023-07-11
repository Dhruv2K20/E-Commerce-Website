import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBlZTZ14MPVNK9vVC4eiN1Bx5ZJLU8e8Ic",
  authDomain: "mystore-site.firebaseapp.com",
  projectId: "mystore-site",
  storageBucket: "mystore-site.appspot.com",
  messagingSenderId: "479135242986",
  appId: "1:479135242986:web:160754bd9c9afb3fcf5593",
  measurementId: "G-BP9W30K082"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };