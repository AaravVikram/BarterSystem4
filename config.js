import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDd_mAkxhlxA-ndOERvJcIeCEFlscCXr3w",
  authDomain: "barter-system-bd85e.firebaseapp.com",
  projectId: "barter-system-bd85e",
  storageBucket: "barter-system-bd85e.appspot.com",
  messagingSenderId: "666295535128",
  appId: "1:666295535128:web:f3e62571e367f2c192a56d"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
