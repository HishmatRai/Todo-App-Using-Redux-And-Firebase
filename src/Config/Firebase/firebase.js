import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC9RAgVuLQfOritfatdi1yswfkvonFws-0",
    authDomain: "todoappusingreduxandfirebase.firebaseapp.com",
    databaseURL: "https://todoappusingreduxandfirebase.firebaseio.com",
    projectId: "todoappusingreduxandfirebase",
    storageBucket: "",
    messagingSenderId: "630508717296",
    appId: "1:630508717296:web:20d68ab248a513e94eee35"
  };

  export default firebase.initializeApp(firebaseConfig);