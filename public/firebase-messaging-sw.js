importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDr2YgyErMLCi_sZfccbes9T3bI3ViFiNI",
  authDomain: "pwa-message-48118.firebaseapp.com",
  databaseURL: "https://pwa-message-48118.firebaseio.com",
  projectId: "pwa-message-48118",
  storageBucket: "pwa-message-48118.appspot.com",
  messagingSenderId: "872026643076",
  appId: "1:872026643076:web:08d0934611ba47c601c0d1",
  measurementId: "G-Z8FGQ6VNRK"
};
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();


  