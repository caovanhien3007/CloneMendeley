import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAkbruYsJdXmBmej5rOOMsn9Ts0gtYC57o",
    authDomain: "mendeley-35473.firebaseapp.com",
    databaseURL: "https://mendeley-35473.firebaseio.com",
    projectId: "mendeley-35473",
    storageBucket: "mendeley-35473.appspot.com",
    messagingSenderId: "617385808707",
    appId: "1:617385808707:web:d9c344bd11971e233355f6",
    measurementId: "G-17S91TSQMZ"
  };

export const Firebase = firebase.initializeApp(firebaseConfig);
