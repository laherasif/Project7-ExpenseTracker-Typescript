import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAyD9RFtv6ImkWTw4pHS1OIMCWdk2t9p80",
  authDomain: "native-368ce.firebaseapp.com",
  databaseURL: "https://native-368ce.firebaseio.com",
  projectId: "native-368ce",
  storageBucket: "native-368ce.appspot.com",
  messagingSenderId: "468180858740",
  appId: "1:468180858740:web:588e628a8ef7d18d"
};

  firebase.initializeApp(firebaseConfig);
  let messaging = firebase.messaging();

export const Firebase = () =>{

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            messaging.getToken().then((currentToken:string) => {
                if (currentToken) {
                  
                } else {
                  // Show permission request.
                  console.log('No registration token available. Request permission to generate one.');
                  // Show permission UI.
                }
              }).catch((err:string) => {
                console.log('An error occurred while retrieving token. ', err);
               
              });
        }
    })
}