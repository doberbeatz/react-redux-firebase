import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6jHLmwT3nsif31h3GflLifjuCWnAAf6M",
  authDomain: "marioplan-36ec2.firebaseapp.com",
  databaseURL: "https://marioplan-36ec2.firebaseio.com",
  projectId: "marioplan-36ec2",
  storageBucket: "marioplan-36ec2.appspot.com",
  messagingSenderId: "714121572217",
  appId: "1:714121572217:web:c9fb35d1279d38e65509a8",
  measurementId: "G-XLGXVT5SZ9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase