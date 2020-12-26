import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'


firebase.initializeApp({
    apiKey: "AIzaSyA2ELkkWdXzOfm9rQloS-VHrwDjJ9ZQ6xs",
  authDomain: "lesson-8390b.firebaseapp.com",
  projectId: "lesson-8390b",
  storageBucket: "lesson-8390b.appspot.com",
  messagingSenderId: "853840924068",
  appId: "1:853840924068:web:9cd798ada3a18a165e4531",
  measurementId: "G-95VSE63QJM"
})


let storage=firebase.storage();
let auth=firebase.auth();

export{
    firebase, storage, auth
}